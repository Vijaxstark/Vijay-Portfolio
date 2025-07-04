# Vijay Krishna R V - Portfolio Website

## Overview

This is a professional portfolio website built for Vijay Krishna R V, a Machine Learning Engineer specializing in deep learning, computer vision, and multi-modal AI systems. The application showcases his projects, research publications, professional experience, and achievements through an elegant, modern interface.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database serverless PostgreSQL
- **Session Management**: PostgreSQL-based session storage

## Key Components

### Client-Side Components
1. **Navigation**: Fixed navigation with smooth scrolling
2. **Hero Section**: Animated introduction with typewriter effect
3. **About Section**: Professional overview with profile image
4. **Projects Section**: Showcase of ML/AI projects with metrics
5. **Experience Section**: Professional work history
6. **Publications Section**: Research publications and conferences
7. **Skills Section**: Technical skills with proficiency levels
8. **Certifications Section**: Educational achievements
9. **Competitions Section**: Competition wins and achievements
10. **Contact Section**: Contact information and resume download

### Server-Side Components
1. **Routes**: API endpoints for resume download
2. **Static File Serving**: PDF resume delivery
3. **Database Schema**: User management with Drizzle ORM
4. **Storage Layer**: In-memory storage with PostgreSQL fallback

## Data Flow

1. **Client Rendering**: React components render statically with SSR fallback
2. **Asset Delivery**: Static assets served through Express middleware
3. **Resume Download**: API endpoint serves PDF resume file
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Session Management**: PostgreSQL-based session storage for scalability

## External Dependencies

### Frontend Dependencies
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Animation**: Framer Motion for page transitions and interactions
- **Styling**: Tailwind CSS with custom design system
- **Date Handling**: date-fns for date formatting
- **Form Handling**: React Hook Form with Zod validation

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking

### Development Tools
- **Build Tool**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Linting**: ESLint with React and TypeScript rules
- **Database Migrations**: Drizzle Kit for schema management

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **Backend**: Express server with middleware mode Vite integration
- **Database**: Environment-based DATABASE_URL configuration

### Production Build
- **Frontend**: Vite build with optimized bundling
- **Backend**: esbuild bundling for Node.js deployment
- **Assets**: Static file serving with Express
- **Database**: PostgreSQL with connection pooling

### Environment Configuration
- **NODE_ENV**: Development vs production mode switching
- **DATABASE_URL**: PostgreSQL connection string
- **Build Output**: Separate client and server build artifacts

## Changelog

Changelog:
- July 04, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.