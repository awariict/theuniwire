# TheUniWire - Quick Start Guide

## 5-Minute Setup

### 1. Clone and Install
```bash
git clone https://github.com/awariict/theuniwire.git
cd theuniwire
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env.local
# Edit .env.local with your settings
```

### 3. Start Development
```bash
npm run dev
```

### 4. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

## Project Features

✅ **Modern UI** - Built with Next.js, React, and Tailwind CSS
✅ **Type Safe** - Full TypeScript support
✅ **Responsive** - Mobile-first design
✅ **Role-Based Access** - Super Admin, Admin, Editor, User roles
✅ **Article Management** - Create, edit, publish, categorize articles
✅ **User Authentication** - Secure login and registration
✅ **Search & Filter** - Find articles by category and keywords
✅ **Admin Dashboard** - Manage content and users

## Key Directories

- `/app` - Next.js pages and API routes
- `/components` - Reusable React components
- `/types` - TypeScript type definitions
- `/utils` - Utility functions
- `/hooks` - Custom React hooks
- `/constants` - App constants
- `/store` - Zustand state management
- `/public` - Static assets

## Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript
npm run format       # Format code with Prettier
```

## Next Steps

1. **Read** [DEVELOPMENT.md](./DEVELOPMENT.md) - Full development guide
2. **Implement** - Follow [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)
3. **Deploy** - Setup production on Vercel
4. **Customize** - Update colors, branding, content

## File Structure Overview

```
theuniwire/
├── app/                  # Pages and API routes
├── components/           # React components
├── hooks/               # Custom hooks
├── store/               # State management
├── utils/               # Helper functions
├── constants/           # App constants
├── types/               # TypeScript types
├── public/              # Static files
├── styles/              # Global styles
└── docs/                # Documentation
```

## Documentation

- 📖 [README.md](./README.md) - Project overview
- 📘 [DEVELOPMENT.md](./DEVELOPMENT.md) - Development guide
- 🚀 [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) - Implementation details
- ✅ [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md) - Feature checklist
- 🔧 [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Common issues
- ❓ [FAQ.md](./FAQ.md) - Frequently asked questions
- 🌐 [BROWSER_COMPATIBILITY.md](./BROWSER_COMPATIBILITY.md) - Browser support

## Support

- 📧 Email: support@theuniwire.ng
- 📞 Phone: +234 (0) 800 000 0000
- 🐛 Issues: [GitHub Issues](https://github.com/awariict/theuniwire/issues)

## License

MIT License - feel free to use this for your projects!

---

**Built with ❤️ for Nigerian Universities**
