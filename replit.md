# Vaultix v1.3

## Overview
Vaultix is a React-based security dashboard application built with Vite and TypeScript. It provides a security management interface with AI-powered analysis capabilities using Google's Gemini API.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **UI**: TailwindCSS (via CDN)
- **AI Integration**: Google Gemini API (@google/genai)
- **Icons**: Lucide React

## Directory Structure
```
/
├── App.tsx              # Main application component
├── index.tsx            # React entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies
├── components/
│   ├── AnalysisPanel.tsx
│   └── Terminal.tsx
├── services/
│   └── geminiService.ts # Gemini AI service
└── types.ts             # TypeScript types
```

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Environment Variables
- `GEMINI_API_KEY`: Google Gemini API key for AI features

## Recent Changes
- 2026-01-11: Initial import from GitHub
  - Configured Vite for Replit environment (port 5000, allowedHosts: true)
  - Removed frame-buster script for iframe compatibility
  - Set up deployment configuration
