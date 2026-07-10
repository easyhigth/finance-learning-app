# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Progressive Web App (PWA) for finance education, designed similar to Duolingo but focused on comprehensive finance knowledge. The app aims to provide interactive learning experiences for all finance concepts, theories, calculations, terms, and words.

## Technology Stack

- **Frontend**: React.js with React Router
- **Styling**: CSS modules and plain CSS
- **Build Tool**: Create React App
- **Deployment**: Can be deployed as a PWA to any static hosting service

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components (HomePage, LearnPage, etc.)
├── assets/         # Images, icons, and other static assets
├── utils/          # Utility functions
├── services/       # API service functions
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── styles/         # CSS and styling files
└── config/         # Configuration files
```

## Development Commands

- `npm start` - Starts the development server
- `npm test` - Runs the test suite
- `npm run build` - Builds the app for production

## Development Guidelines

1. **Component Structure**: 
   - Create reusable components in `src/components/`
   - Create page-specific components in `src/pages/`
   - Use functional components with hooks

2. **State Management**:
   - Use React Context API for global state
   - Use useState and useEffect for local component state

3. **Styling**:
   - Use CSS modules for component-specific styles
   - Use plain CSS for global styles

4. **Routing**:
   - Use React Router for navigation between pages

## Future Development Areas

1. **Backend API**: Will need to be developed to handle user data, progress tracking, and content management
2. **Wikipedia Integration**: API calls to fetch finance-related content from Wikipedia
3. **Interactive Learning Features**: Quizzes, exercises, progress tracking
4. **User Authentication**: Login/signup functionality
5. **Database**: MongoDB for storing user progress and custom content

## Content Strategy

The app will use a hybrid approach:
1. Base content from Wikipedia API for comprehensive finance terms and concepts
2. Custom interactive exercises and quizzes built on top of that content
3. Structured learning paths that guide users through finance topics systematically