# Todo App Frontend

A modern, responsive Todo application built with React, Vite, and ShadCN UI components.

## Features

- ✨ Clean, modern UI with ShadCN UI components
- 📝 Add, complete, and delete todos
- 🔄 Real-time synchronization with backend API
- ⚡ Fast development experience with Vite
- 📱 Fully responsive design
- ♿ Accessible components
- 🎨 Beautiful gradient background and smooth transitions

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **ShadCN UI** - Reusable UI components
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed
- Backend API running on `http://localhost:3000`

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
todo-frontend/
├── src/
│   ├── components/
│   │   ├── ui/          # ShadCN UI components
│   │   │   ├── button.jsx
│   │   │   ├── input.jsx
│   │   │   ├── card.jsx
│   │   │   ├── checkbox.jsx
│   │   │   └── alert.jsx
│   │   ├── TodoCard.jsx
│   │   ├── TodoForm.jsx
│   │   └── TodoList.jsx
│   ├── hooks/
│   │   └── useTodos.js  # Custom hook for API calls
│   ├── lib/
│   │   └── utils.js     # Utility functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## API Integration

The app connects to a backend API at:
```
http://localhost:3000/api/todos
```

### API Endpoints Used

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/:id` - Update todo (toggle completed)
- `DELETE /api/todos/:id` - Delete a todo

## Configuration

### API Base URL

To change the backend URL, edit `src/hooks/useTodos.js`:

```javascript
const API_BASE_URL = 'http://your-api-url:port/api/todos'
```

### Vite Proxy

The Vite config includes a proxy to `/api` routes. Modify `vite.config.js` if needed:

```javascript
proxy: {
  '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true,
  },
}
```

## Building for Production

1. Build the app:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

The optimized files will be in the `dist/` directory.

## Troubleshooting

### CORS Issues

If you encounter CORS errors, ensure your backend allows requests from your frontend origin.

### API Connection Refused

Verify that:
1. The backend server is running
2. The API URL in `useTodos.js` is correct
3. No firewall is blocking the connection

### Styles Not Loading

Ensure all dependencies are installed:
```bash
npm install
```

## License

MIT
