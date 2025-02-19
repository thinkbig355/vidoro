import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import posthog from 'posthog-js';

// Initialize PostHog using the new reverse proxy path
posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: '/ingest', // Updated path
  capture_pageview: false,
  loaded: function (posthog) {
    posthog.debug(true);
  }
});

createRoot(document.getElementById('root')!).render(<App />);