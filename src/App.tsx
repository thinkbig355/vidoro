import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'; // Renamed User to avoid conflict
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
import AgencyDashboard from './pages2/AgencyDashboard'; // --- ADDED --- Import Agency Dashboard
import AgencyProtectedRoute from './components/auth/AgencyProtectedRoute'; // --- ADDED --- Import Agency Protector

import posthog from 'posthog-js';


// --- Define or import AGENCY_EMAILS if needed globally, otherwise keep in components ---
// const AGENCY_EMAILS = ['thinkbig355@gmail.com', 'internaleditors@gmail.com'];

// --- ProtectedRoute (for REGULAR logged-in users) ---
// (Ensure this doesn't mistakenly grant access to agency users if routes overlap)
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseUser | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // Add check to EXCLUDE agency emails if you want strict separation
            // if (currentUser && (!currentUser.email || !AGENCY_EMAILS.includes(currentUser.email))) {
            //     setUser(currentUser);
            // } else {
            //     setUser(null); // Treat agency users as "not regular users" for this protector
            // }

            // Simpler: Just check if logged in for now. Access control is mainly via distinct routes.
             setUser(currentUser);

            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen bg-gray-900 text-white">Loading user state...</div>;
    }

    return user ? children : <Navigate to="/login" replace />;
};

// --- PublicOnlyRoute (for login/signup pages) ---
const PublicOnlyRoute = ({ children }: { children: JSX.Element }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [isAgency, setIsAgency] = useState(false); // --- ADDED --- Check if agency

    // --- Define or import AGENCY_EMAILS ---
    const AGENCY_EMAILS = ['thinkbig355@gmail.com', 'internaleditors@gmail.com'];

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email && AGENCY_EMAILS.includes(currentUser.email)) {
                 setIsAgency(true); // --- ADDED --- Set agency flag
            } else {
                 setIsAgency(false);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen bg-gray-900 text-white">Loading...</div>;
    }

    // Redirect logged-in users AWAY from public-only pages (like login)
    if (user) {
        // --- ADDED --- Redirect based on user type
        return isAgency
            ? <Navigate to="/agency-dashboard" replace />
            : <Navigate to="/dashboard" replace />;
    } else {
        return children; // Render the public-only page (e.g., Login) if not logged in
    }
};


function App() {
    return (
        <Router>
            <ScrollToTop />
            <PageTracking />
            <Routes>
                {/* --- Public routes accessible when logged OUT (use original Layout) --- */}
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

                {/* --- Login Route - Accessible only when logged OUT --- */}
                <Route
                    path="/login"
                    element={
                        <PublicOnlyRoute>
                            <Login />
                        </PublicOnlyRoute>
                    }
                />

                {/* --- Routes for REGULAR logged-in users (use LoggedInLayout) --- */}
                <Route
                    element={
                        <ProtectedRoute>
                            <LoggedInLayout />
                        </ProtectedRoute>
                    }
                >
                    {/* Regular User Specific Pages */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/credits" element={<Credits />} />
                    <Route path="/support" element={<Support />} />

                    {/* Optional: public pages accessible within LoggedInLayout */}
                    {/* <Route path="/app/home" element={<Index />} /> ... etc */}
                </Route>

                {/* --- Route for AGENCY logged-in users (NO specific layout yet) --- */}
                {/* Wrap AgencyDashboard with AgencyProtectedRoute */}
                {/* Note: This route currently does NOT use LoggedInLayout or Layout */}
                 <Route
                    path="/agency-dashboard"
                    element={
                        <AgencyProtectedRoute>
                             <AgencyDashboard />
                        </AgencyProtectedRoute>
                    }
                 />


                {/* --- Fallback Route --- */}
                <Route path="*" element={<FallbackRoute />} />

            </Routes>
        </Router>
    );
}

// Helper component for fallback logic (Checks auth and redirects)
function FallbackRoute() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [isAgency, setIsAgency] = useState(false);

    // --- Define or import AGENCY_EMAILS ---
    const AGENCY_EMAILS = ['thinkbig355@gmail.com', 'internaleditors@gmail.com'];


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
             if (currentUser?.email && AGENCY_EMAILS.includes(currentUser.email)) {
                 setIsAgency(true);
            } else {
                 setIsAgency(false);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen bg-gray-900 text-white">Loading...</div>;
    }

    // Redirect based on login status and user type
    if (user) {
        return isAgency
            ? <Navigate to="/agency-dashboard" replace /> // Logged-in agency goes to agency dash
            : <Navigate to="/dashboard" replace />;       // Logged-in regular user goes to user dash
    } else {
        return <Navigate to="/login" replace />;          // Not logged in goes to login
    }
}


// PageTracking remains the same
function PageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Ensure posthog is initialized before capturing
    if (typeof window !== 'undefined' && typeof posthog !== 'undefined' && posthog.__loaded) {
         posthog.capture('$pageview', {
           current_url: location.pathname + location.search, // Include search params
         });
    }
  }, [location]);

  return null;
}

export default App;