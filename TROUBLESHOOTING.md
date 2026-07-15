# Common Issues & Troubleshooting

## Installation Issues

### Problem: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Problem: Port 3000 is already in use

**Solution:**
```bash
# Change port
npm run dev -- -p 3001

# Or kill the process using port 3000
lsof -i :3000
kill -9 <PID>
```

## Development Issues

### Problem: TypeScript errors

**Solution:**
```bash
# Run type checking
npm run type-check

# Check tsconfig.json for correct paths
```

### Problem: Tailwind CSS not working

**Solution:**
1. Check `tailwind.config.ts` paths are correct
2. Restart dev server
3. Clear `.next` folder: `rm -rf .next`
4. Rebuild: `npm run dev`

### Problem: Environment variables not loading

**Solution:**
1. Create `.env.local` file
2. Add variables with `NEXT_PUBLIC_` prefix for client-side
3. Restart dev server

## API Issues

### Problem: API calls return 401 Unauthorized

**Solution:**
- Check JWT token is valid
- Verify token is being sent in headers
- Check token expiration time
- Login again if needed

### Problem: CORS errors

**Solution:**
Add CORS headers to API routes:
```typescript
const response = new NextResponse(data);
response.headers.set('Access-Control-Allow-Origin', '*');
response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
return response;
```

## Database Issues

### Problem: MongoDB connection fails

**Solution:**
1. Check MongoDB URI is correct
2. Verify IP whitelist in MongoDB Atlas
3. Check database credentials
4. Test connection with MongoDB Compass

### Problem: Slow database queries

**Solution:**
- Add indexes to frequently queried fields
- Use aggregation pipelines
- Implement caching
- Monitor slow query logs

## Build Issues

### Problem: Build fails with memory error

**Solution:**
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Problem: Large bundle size

**Solution:**
- Use dynamic imports for heavy components
- Analyze bundle: `npm run build -- --debug`
- Remove unused dependencies
- Enable compression

## Performance Issues

### Problem: Slow page loads

**Solution:**
1. Check network tab in DevTools
2. Use Next.js Image component
3. Implement lazy loading
4. Cache API responses

### Problem: High CPU usage

**Solution:**
- Profile with DevTools
- Remove unnecessary re-renders
- Optimize images
- Implement virtualization for long lists

## Deployment Issues

### Problem: Vercel deployment fails

**Solution:**
1. Check build log for errors
2. Verify environment variables
3. Check package.json scripts
4. Test build locally: `npm run build`

### Problem: Static files not loading on production

**Solution:**
1. Check `public` folder structure
2. Verify base path in next.config.js
3. Check CDN configuration
4. Clear Vercel cache

## Getting Help

1. Check the documentation
2. Search GitHub issues
3. Ask in community forums
4. Contact support: support@theuniwire.ng
