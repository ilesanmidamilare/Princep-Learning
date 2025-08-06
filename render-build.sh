#!/usr/bin/env bash

# render.sh

set -e  # Exit on any error

# Build frontend
echo "🏗️  Building frontend..."
cd client
npm install
npm run build
cd ..

# Start backend
echo "🚀 Starting backend..."
cd server
npm install
npm start