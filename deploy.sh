#!/bin/bash

# MakeMyVibe Website Deployment Script
echo "🚀 Starting deployment process..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous build
if [ -d "dist" ]; then
    echo "🧹 Cleaning previous build..."
    rm -rf dist
fi

# Build the project
echo "🔨 Building for production..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful!"
    echo "📁 Your production files are in the 'dist' folder"
    echo "🌐 Upload this folder to your hosting provider"
    
    # Show folder contents
    echo ""
    echo "📋 Build contents:"
    ls -la dist/
    
    # Calculate total size
    echo ""
    echo "📊 Total build size:"
    du -sh dist/
    
else
    echo "❌ Build failed!"
    exit 1
fi

echo ""
echo "🎉 Ready for deployment!"
echo "📖 See HOSTING_GUIDE.md for next steps"
