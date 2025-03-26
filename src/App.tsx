import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import Layout from './components/layout/Layout'; // Original Layout
import LoggedInLayout from './components/layout/LoggedInLayout'; // New Layout
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
// Import new pages
import Dashboard from './pages2/Dashboard';
import Chat from './pages2/Chat';
import Settings from './pages2/Settings';
import Credits from './pages2/Credits';
import Support from './pages2/Support';

import posthog from 'posthog-js';

// Define a component to wrap routes requiring authentication
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null); // Or firebase.User | null

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading authentication state...</div>; // Or a proper loader
  }

  return user ? children : <Navigate to="/login" replace />;
};

// Define a component for routes accessible only when logged out (like Login)
const PublicOnlyRoute = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading authentication state...</div>; // Or a proper loader
  }

  // If user exists, redirect away from login/signup (e.g., to dashboard)
  return user ? <Navigate to="/dashboard" replace /> : children;
};


function App() {
  // No need for isAuthenticated state here anymore, handled by ProtectedRoute/PublicOnlyRoute

  return (
    <Router>
      {/* ScrollToTop can stay outside */}
      <ScrollToTop />
      <PageTracking />
      <Routes>
        {/* Routes accessible when logged OUT (use original Layout) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/process" element={<Process />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/docs" element={<Docs />} />
          {/* Add any other public pages here */}
        </Route>

        {/* Login Route - Accessible only when logged OUT */}
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />

        {/* Routes accessible only when logged IN (use LoggedInLayout) */}
        <Route
          element={
            <ProtectedRoute>
              <LoggedInLayout />
            </ProtectedRoute>
          }
        >
          {/* New Logged-In Specific Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/support" element={<Support />} />

          {/* Make public pages ALSO accessible when logged in, but within LoggedInLayout */}
          {/* Optional: You might decide only specific pages are needed when logged in */}
           <Route path="/app/home" element={<Index />} /> {/* Example: maybe prefix logged-in versions? */}
           <Route path="/app/process" element={<Process />} />
           <Route path="/app/work" element={<Work />} />
           <Route path="/app/pricing" element={<Pricing />} />
           <Route path="/app/contact" element={<ContactUs />} />
           {/* Or just reuse the same paths if Navigation2 doesn't link to them directly */}
           {/* <Route path="/" element={<Index />} /> ... etc */}

        </Route>

        {/* Fallback Route - Decide where it should go */}
        {/* Option 1: Go to public Index */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        {/* Option 2: Go to dashboard if logged in, else public index (needs auth check) */}
         <Route path="*" element={<FallbackRoute />} />

      </Routes>
    </Router>
  );
}

// Helper component for fallback logic
function FallbackRoute() {
   const [isLoading, setIsLoading] = useState(true);
   const [user, setUser] = useState<any>(null);

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
       setIsLoading(false);
     });
     return () => unsubscribe();
   }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

   return user ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />;
}


// PageTracking remains the same
function PageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Ensure posthog is initialized before capturing
    if (typeof posthog !== 'undefined' && posthog.__loaded) {
         posthog.capture('$pageview', {
           current_url: location.pathname + location.search, // Include search params
         });
    }
  }, [location]);

  return null;
}

export default App;