# TheUniWire

## Professional News Platform for Nigerian Universities

A modern, responsive, and dynamic web application designed for Nigerian universities to manage and publish university news, events, and announcements.

### Features

- **Role-Based Access Control**
  - Super Admin: Full system management
  - Admin: Content moderation and analytics
  - Editors: Article creation and management
  - Users: Reading and engagement

- **Content Management**
  - Create, edit, and publish articles
  - Multiple article categories
  - Featured articles
  - Rich text editing
  - Media management

- **User Features**
  - User authentication and profiles
  - Article comments
  - Article likes
  - Reading time estimation
  - Search functionality

- **Admin Dashboard**
  - Analytics and statistics
  - User management
  - Content moderation
  - Site settings

### Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: NextAuth.js
- **API Communication**: Axios
- **Forms**: React Hook Form (optional)
- **Icons**: React Icons
- **Animations**: Framer Motion

### Project Structure

```
theuniwire/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   ├── admin/                # Admin pages
│   ├── dashboard/            # User dashboard
│   └── page.tsx              # Home page
├── components/               # Reusable components
│   ├── common/               # Common components
│   ├── layout/               # Layout components
│   └── features/             # Feature-specific components
├── hooks/                    # Custom React hooks
├── store/                    # Zustand stores
├── utils/                    # Utility functions
├── constants/                # Constants and configurations
├── types/                    # TypeScript type definitions
├── public/                   # Static assets (logo, favicon)
└── styles/                   # Global styles
```

### Getting Started

#### Prerequisites
- Node.js 18+
- npm or yarn

#### Installation

1. Clone the repository
```bash
git clone https://github.com/awariict/theuniwire.git
cd theuniwire
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

### Role Permissions

#### Super Admin
- Create, edit, delete users
- Manage user roles
- Approve/reject articles
- Delete articles
- View analytics
- System settings

#### Admin
- Approve/reject articles
- Delete articles
- Create and manage editors
- View analytics
- Manage universities

#### Editor
- Create articles
- Edit own articles
- Upload media
- Submit articles for approval

#### User
- Read articles
- Comment on articles
- Like articles
- View university profiles

### Environment Variables

See `.env.example` for the full list of environment variables needed.

### Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

### License

MIT License - see LICENSE file for details

### Support

For support, email support@theuniwire.ng or open an issue on GitHub.
