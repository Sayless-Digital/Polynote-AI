import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailVerificationData {
  name: string;
  email: string;
  verificationUrl: string;
}

export interface WelcomeEmailData {
  name: string;
  email: string;
}

export async function sendVerificationEmail(data: EmailVerificationData) {
  try {
    const { name, email, verificationUrl } = data;
    
    const result = await resend.emails.send({
      from: 'PolyNote <noreply@polynote.ai>',
      to: [email],
      subject: 'Verify your PolyNote account',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify your PolyNote account</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Welcome to PolyNote!</h1>
          </div>
          <div class="content">
            <h2>Hi ${name},</h2>
            <p>Thank you for signing up for PolyNote! To complete your account setup, please verify your email address by clicking the button below:</p>
            
            <div style="text-align: center;">
              <a href="${verificationUrl}" class="button">Verify Email Address</a>
            </div>
            
            <p>If the button doesn't work, you can also copy and paste this link into your browser:</p>
            <p style="word-break: break-all; background: #e9ecef; padding: 10px; border-radius: 4px; font-family: monospace;">${verificationUrl}</p>
            
            <p>This link will expire in 24 hours for security reasons.</p>
            
            <p>If you didn't create an account with PolyNote, you can safely ignore this email.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br>The PolyNote Team</p>
            <p>This email was sent to ${email}</p>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Failed to send verification email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendWelcomeEmail(data: WelcomeEmailData) {
  try {
    const { name, email } = data;
    
    const result = await resend.emails.send({
      from: 'PolyNote <noreply@polynote.ai>',
      to: [email],
      subject: 'Welcome to PolyNote! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to PolyNote</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .feature { background: white; padding: 20px; margin: 15px 0; border-radius: 6px; border-left: 4px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎉 Welcome to PolyNote!</h1>
          </div>
          <div class="content">
            <h2>Hi ${name},</h2>
            <p>Your email has been verified and your PolyNote account is now active! You're all set to start taking intelligent notes with AI assistance.</p>
            
            <h3>What you can do with PolyNote:</h3>
            
            <div class="feature">
              <strong>📝 Smart Note Taking</strong><br>
              Take notes with voice input and get AI-powered transcriptions and summaries.
            </div>
            
            <div class="feature">
              <strong>🤖 AI Chat Interface</strong><br>
              Chat with your notes and get intelligent insights from your content.
            </div>
            
            <div class="feature">
              <strong>📁 Organized Storage</strong><br>
              Your notes are automatically tagged and categorized for easy retrieval.
            </div>
            
            <div style="text-align: center;">
              <a href="${process.env.NEXTAUTH_URL || 'http://localhost:3000'}" class="button">Start Taking Notes</a>
            </div>
            
            <p>If you have any questions or need help getting started, feel free to reach out to our support team.</p>
          </div>
          <div class="footer">
            <p>Happy note-taking!<br>The PolyNote Team</p>
            <p>This email was sent to ${email}</p>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

