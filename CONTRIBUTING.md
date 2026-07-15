# TheUniWire - Contribution Guidelines

## Welcome Contributors! 👋

We appreciate your interest in contributing to TheUniWire. This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- No harassment or discrimination
- Focus on constructive feedback
- Help each other grow

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a feature branch
4. Make your changes
5. Submit a pull request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/theuniwire.git
cd theuniwire

# Install dependencies
npm install

# Create feature branch
git checkout -b feature/your-feature-name

# Start development
npm run dev
```

## Making Changes

### Before You Code

1. Check existing issues and PRs
2. Open an issue to discuss major changes
3. Wait for feedback before starting

### Code Style

- Follow TypeScript best practices
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused
- Use arrow functions where appropriate

### Component Guidelines

```typescript
'use client'; // For client components

import { useState } from 'react';

interface ComponentProps {
  title: string;
  onClick?: () => void;
}

/**
 * Brief description of the component
 * @param props - Component props
 * @returns React component
 */
export function MyComponent({ title, onClick }: ComponentProps) {
  const [state, setState] = useState(false);

  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Testing

Before submitting:

```bash
# Run linter
npm run lint

# Type check
npm run type-check

# Format code
npm run format
```

## Commit Messages

Use clear, descriptive commit messages:

```
# Good
git commit -m "Add article search functionality"
git commit -m "Fix navigation menu on mobile devices"
git commit -m "Update Tailwind CSS configuration"

# Avoid
git commit -m "fixes"
git commit -m "update"
git commit -m "changes"
```

## Pull Request Process

1. **Update Documentation** - Update relevant docs
2. **Add Tests** - Include tests for new features
3. **Describe Changes** - Clear PR description
4. **Reference Issues** - Link related issues
5. **Wait for Review** - Maintainers will review

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #(issue number)

## Testing
Describe how to test changes

## Screenshots (if applicable)
Add screenshots or videos

## Checklist
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] No new warnings generated
```

## Areas for Contribution

### Code
- Backend API implementation
- Frontend components
- Bug fixes
- Performance improvements
- Testing

### Documentation
- Improve existing docs
- Add examples
- Create tutorials
- Fix typos

### Community
- Answer questions
- Report bugs
- Share ideas
- Help other contributors

## Common Contribution Types

### Adding a Feature

1. Create issue describing feature
2. Get approval from maintainers
3. Implement feature
4. Add tests
5. Update documentation
6. Submit PR

### Fixing a Bug

1. Create issue with bug reproduction
2. Identify root cause
3. Implement fix
4. Add test to prevent regression
5. Submit PR

### Documentation

1. Identify what needs documenting
2. Write clear, concise documentation
3. Add examples
4. Submit PR

## Review Process

Maintainers will:
1. Review your PR
2. Suggest changes if needed
3. Approve or request changes
4. Merge when ready

## Questions?

Feel free to:
- Open an issue
- Ask in GitHub discussions
- Email us at dev@theuniwire.ng

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Acknowledged in commits

## License

By contributing, you agree your contributions are licensed under the MIT License.

---

**Thank you for contributing to TheUniWire! 🎉**
