# Finance Learning App

A Duolingo-style learning platform for finance education with comprehensive content covering all finance concepts, theories, calculations, terms, and words.

## Overview

This app provides an interactive way to learn finance concepts through bite-sized lessons, quizzes, and progress tracking - similar to Duolingo but focused entirely on finance education.

## Features

- Comprehensive finance knowledge base (like Wikipedia for finance)
- Interactive lessons and quizzes
- Progress tracking and streaks
- Personalized learning paths
- Mobile-first responsive design (PWA)

## Technology Stack

- **Frontend**: React.js with Material-UI
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Deployment**: Vercel/Netlify for frontend, Heroku/Docker for backend

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

```bash
# Clone the repository
git clone https://github.com/easyhigth/finance-learning-app.git
cd finance-learning-app

# Install dependencies
npm install

# Start development server (supports client-side routing automatically)
npm start

# Build for production
npm run build

# Preview the production build locally
# Important: use the -s flag so React Router routes work on refresh.
npm run serve
```

## Deployment Notes

This app uses React Router for client-side navigation. When serving the production build, the server must return `index.html` for every route so React Router can handle the URL. This is configured automatically for Vercel in `vercel.json`.

If you see a 404 when refreshing or directly visiting a route like `/learn`, it means the static server is not configured for single-page applications. Use one of these options:

- **Vercel**: connect the repository and deploy; `vercel.json` handles the rewrites.
- **serve (local preview)**: run `npm run serve` (which uses `serve -s build`).
- **Other static hosts**: set up a rewrite rule so all paths serve `index.html`.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── assets/         # Images, icons, and other assets
├── utils/          # Utility functions
├── services/       # API service functions
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── styles/         # CSS and styling files
└── config/         # Configuration files
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT