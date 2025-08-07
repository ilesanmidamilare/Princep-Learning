# Deployment Guide for LMS Application

## Render Deployment Configuration

### Frontend (Client) - Static Site

**Service Type**: Static Site

**Settings**:
- **Root Directory**: `client`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`

**Environment Variables**:
- `VITE_API_URL`: Your backend URL (e.g., `https://your-backend.onrender.com`)

**Rewrite Rules** (for client-side routing):
- Source: `/*`
- Destination: `/index.html`

### Backend (Server) - Web Service

**Service Type**: Web Service

**Settings**:
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Environment Variables**:
- `NODE_ENV`: `production`
- `PORT`: `10000` (Render default)
- `MONGO_URI`: Your MongoDB connection string
- `CLIENT_ORIGIN`: Your frontend URL
- `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name
- `CLOUDINARY_API_KEY`: Your Cloudinary API key
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret
- `JWT_SECRET`: Your JWT secret key

## Troubleshooting

### "Service Root Directory is missing" Error

This error occurs when:
1. The build command hasn't run yet
2. The root directory is set incorrectly
3. The dist folder doesn't exist

**Solution**:
1. Set **Root Directory** to `client` (not `client/dist`)
2. Use **Build Command**: `npm install && npm run build`
3. Use **Publish Directory**: `dist` (relative to root directory)

### Build Failures

1. Check that all dependencies are in `package.json`
2. Ensure environment variables are set correctly
3. Verify the build works locally with `npm run build`

## Local Testing

Test the production build locally:

```bash
# In client directory
npm run build
npm start

# Should serve on http://localhost:3000
```
