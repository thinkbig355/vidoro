import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const links = [
        { name: 'Samples', path: '/work' },
        { name: 'Process', path: '/process' },
        { name: 'Pricing', path: '/pricing' },
    ];

    const handleGetStarted = () => {
        navigate('/contact');
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMobileMenuOpen(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // GradientButton Component logic
    const GradientButton = () => {
        return (
            <div className="relative group">
            {/* 3D shadow effect */}
            <motion.div
                className="absolute inset-0 bg-red-700 rounded-md"
                style={{ filter: "blur(10px)" }}
                 animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 0.9, 0.7],
                 }}
                 transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                 }}
            />

            <motion.button
                className="relative px-4 py-2 font-bold text-white rounded-md shadow-lg overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #FF0000, #8B0000)",

                }}
                 whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

            >
                <span
                className="relative z-10 block text-sm"
                >
                Get Started
                </span>

                {/* Pulsing gradient overlay */}
                <motion.div
                 className="absolute inset-0 bg-red-500/30"
                 style={{
                     mixBlendMode: "overlay",
                 }}
                />
            </motion.button>
            </div>
        );
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black">
            <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        to="/"
                        className="text-2xl font-bold text-red-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Vidoro
                    </Link>
                </motion.div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white">
                        {isMobileMenuOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                <div
                    className={`md:flex ${
                    isMobileMenuOpen ? 'flex' : 'hidden'
                    } items-center gap-8`}
                    ref={menuRef}
                >
                    <nav className="hidden md:flex gap-8 items-center">
                        {links.map((item) => (
                            <motion.div
                            key={item.name}
                            whileHover={{ scale: 1.05 }}
                            className="relative"
                            >
                            <Link
                                to={item.path}
                                className={`text-gray-300 hover:text-white transition-colors ${
                                location.pathname === item.path
                                    ? 'text-white font-semibold'
                                    : ''
                                }`}
                            >
                                {item.name}
                                {location.pathname === item.path && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                                />
                                )}
                            </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {isMobileMenuOpen && (
                        <nav className="flex flex-col gap-4 mt-4">
                            {links.map((item) => (
                                <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-gray-300 hover:text-white transition-colors ${
                                    location.pathname === item.path
                                    ? 'text-white font-semibold'
                                    : ''
                                }`}
                                >
                                {item.name}
                                </Link>
                            ))}
                        </nav>
                    )}
                     {/* Replaced Button with GradientButton */}
                    <div onClick={handleGetStarted}>
                        <GradientButton />
                    </div>
                </div>
            </div>
            </div>
        </header>
    );
};

export default Navigation;