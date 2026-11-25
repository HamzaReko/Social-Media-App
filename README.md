# Social Media App

A front-end social media app ("mini Facebook") built with React and Material UI. It includes a posts feed, post creation, a collapsible sidebar, and a dark/light theme.

**Live demo:** https://hamzareko.github.io/Social-Media-App

<!-- TODO: add a screenshot or short GIF of the feed here -->
<!-- ![Feed](docs/screenshot-feed.png) -->

## Features

- Posts feed with a clean, card-based layout
- Create a new post from a floating action button
- Collapsible navigation drawer / sidebar
- Dark and light mode with a custom MUI theme; the chosen theme persists in `localStorage`
- Responsive layout built with Material UI components
- Deployed to GitHub Pages

## Tech Stack

- React 19
- Material UI (MUI) v7 with custom design tokens
- React Router v7
- Vite
- gh-pages for deployment

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Run locally

```bash
npm install
npm run dev
```

The app starts on the Vite dev server (default `http://localhost:5173`).

### Build and deploy

```bash
npm run build     # production build to dist/
npm run deploy    # publishes dist/ to GitHub Pages
```

## Notes

This is a front-end-only project: the feed and posts are rendered on the client. A natural next step is connecting it to a backend API for real accounts, posts, and likes.

## Author

**Hamza Ismail** - [GitHub](https://github.com/HamzaReko)
