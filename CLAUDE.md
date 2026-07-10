# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Progressive Web App (PWA) for finance education, designed similar to Duolingo but focused on comprehensive finance knowledge. The app provides interactive learning experiences for all finance concepts, theories, calculations, terms, and words.

## Technology Stack

- **Frontend**: React.js with React Router
- **Styling**: CSS modules and plain CSS
- **Build Tool**: Create React App
- **API Integration**: Wikipedia REST API
- **Deployment**: Vercel (PWA capabilities)

## Project Structure

```
src/
├── components/     # Reusable UI components (Header, etc.)
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
   - Use responsive design principles

4. **Routing**:
   - Use React Router for navigation between pages
   - Keep URLs semantic and meaningful

## API Integration

The app integrates with the Wikipedia REST API to fetch finance-related content:

- `wikipediaService.js` contains functions to search for terms and fetch term details
- Content is displayed in the TermDetailPage with links to full Wikipedia articles
- Error handling is implemented for API failures

## Current Features

1. **Homepage**: Attractive landing page with clear call-to-action, feature highlights, testimonials, and statistics
2. **Learning Page**: Structured lessons with completion tracking, progress visualization, and search functionality
3. **Categories Page**: Browse finance topics by category with search functionality and learning path guidance
4. **Search Page**: Search Wikipedia for any finance terms with popular terms suggestions and search tips
5. **Term Detail Page**: Detailed view of finance terms with Wikipedia content, related terms, and learning actions
6. **Navigation Header**: Consistent navigation across all pages

## Design Principles

1. **Mobile-First**: All designs are responsive and work well on mobile devices
2. **PWA Ready**: Can be installed on mobile devices like a native app
3. **Visual Appeal**: Modern gradient backgrounds, smooth animations, and card-based layouts
4. **User Experience**: Clear navigation, intuitive interfaces, and engaging interactions
5. **Accessibility**: Proper contrast ratios, semantic HTML, and keyboard navigation support

## Functionality

1. **Wikipedia Integration**: Real-time fetching of finance terms from Wikipedia
2. **Search System**: Comprehensive search across all finance terms with quick results
3. **Progress Tracking**: Visual progress indicators and completion markers
4. **Related Terms**: Contextual learning with related concept suggestions
5. **Offline Capability**: PWA features allow for offline access to cached content
6. **Learning Path Guidance**: Personalized learning path recommendations

## Recent Improvements

1. **Consistent Navigation**: Added a unified header component across all pages
2. **Enhanced Homepage**: Added testimonials, statistics, and dual call-to-action buttons
3. **Improved Learning Page**: Better progress visualization, quick search results, and learning tips
4. **Enhanced Categories Page**: Added learning path section and improved category cards
5. **Better Search Page**: Added search tips and improved result presentation
6. **Responsive Design**: Improved mobile experience across all pages

## Future Development Areas

1. **Backend API**: User authentication, progress tracking, and content management
2. **Interactive Learning Features**: Quizzes, exercises, and gamification elements
3. **Personalized Learning Paths**: AI-driven recommendations based on user progress
4. **Social Features**: Leaderboards, sharing, and community learning
5. **Advanced Analytics**: Learning insights and progress visualization
6. **Offline Content**: Cached Wikipedia content for offline learning

## Content Strategy

The app uses a hybrid approach:
1. Base content from Wikipedia API for comprehensive finance terms and concepts
2. Custom interactive exercises and quizzes built on top of that content
3. Structured learning paths that guide users through finance topics systematically
4. Curated popular terms and categories for easy onboarding

## Deployment

The app is configured for deployment on Vercel:
1. Connect GitHub repository to Vercel
2. Automatic deployments on push to main branch
3. Custom domain support
4. SSL certificates provided automatically