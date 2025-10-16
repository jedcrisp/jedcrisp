#!/bin/bash

# Simple deployment script for your portfolio website
# This script helps you deploy to various platforms

echo "🚀 Portfolio Website Deployment Script"
echo "======================================="

# Function to deploy to GitHub Pages
deploy_github() {
    echo "📁 Deploying to GitHub Pages..."
    
    # Check if git is initialized
    if [ ! -d ".git" ]; then
        echo "❌ Git repository not initialized. Run 'git init' first."
        return 1
    fi
    
    # Add all files
    git add .
    
    # Commit changes
    echo "📝 Enter commit message (or press Enter for default):"
    read commit_message
    if [ -z "$commit_message" ]; then
        commit_message="Update portfolio website"
    fi
    
    git commit -m "$commit_message"
    
    # Push to GitHub
    echo "🔄 Pushing to GitHub..."
    git push origin main
    
    echo "✅ Deployed to GitHub Pages!"
    echo "📱 Your site will be available at: https://yourusername.github.io/repository-name"
}

# Function to create a zip file for manual upload
create_zip() {
    echo "📦 Creating deployment package..."
    
    # Create timestamp
    timestamp=$(date +"%Y%m%d_%H%M%S")
    zip_name="portfolio_${timestamp}.zip"
    
    # Create zip excluding unnecessary files
    zip -r "$zip_name" . -x "*.git*" "deploy.sh" "*.DS_Store*" "node_modules/*" "*.log"
    
    echo "✅ Created $zip_name"
    echo "📤 You can now upload this file to your hosting provider"
}

# Function to start local server
start_local() {
    echo "🖥️  Starting local development server..."
    
    # Check if Python is available
    if command -v python3 &> /dev/null; then
        echo "🐍 Using Python 3..."
        echo "🌐 Server running at: http://localhost:8000"
        echo "⏹️  Press Ctrl+C to stop"
        python3 -m http.server 8000
    elif command -v python &> /dev/null; then
        echo "🐍 Using Python 2..."
        echo "🌐 Server running at: http://localhost:8000"
        echo "⏹️  Press Ctrl+C to stop"
        python -m SimpleHTTPServer 8000
    else
        echo "❌ Python not found. Please install Python or open index.html directly in your browser."
    fi
}

# Function to validate HTML
validate_html() {
    echo "🔍 Validating HTML..."
    
    # Check if index.html exists
    if [ ! -f "index.html" ]; then
        echo "❌ index.html not found!"
        return 1
    fi
    
    # Basic HTML validation (check for common issues)
    echo "✅ index.html found"
    
    # Check for CSS file
    if [ ! -f "styles/main.css" ]; then
        echo "❌ CSS file not found at styles/main.css"
    else
        echo "✅ CSS file found"
    fi
    
    # Check for JS file
    if [ ! -f "scripts/main.js" ]; then
        echo "❌ JavaScript file not found at scripts/main.js"
    else
        echo "✅ JavaScript file found"
    fi
    
    echo "✅ Basic validation complete"
}

# Function to optimize for production
optimize() {
    echo "⚡ Optimizing for production..."
    
    # Create optimized directory
    mkdir -p optimized
    
    # Copy HTML (you could minify here)
    cp index.html optimized/
    
    # Copy CSS (you could minify here)
    mkdir -p optimized/styles
    cp styles/main.css optimized/styles/
    
    # Copy JavaScript (you could minify here)
    mkdir -p optimized/scripts
    cp scripts/main.js optimized/scripts/
    
    # Copy other files
    if [ -f "config.json" ]; then
        cp config.json optimized/
    fi
    
    echo "✅ Optimized files created in 'optimized' directory"
}

# Main menu
echo ""
echo "Choose an option:"
echo "1. Deploy to GitHub Pages"
echo "2. Create ZIP package for manual upload"
echo "3. Start local development server"
echo "4. Validate files"
echo "5. Optimize for production"
echo "6. Exit"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        deploy_github
        ;;
    2)
        create_zip
        ;;
    3)
        start_local
        ;;
    4)
        validate_html
        ;;
    5)
        optimize
        ;;
    6)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid option. Please choose 1-6."
        ;;
esac