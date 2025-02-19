import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import posthog from 'posthog-js';

// Initialize PostHog using your reverse proxy endpoint
posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: '/posthog/api', // change this from import.meta.env.VITE_POSTHOG_HOST to the proxied path
  capture_pageview: false, // Disable automatic pageview capture as we'll handle it in App.tsx
  loaded: function(posthog) {
    posthog.debug(true); // Enable debug mode (optional)
  }
});

createRoot(document.getElementById('root')!).render(<App />);
