# Polynote AI 🎙️🤖

An intelligent voice-powered note-taking application with AI integration using Google's Gemini AI.

## ✨ Features

- 🎤 **Voice Recording** with real-time speech-to-text
- 🤖 **AI-Powered Analysis** using Google Gemini
- 📝 **Automatic Categorization** and tagging
- 🔍 **Smart Search** and filtering
- 🌙 **Dark Mode** support
- 📱 **Responsive Design**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon recommended)
- Google Gemini API key

### Setup

1. **Clone and install:**
   ```bash
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database URL and Google API key
   ```

3. **Database setup:**
   ```bash
   npm run db:generate
   npm run db:push
   ```

4. **Start development:**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Database (Neon PostgreSQL)
1. Create a [Neon](https://neon.tech) account
2. Create a new project
3. Copy the connection string to `.env.local`

### Google Gemini AI
1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add to `.env.local`:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
   ```

## 📊 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Drizzle ORM
- **AI**: Google Gemini 1.5 Flash
- **Deployment**: Vercel

## 🗄️ Database Schema

- **Notes**: Store voice notes with metadata
- **Tags & Categories**: AI-generated organization
- **Search**: Full-text search capabilities

## 🎯 Usage

1. **Take Notes**: Click "Take Notes" and start recording
2. **AI Analysis**: Gemini automatically analyzes and categorizes
3. **Review**: Browse and search your notes in "Review Notes"

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## 🤝 Contributing

See [setup.md](./setup.md) for detailed development setup.

## 📝 License

MIT License
