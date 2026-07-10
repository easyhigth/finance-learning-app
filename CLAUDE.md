# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Progressive Web App (PWA) for finance education, designed similar to Duolingo but focused on comprehensive finance knowledge. The app aims to provide interactive learning experiences for all finance concepts, theories, calculations, terms, and words.

## Technology Stack

- **Frontend**: React.js with React Router
- **Styling**: CSS modules and plain CSS
- **Build Tool**: Create React App
- **API Integration**: Wikipedia REST API
- **Deployment**: Can be deployed as a PWA to any static hosting service

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Header      # Navigation header
│   ├── LessonCard  # Card component for displaying lessons
│   ├── SearchBar   # Search input component
│   ├── ProgressBar # Progress visualization component
├── pages/          # Page components (HomePage, LearnPage, etc.)
├── services/       # API service functions
├── data/           # Static data files
├── utils/          # Utility functions
├── styles/         # Global CSS and styling files
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
   - Use component-specific CSS files
   - Follow the existing naming conventions

4. **Routing**:
   - Use React Router for navigation between pages
   - Keep URLs semantic and meaningful

## API Integration

The app integrates with the Wikipedia REST API to fetch finance-related content:

- `wikipediaService.js` contains functions to search for terms and fetch term details
- Content is displayed in the TermDetailPage with links to full Wikipedia articles
- Error handling is implemented for API failures

## Current Features

1. **Homepage**: Overview with progress tracking and feature highlights
2. **Learning Page**: Structured lessons with completion tracking
3. **Categories Page**: Browse finance topics by category
4. **Search Page**: Search Wikipedia for finance terms
5. **Term Detail Page**: Detailed view of finance terms with Wikipedia content

## Future Development Areas

1. **Backend API**: Will need to be developed to handle user data, progress tracking, and content management
2. **Interactive Learning Features**: Quizzes, exercises, progress tracking
3. **User Authentication**: Login/signup functionality
4. **Database**: MongoDB for storing user progress and custom content
5. **Gamification**: Points, achievements, streaks
6. **Offline Support**: Enhanced PWA capabilities for offline learning

## Content Strategy

The app uses a hybrid approach:
1. Base content from Wikipedia API for comprehensive finance terms and concepts
2. Custom interactive exercises and quizzes built on top of that content
3. Structured learning paths that guide users through finance topics systematically