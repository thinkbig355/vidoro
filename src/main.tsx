import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import posthog from 'posthog-js';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider

// Initialize PostHog using the new reverse proxy path
posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: '/ingest', // Updated path
  capture_pageview: false,
  loaded: function (posthog) {
    posthog.debug(true);
  }
});

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Get client ID from env

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
);