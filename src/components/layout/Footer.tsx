import React from 'react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom'; // Use useNavigate from react-router-dom

export const Footer: React.FC = () => {
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white"> {/* Use Link from react-router-dom */}
              Vidoro
            </Link>
            <p className="text-sm">Copyright © 2025. All rights reserved.</p>
            <Button
              variant="outline"
              className="bg-gradient-to-r from-red-500 to-blue-500 text-white border-0 hover:opacity-90"
              onClick={handleContactClick} // Use the click handler
            >
              Contact Us
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Terms</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors"> {/* Use Link from react-router-dom */}
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors"> {/* Use Link from react-router-dom */}
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/feedback" className="hover:text-white transition-colors"> {/* Use Link from react-router-dom */}
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-white transition-colors"> {/* Use Link from react-router-dom */}
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          <div />
        </div>
      </div>
    </footer>
  );
};