# TheUniWire - Complete Implementation Guide

## Phase 1: Frontend Foundation (Completed ✓)

### Completed:
- Next.js 14 with App Router
- TypeScript configuration
- Tailwind CSS with custom theme
- Component structure
- Layout system (Header, Footer)
- Page templates
- Type definitions
- Utility functions
- Custom hooks
- State management (Zustand)
- Constants and configurations

## Phase 2: Backend Setup (Next Steps)

### Database Setup

#### Option 1: MongoDB (Recommended)

```bash
# Install MongoDB driver
npm install mongodb mongoose
```

**Install MongoDB locally or use MongoDB Atlas:**

1. Create account at mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Add to `.env.local`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/theuniwire
```

#### Option 2: PostgreSQL

```bash
npm install @prisma/client prisma
npx prisma init
```

### API Routes Implementation

Create API endpoints in `app/api/`:

#### 1. Authentication API

**`app/api/auth/register/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Check if user exists
    // TODO: Hash password
    // TODO: Create user in database
    // TODO: Send verification email

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**`app/api/auth/login/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // TODO: Find user by email
    // TODO: Compare password
    // TODO: Generate JWT token

    const token = jwt.sign(
      { userId: 'user_id', email: email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );

    return NextResponse.json(
      { token, user: { email } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }
}
```

#### 2. Articles API

**`app/api/articles/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    // TODO: Fetch articles from database with filters
    // TODO: Apply pagination

    const articles = [];
    return NextResponse.json(
      { articles, total: 0, page, pageSize: 10 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // TODO: Verify authentication
    const { title, content, category, excerpt } = await request.json();

    // TODO: Validate input
    // TODO: Create article in database
    // TODO: Generate slug

    return NextResponse.json(
      { message: 'Article created' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}
```

**`app/api/articles/[slug]/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // TODO: Fetch article by slug
    // TODO: Increment view count

    const article = null;
    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}
```

#### 3. Users API

**`app/api/users/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // TODO: Verify admin authentication
    // TODO: Fetch users from database

    const users = [];
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
```

## Phase 3: Database Models

### MongoDB Collections Schema

```javascript
// Users Collection
db.users.insertOne({
  _id: ObjectId(),
  name: "John Doe",
  email: "john@example.com",
  password: "hashed_password",
  role: "editor", // super_admin, admin, editor, user
  university: "University of Lagos",
  avatar: "url",
  verified: false,
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
});

// Articles Collection
db.articles.insertOne({
  _id: ObjectId(),
  title: "Article Title",
  slug: "article-title",
  content: "<html>content</html>",
  excerpt: "Short excerpt",
  thumbnail: "image_url",
  category: "news",
  tags: ["tag1", "tag2"],
  author: ObjectId("user_id"),
  status: "published", // draft, pending, published, archived
  featured: false,
  views: 0,
  likes: 0,
  comments: 0,
  publishedAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
});

// Comments Collection
db.comments.insertOne({
  _id: ObjectId(),
  articleId: ObjectId("article_id"),
  author: ObjectId("user_id"),
  content: "Comment text",
  likes: 0,
  approved: true,
  createdAt: new Date(),
  updatedAt: new Date(),
});

// Universities Collection
db.universities.insertOne({
  _id: ObjectId(),
  name: "University of Lagos",
  abbreviation: "UNILAG",
  location: "Lagos, Nigeria",
  website: "https://unilag.edu.ng",
  logo: "logo_url",
  description: "Description",
  createdAt: new Date(),
});
```

## Phase 4: Frontend - Backend Integration

### Update API Client

**`utils/api-client.ts`**
```typescript
import axios from 'axios';
import router from 'next/router';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### Example: Fetch Articles

**`app/page.tsx`** (Updated)
```typescript
'use client';

import { useEffect, useState } from 'react';
import { Article } from '@/types';
import { apiClient } from '@/utils';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await apiClient.get('/articles');
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    // JSX
  );
}
```

## Phase 5: Authentication Implementation

### Setup NextAuth.js

```bash
npm install next-auth
```

**`app/api/auth/[...nextauth]/route.ts`**
```typescript
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // TODO: Verify credentials against database
        if (credentials?.email && credentials?.password) {
          return {
            id: '1',
            email: credentials.email,
            name: 'User Name',
            role: 'editor',
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
```

## Phase 6: Content Management Features

### Rich Text Editor

```bash
npm install react-quill quill
```

**`components/features/articles/ArticleEditor.tsx`**
```typescript
'use client';

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export function ArticleEditor({ value, onChange }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link', 'image'],
        ],
      }}
    />
  );
}
```

### File Upload

```bash
npm install next-cloudinary
```

**`components/features/FileUpload.tsx`**
```typescript
'use client';

import { CldUploadWidget } from 'next-cloudinary';

export function FileUpload({ onUpload }) {
  return (
    <CldUploadWidget
      uploadPreset="your_upload_preset"
      onSuccess={(result: any) => {
        onUpload(result.event?.info?.secure_url);
      }}
    >
      {({ open }) => (
        <button
          onClick={() => open()}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg"
        >
          Upload Image
        </button>
      )}
    </CldUploadWidget>
  );
}
```

## Phase 7: Advanced Features

### Comments System

```typescript
// API route for comments
export async function POST(request: NextRequest) {
  const { articleId, content } = await request.json();
  
  // TODO: Validate user authentication
  // TODO: Create comment in database
  // TODO: Notify article author
  
  return NextResponse.json({ success: true });
}
```

### Email Notifications

```bash
npm install nodemailer
```

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(to: string, subject: string, html: string) {
  return transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html,
  });
}
```

### Analytics

```typescript
// Track article view
export async function trackView(articleId: string) {
  // TODO: Increment view count
  // TODO: Log analytics
}

// Get analytics data
export async function getAnalytics(userId: string) {
  // TODO: Fetch user's article statistics
}
```

## Phase 8: Deployment

### Environment Variables for Production

**`.env.production`**
```env
NEXT_PUBLIC_API_URL=https://api.theuniwire.ng
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=https://theuniwire.ng
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/theuniwire
JWT_SECRET=your_jwt_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
```

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### GitHub Actions CI/CD

**`.github/workflows/deploy.yml`**
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - run: npm run type-check
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: vercel --prod
```

## Next Steps

1. **Set up database** - Choose MongoDB or PostgreSQL
2. **Implement authentication** - Use NextAuth.js
3. **Create API routes** - Build backend endpoints
4. **Connect frontend** - Integrate with API
5. **Add features** - Comments, notifications, analytics
6. **Test thoroughly** - Unit, integration, E2E tests
7. **Deploy** - Setup CI/CD and deploy to production
8. **Monitor** - Setup error tracking and analytics

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org/)
- [MongoDB](https://www.mongodb.com/docs/)
- [Vercel Deployment](https://vercel.com/docs)

## Support

For questions or issues:
- Email: dev@theuniwire.ng
- Create GitHub issues
- Join our Slack channel
