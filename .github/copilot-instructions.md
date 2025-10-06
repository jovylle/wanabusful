# Copilot Instructions for Wanabusful

## Project Overview
**UFT1 Tools** - A Next.js 14 web application providing utility tools for testing camera, audio, signatures, and other web browser capabilities. The app follows a simple page-based architecture with shared components for layout and dark mode functionality.

## Architecture & Structure

### Core Pattern: Tool Pages + Shared Layout
- **Tool Pages**: Located in `src/app/*/page.js` (camera, audio-test, signature, delayed-audio)
- **Shared Layout**: All pages use `src/components/Layout.js` which includes Header, Footer, and DarkModeToggle
- **Client Components**: All interactive pages use `"use client"` directive for browser APIs (camera, audio, canvas)

### Key Files to Understand:
- `src/app/layout.js` - Root layout with SEO metadata and embedded chatbot widget
- `src/components/Layout.js` - Page wrapper with header/footer/dark mode toggle
- `src/components/Header.js` - Responsive navigation with mobile hamburger menu
- `src/app/page.js` - Home page with grid of tool cards

## Development Patterns

### Styling Approach
- **Primary**: Tailwind CSS classes with dark mode support (`dark:` prefix)
- **Module CSS**: Used sparingly for complex layouts (see `Camera.module.css`)
- **Dark Mode**: Class-based dark mode controlled by `DarkModeToggle.js`

### Component Structure for New Tools
```javascript
"use client";
import { useState, useRef, useEffect } from 'react';
import Layout from '@/components/Layout';

export default function ToolName() {
  // Tool logic here
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Tool Title</h1>
        {/* Tool UI */}
      </div>
    </Layout>
  );
}
```

### Browser API Usage Examples
- **Camera**: `navigator.mediaDevices.getUserMedia()` with cleanup in useEffect
- **Audio**: HTML5 audio elements with ref manipulation for L/R channel testing
- **File Paths**: Static assets in `/public/audio/` for audio files

## Development Workflow

### Commands
```bash
npm run dev    # Development server (localhost:3000)
npm run build  # Production build
npm run lint   # ESLint checking
```

### Adding New Tools
1. Create `src/app/tool-name/page.js` with client component
2. Add navigation link to `src/components/Header.js` (both mobile and desktop menus)
3. Add tool card to `src/app/page.js` grid
4. Follow color scheme: blue, green, purple, orange for consistency

### SEO & Metadata
- Global metadata in `src/app/layout.js` with Open Graph and Twitter cards
- Production URL hardcoded as `https://tools.uft1.com`
- Favicon and touch icons in `/public/`

## Project-Specific Conventions

### Responsive Design
- Mobile-first approach with responsive grid layouts
- Hamburger menu for mobile navigation
- Container classes: `container mx-auto` for content width limits

### State Management
- Simple useState for tool state (no external state management)
- useRef for DOM element access (video, audio elements)
- useEffect for cleanup of browser APIs

### Dark Mode Implementation
- Manual toggle via `DarkModeToggle.js` (no system preference detection)
- Uses `document.documentElement.classList.add('dark')` approach
- All components support dark mode classes

## External Integrations
- **Chatbot Widget**: Embedded from `https://chat-widget.jovylle.com/embed.js`
- **Fonts**: Inter font from Google Fonts
- **Icons**: Inline SVG icons (no icon library dependency)

## File Organization Rules
- Tool pages: `src/app/[tool-name]/page.js`
- Shared components: `src/components/`
- Styles: Mix of Tailwind + CSS modules in `src/styles/`
- Static assets: `/public/` (audio files, favicons, etc.)