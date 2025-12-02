# Image Gallery with React and useEffect

This project is a responsive image gallery application built with React, demonstrating the use of the useEffect hook for data fetching.

## Features

- Fetches images from the Picsum Photos API
- Pagination controls to navigate between pages of images
- Responsive grid layout using Tailwind CSS
- Loading state while fetching data
- Component-based architecture with reusable Card and Button components

## Tech Stack

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Axios](https://axios-http.com/) - Promise based HTTP client

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode with hot reloading.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Preview the production build locally.

### `npm run lint`

Runs ESLint to check for linting issues.

## Project Structure

```
src/
├── components/
│   ├── Card.jsx      # Displays individual images
│   └── Buttons.jsx   # Navigation controls
├── App.jsx           # Main application component
└── main.jsx          # Entry point
```

## How It Works

The application uses the `useEffect` hook to fetch image data from the Picsum Photos API when the component mounts or when the page index changes. The fetched data is stored in state using the `useState` hook and rendered as a grid of image cards.

Navigation between pages is handled by the Buttons component, which updates the page index state and triggers a new API request through the useEffect dependency array.
