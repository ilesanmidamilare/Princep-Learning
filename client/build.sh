#!/bin/bash

# Build script for Render deployment
echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Check if dist directory was created
if [ -d "dist" ]; then
    echo "✅ Build successful! dist directory created."
    ls -la dist/
else
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

echo "Build process completed!"
