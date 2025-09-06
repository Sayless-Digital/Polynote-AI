import { cookies } from 'next/headers';
import { db, users, sessions, emailVerificationTokens } from '@polynote/db';
import { eq, and, gt } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';

export interface User {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
  avatar?: string;
  preferences?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  createdAt: Date;
}

// Password hashing
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Session management
export async function createSession(userId: string): Promise<Session> {
  const token = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

  const [session] = await db.insert(sessions).values({
    userId,
    token,
    expiresAt,
  }).returning();

  return session;
}

export async function getSession(token: string): Promise<Session | null> {
  const [session] = await db
    .select()
    .from(sessions)
    .where(and(
      eq(sessions.token, token),
      gt(sessions.expiresAt, new Date())
    ))
    .limit(1);

  return session || null;
}

export async function deleteSession(token: string): Promise<void> {
  await db.delete(sessions).where(eq(sessions.token, token));
}

// Email verification
export async function createEmailVerificationToken(userId: string): Promise<string> {
  const token = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  await db.insert(emailVerificationTokens).values({
    userId,
    token,
    expiresAt,
  });

  return token;
}

export async function verifyEmailToken(token: string): Promise<string | null> {
  const [verificationToken] = await db
    .select()
    .from(emailVerificationTokens)
    .where(and(
      eq(emailVerificationTokens.token, token),
      gt(emailVerificationTokens.expiresAt, new Date())
    ))
    .limit(1);

  if (!verificationToken) {
    return null;
  }

  // Mark user as verified
  await db.update(users)
    .set({ emailVerified: true })
    .where(eq(users.id, verificationToken.userId));

  // Delete the verification token
  await db.delete(emailVerificationTokens)
    .where(eq(emailVerificationTokens.token, token));

  return verificationToken.userId;
}

// User management
export async function getUserByEmail(email: string): Promise<User | null> {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return user || null;
}

export async function getUserByEmailWithPassword(email: string): Promise<(User & { passwordHash: string }) | null> {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return user || null;
}

export async function getUserById(id: string): Promise<User | null> {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  return user || null;
}

export async function createUser(email: string, name: string, password: string): Promise<User> {
  const passwordHash = await hashPassword(password);
  
  const [user] = await db.insert(users).values({
    email,
    name,
    passwordHash,
  }).returning();

  return user;
}

// Authentication helpers
export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('session')?.value;
  
  if (!sessionToken) {
    return null;
  }

  const session = await getSession(sessionToken);
  if (!session) {
    return null;
  }

  return getUserById(session.userId);
}

export async function requireAuth(): Promise<User> {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}

// Cookie helpers
export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
