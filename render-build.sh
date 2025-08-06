#!/usr/bin/env bash

# Exit on first error
set -e

# Install frontend dependencies and build Vite
cd frontend
npm install
npm run build

# Install backend dependencies
cd ../backend
npm install
