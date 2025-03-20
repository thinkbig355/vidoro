import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Index from './pages/Index';
import Process from './pages/Process';
import Work from './pages/Work';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import Terms from './static-pages/terms';
import Privacy from './static-pages/privacy';
import Feedback from './static-pages/feedback';
import Docs from './static-pages/docs';
import Login from './pages/Login';
import posthog from 'posthog-js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <ScrollToTop />
      <PageTracking />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/process" element={<Process />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function PageTracking() {
  const location = useLocation();

  useEffect(() => {
    posthog.capture('$pageview', {
      current_url: location.pathname,
    });
  }, [location]);

  return null;
}

export default App;