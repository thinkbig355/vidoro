import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../lib/firebase';

// Define or import allowed agency emails
const AGENCY_EMAILS = ['thinkbig355@gmail.com', 'internaleditors@gmail.com'];

interface AgencyProtectedRouteProps {
    children: JSX.Element;
}

const AgencyProtectedRoute: React.FC<AgencyProtectedRouteProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAgencyUser, setIsAgencyUser] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.email && AGENCY_EMAILS.includes(user.email)) {
                setIsAgencyUser(true); // User is logged in AND is an agency email
            } else {
                setIsAgencyUser(false); // Not logged in or not an agency email
            }
            setIsLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    if (isLoading) {
        // You can replace this with a more sophisticated loading spinner
        return <div className="flex justify-center items-center h-screen bg-gray-900 text-white">Loading access...</div>;
    }

    // If loading is finished and user is identified as agency, render the protected component
    // Otherwise, redirect to the main login page
    return isAgencyUser ? children : <Navigate to="/login" replace />;
};

export default AgencyProtectedRoute;