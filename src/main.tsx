import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import posthog from 'posthog-js';

// Initialize PostHog
posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: '/ingest', // Use the proxy route
    capture_pageview: false,
    loaded: function (posthog) {
        posthog.debug(true); // Enable debug mode (optional)
    }
});

createRoot(document.getElementById('root')!).render(<App />);
