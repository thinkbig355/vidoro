import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',  // Listen on all interfaces (IPv4 and IPv6)
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(), // Conditionally include the plugin in development mode
  ].filter(Boolean), // Remove any falsy values (like undefined when mode isn't 'development') from the plugins array
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias '@' to the 'src' directory
    },
  },
}));