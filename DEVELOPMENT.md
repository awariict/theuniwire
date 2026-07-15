# TheUniWire Project Structure & Development Guide

## Project Overview

TheUniWire is a professional, responsive news platform built for Nigerian universities. It features role-based access control, content management, and a modern UI inspired by the original TheUniWire website.

## Tech Stack

- **Frontend**: Next.js 14 (React 18, TypeScript)
- **Styling**: Tailwind CSS with custom color scheme
- **State Management**: Zustand
- **Authentication**: NextAuth.js (to be implemented)
- **API Communication**: Axios
- **Animations**: Framer Motion
- **UI Icons**: React Icons
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns

## Project Structure

```
theuniwire/
├── app/                           # Next.js App Router
│   ├── api/                       # API routes
│   │   ├── auth/                  # Authentication endpoints
│   │   └── health/                # Health check endpoint
│   ├── admin/                     # Admin pages (protected)
│   │   ├── page.tsx               # Dashboard
│   │   ├── articles/              # Article management
│   │   └── users/                 # User management
│   ├── articles/                  # Articles pages
│   │   ├── page.tsx               # All articles
│   │   └── [slug]/                # Single article
│   ├── auth/                      # Auth pages
│   │   ├── login/
│   │   └── register/
│   ├── about/                     # About page
│   ├── contact/                   # Contact page
│   ├── privacy/                   # Privacy policy
│   ├── terms/                     # Terms of service
│   ├── layout.tsx                 # Root layout
│   ├── globals.css                # Global styles
│   └── page.tsx                   # Home page
├── components/                    # React components
│   ├── common/                    # Common components
│   │   ├── Unauthorized.tsx       # 403 page
│   │   └── LoadingSpinner.tsx     # Loading indicator
│   ├── layout/                    # Layout components
│   │   ├── Header.tsx             # Navigation header
│   │   └── Footer.tsx             # Footer
│   └── features/                  # Feature components
│       ├── Hero.tsx               # Hero section
│       ├── CategoriesGrid.tsx     # Category browsing
│       ├── SearchBar.tsx          # Search component
│       ├── articles/              # Article components
│       │   ├── FeaturedArticles.tsx
│       │   ├── LatestArticles.tsx
│       │   ├── ArticleCard.tsx
│       │   ├── ArticleDetail.tsx
│       │   └── ArticlesGrid.tsx
│       ├── auth/                  # Auth components
│       │   ├── LoginForm.tsx
│       │   └── RegisterForm.tsx
│       ├── comments/              # Comment components
│       └── admin/                 # Admin components
│           ├── AdminDashboard.tsx
│           ├── ArticleManagement.tsx
│           └── UserManagement.tsx
├── hooks/                         # Custom React hooks
│   ├── useAuth.ts                 # Auth hook
│   └── usePagination.ts           # Pagination hook
├── store/                         # Zustand stores
│   └── auth.ts                    # Auth store
├── utils/                         # Utility functions
│   ├── api-client.ts              # API client with interceptors
│   ├── date.ts                    # Date utilities
│   ├── string.ts                  # String utilities
│   └── validation.ts              # Validation utilities
├── constants/                     # Constants and enums
│   ├── roles.ts                   # Role definitions
│   ├── article-categories.ts      # Category definitions
│   └── index.ts                   # Exported constants
├── types/                         # TypeScript types
│   └── index.ts                   # Type definitions
├── public/                        # Static assets
│   ├── favicon.svg                # Site favicon
│   └── logo.svg                   # Site logo
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
├── next.config.js                 # Next.js configuration
├── postcss.config.js              # PostCSS configuration
├── .eslintrc.json                 # ESLint configuration
├── .prettierrc.json               # Prettier configuration
├── .env.example                   # Environment template
├── .gitignore                     # Git ignore
├── package.json                   # Dependencies
└── README.md                      # Project documentation
```

## User Roles & Permissions

### Super Admin
- Full system access
- User management (create, edit, delete)
- Role management
- Article approval and deletion
- System settings
- Analytics access

### Admin
- Article approval/rejection
- Article deletion
- Editor management
- Analytics viewing
- University management

### Editor
- Create articles
- Edit own articles
- Upload media
- Submit articles for approval

### User
- Read articles
- Comment on articles
- Like articles
- View university profiles

## Article Categories

1. **News** - General university news
2. **Events** - Campus events and activities
3. **Features** - In-depth feature stories
4. **Announcements** - Official announcements
5. **Campus Life** - Student life and culture
6. **Sports** - Sports and athletics
7. **Entertainment** - Entertainment and arts
8. **Academic** - Academic and research news

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/awariict/theuniwire.git
cd theuniwire
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your settings
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Type checking
npm run format       # Format code with Prettier
```

## Color Scheme

The application uses a professional color palette:

- **Primary**: Blue (`#6599ff` - `#1d4588`)
- **Secondary**: Coral (`#f18c81` - `#6b1b00`)
- **Accent**: Green (`#22c55e` - `#145231`)
- **Neutral**: Gray (`#f9fafb` - `#111827`)

## Typography

- **Font Family**: Inter (sans-serif), Merriweather (serif)
- **Font Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

## Key Features Implementation

### Authentication
- Implement with NextAuth.js
- Support email/password and OAuth providers
- JWT token-based authorization
- Protected routes for admin pages

### Article Management
- Create, read, update, delete articles
- Draft and published states
- Article approval workflow
- Rich text editing with media support
- Reading time estimation

### Search & Filtering
- Full-text search on articles
- Filter by category
- Filter by publication date
- Sort by views, likes, date

### User Management
- User registration and profile
- Role assignment
- User activity tracking
- User preference settings

### Analytics
- Article views and engagement
- User activity metrics
- Popular articles and categories
- Traffic sources

## Development Guidelines

### Component Structure

```typescript
// Use 'use client' for client components
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ComponentProps {
  // Props definition
}

export function Component({ prop }: ComponentProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### File Naming

- Components: PascalCase (e.g., `ArticleCard.tsx`)
- Utilities/Hooks: camelCase (e.g., `useAuth.ts`, `api-client.ts`)
- Folders: kebab-case (e.g., `admin-dashboard/`)

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use the defined color scheme
- Maintain consistent spacing (use scale 4, 8, 12, 16...)

### Error Handling

- Use try-catch for async operations
- Display toast notifications for user feedback
- Log errors to console for debugging
- Implement proper error boundaries

## API Integration

The `api-client.ts` provides a pre-configured Axios instance with:

- Base URL from environment
- Automatic authorization header injection
- Token refresh handling
- Error interception (401 redirects to login)

## Testing

To be implemented:
- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright

## Deployment

### Deployment to Vercel

```bash
npm i -g vercel
vercel
```

### Environment Setup

Set the following on your hosting platform:
- `NEXT_PUBLIC_API_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `DATABASE_URL`
- `JWT_SECRET`

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## Support & Contact

- Email: support@theuniwire.ng
- Phone: +234 (0) 800 000 0000
- Location: Lagos, Nigeria

## License

MIT License - See LICENSE file for details
