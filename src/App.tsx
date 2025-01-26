import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct imports for routing
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import Layout from './components/layout/Layout';
import Index from './pages/Index';
import Work from './pages/Work';
import Process from './pages/Process';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import TermsPage from './static-pages/terms';
import PrivacyPage from './static-pages/privacy';
import FeedbackPage from './static-pages/feedback';
import DocsPage from './static-pages/docs';
import './index.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Layout>
            <Toaster position="bottom-right" />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/work" element={<Work />} />
              <Route path="/process" element={<Process />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/docs" element={<DocsPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;