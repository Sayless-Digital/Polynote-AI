# Polynote AI Setup Guide

## 🚀 What's Missing to Make It Work

### 1. **Database Setup** (PostgreSQL with Neon)
You need a PostgreSQL database. The easiest option is [Neon](https://neon.tech):

1. Sign up for a free Neon account
2. Create a new project
3. Copy the connection string
4. Update `.env.local`:
   ```bash
   DATABASE_URL="postgresql://username:password@hostname/database"
   ```

### 2. **Google AI API Key**
Get your Google Gemini API key:

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Update `.env.local`:
   ```bash
   GOOGLE_GENERATIVE_AI_API_KEY="your_actual_api_key_here"
   ```

### 3. **Database Migration**
Run these commands to set up your database schema:

```bash
# Generate migration files
npm run db:generate

# Push schema to database
npm run db:push
```

### 4. **Start Development**
```bash
npm run dev
```

## 🔧 Current Status

✅ **Fixed Issues:**
- Speech recognition error handling with user-friendly messages
- Added database migration scripts
- Environment configuration template

⚠️ **Still Using Mock Features:**
- Audio transcription (currently returns mock text)
- Some AI features may need real API keys to work

## 🎯 Quick Setup Commands

```bash
# 1. Install dependencies (if not done)
npm install

# 2. Copy environment file
cp .env.example .env.local

# 3. Edit .env.local with your actual keys
nano .env.local

# 4. Generate and push database schema
npm run db:generate
npm run db:push

# 5. Start development server
npm run dev
```

## 🌐 Deployment

For production deployment on Vercel:

1. Push your code to GitHub
2. Connect Vercel to your repository
3. Add environment variables in Vercel dashboard
4. Deploy!

## 🐛 Known Issues

1. **Speech Recognition Network Error**: May occur if offline or API blocked
2. **Mock Transcription**: Currently uses fake transcription - needs real speech-to-text API
3. **Database Connection**: Requires valid DATABASE_URL

## 📞 Need Help?

The app should work locally once you:
1. Set up a Neon PostgreSQL database
2. Get a Google Gemini API key
3. Run the database migrations
4. Start the development server
