import React from 'react'; // Removed useState as it's not directly used here anymore
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Removed AnimatePresence if not needed elsewhere
import {
    ChartPieIcon,
    ChatBubbleLeftRightIcon,
    Cog6ToothIcon,
    CreditCardIcon,
    QuestionMarkCircleIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    // UserCircleIcon removed if Profile2 handles it
} from '@heroicons/react/24/outline';
import Profile2 from './Profile2';
// import { useUserData } from '../../hooks/useUserData'; // Keep if needed by Profile2 or elsewhere
import { useChatMetadata } from '../../hooks/useChatMetadata'; // --- ADDED ---

interface Navigation2Props {
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

const Navigation2: React.FC<Navigation2Props> = ({ isCollapsed, toggleCollapse }) => {
    const location = useLocation();
    // const { userData, loading: userDataLoading } = useUserData(); // Keep if needed
    const { chatMetadata } = useChatMetadata(); // --- ADDED --- Get chat metadata

    const sidebarWidth = isCollapsed ? 'w-20' : 'w-64';
    const contentPadding = isCollapsed ? 'px-2' : 'px-4';

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: ChartPieIcon },
        { name: 'Chat', path: '/chat', icon: ChatBubbleLeftRightIcon },
        { name: 'Settings', path: '/settings', icon: Cog6ToothIcon },
    ];

    const bottomNavItems = [
        { name: 'Customer Support', path: '/support', icon: QuestionMarkCircleIcon },
    ];

    const sidebarVariants = {
        expanded: { width: '16rem' },
        collapsed: { width: '5rem' },
    };

    const labelVariants = {
        expanded: { opacity: 1, display: 'inline-block', transition: { delay: 0.1 } },
        collapsed: { opacity: 0, display: 'none', transition: { duration: 0.1 } },
    };

    const iconVariants = {
        expanded: { marginRight: '0.75rem' },
        collapsed: { marginRight: '0' },
    };

    return (
        <motion.div
            variants={sidebarVariants}
            initial={false}
            animate={isCollapsed ? 'collapsed' : 'expanded'}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-0 left-0 h-screen ${sidebarWidth} bg-gradient-to-b from-gray-900 to-black text-white flex flex-col shadow-lg z-40 transition-width duration-300 ease-in-out`}
        >
            {/* Logo/Header Area */}
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} h-20 border-b border-gray-700 ${contentPadding}`}>
                <motion.div
                    animate={isCollapsed ? 'collapsed' : 'expanded'}
                    transition={{ duration: 0.2 }}
                >
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/favicon.ico" alt="Vidoro" className="w-8 h-8 flex-shrink-0" />
                        <motion.span
                            variants={labelVariants}
                            className="font-bold text-xl whitespace-nowrap"
                        >
                            Vidoro
                        </motion.span>
                    </Link>
                </motion.div>
            </div>

            {/* Main Navigation */}
            <nav className={`flex-grow mt-6 ${contentPadding}`}>
                <ul>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const isChat = item.name === 'Chat'; // --- ADDED --- Check if it's the chat item
                        const unreadCount = chatMetadata.clientUnreadCount; // --- ADDED --- Get count

                        return (
                            <li key={item.name} className="mb-2 relative"> {/* --- ADDED relative --- */}
                                <Link
                                    to={item.path}
                                    className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive
                                            ? 'bg-blue-600/80 text-white shadow-inner'
                                            : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                                        } ${isCollapsed ? 'justify-center' : ''}`}
                                >
                                    <motion.div variants={iconVariants}>
                                        <item.icon className={`h-6 w-6 flex-shrink-0 ${isActive ? 'text-white' : ''}`} />
                                    </motion.div>
                                    <motion.span
                                        variants={labelVariants}
                                        className={`font-medium whitespace-nowrap ${isActive ? 'text-white' : ''}`}
                                    >
                                        {item.name}
                                    </motion.span>

                                    {/* --- START UNREAD BADGE --- */}
                                    {isChat && unreadCount > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            className={`absolute top-1 right-1 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full ${
                                                // Adjust position when collapsed
                                                isCollapsed ? 'right-1/2 translate-x-1/2 -mt-1' : 'right-2'
                                            }`}
                                            style={{ transformOrigin: 'center' }} // Ensure scaling is centered
                                        >
                                            {unreadCount > 9 ? '9+' : unreadCount}
                                        </motion.span>
                                    )}
                                    {/* --- END UNREAD BADGE --- */}

                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bottom Section */}
            <div className={`mt-auto border-t border-gray-700 pt-4 pb-2 ${contentPadding}`}>
                {/* Buy Credits */}
                <motion.div
                    whileHover={{ scale: isCollapsed ? 1 : 1.03 }}
                    className="mb-3 relative group"
                >
                    <Link
                        to="/credits"
                        className={`flex items-center p-3 rounded-lg transition-all duration-300 text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-400 hover:to-red-600 shadow-lg ${isCollapsed ? 'justify-center' : ''}`}
                    >
                        <motion.div variants={iconVariants}>
                            <CreditCardIcon className="h-6 w-6 text-white flex-shrink-0" />
                        </motion.div>
                        <motion.span
                            variants={labelVariants}
                            className="font-semibold whitespace-nowrap"
                        >
                            Buy Credits
                        </motion.span>
                    </Link>
                    {!isCollapsed && (
                        <span className="absolute -inset-0.5 group-hover:inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500 -z-10"></span>
                    )}
                </motion.div>

                {/* Other Bottom Links */}
                <ul>
                    {bottomNavItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.name} className="mb-2">
                                <Link
                                    to={item.path}
                                    className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive
                                            ? 'bg-gray-700 text-white'
                                            : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                                        } ${isCollapsed ? 'justify-center' : ''}`}
                                >
                                    <motion.div variants={iconVariants}>
                                        <item.icon className="h-6 w-6 flex-shrink-0" />
                                    </motion.div>
                                    <motion.span variants={labelVariants} className="font-medium whitespace-nowrap">
                                        {item.name}
                                    </motion.span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Profile Section */}
                <div className="mt-4">
                    <Profile2 isCollapsed={isCollapsed} />
                </div>

                {/* Collapse Toggle Button */}
                <div className="flex justify-center mt-4">
                    <button
                        onClick={toggleCollapse}
                        className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    >
                        {isCollapsed ? <ChevronDoubleRightIcon className="h-5 w-5" /> : <ChevronDoubleLeftIcon className="h-5 w-5" />}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Navigation2;