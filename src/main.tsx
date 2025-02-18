import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import posthog from 'posthog-js';

// Initialize PostHog
posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST,
    capture_pageview: false, // Disable automatic pageview capture as we'll handle it in App.tsx
    loaded: function(posthog) {
        posthog.debug(true); // Enable debug mode (optional)
    }
});

createRoot(document.getElementById('root')!).render(<App />);
