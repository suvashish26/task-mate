# TaskMate — Frontend

Task management app frontend built with React, TypeScript, and Vite. Includes a static marketing site (landing, features, pricing) plus an authenticated task dashboard.

## Features

- Static marketing pages (Landing, Features, Pricing)
- Task CRUD
- Toggle a task complete to move it from To-Do to Completed (no drag-and-drop)

## Tech Stack

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · React Router 7 · React Hook Form + Zod · JWT · Lucide React

## Getting Started

```bash
git clone <repo-url>
cd task-mate
npm install
npm run dev
```

Runs at `http://localhost:5173` by default.

### Environment Variables

```
VITE_API_URL=http://localhost:5000
```

> Update to match wherever the TaskMate backend is running.

### Scripts

| Command | Description |
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Backend

Expects a companion TaskMate backend (Node.js/Express, PostgreSQL/Prisma, JWT auth) running separately.
