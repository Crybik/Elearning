'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  SunIcon, 
  MoonIcon,
  BellIcon, 
  ChatBubbleLeftRightIcon, 
  UserCircleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { currentUser, notifications, messages } from '../data/dummyData';

export default function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Courses', href: '/courses' },
    { name: 'Assignments Dashboard', href: '/assignments' },
  ];

  const handleDropdown = (name: string | null) => {
    setActiveDropdown(name);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        {/* Logo Placeholder */}
        <Link href="/courses" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            U
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
            UniLMS
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400",
                pathname === link.href 
                  ? "text-indigo-600 dark:text-indigo-400" 
                  : "text-gray-600 dark:text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {theme === 'dark' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
        </button>

        {/* Notifications Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => handleDropdown('notifications')}
          onMouseLeave={() => handleDropdown(null)}
        >
          <button className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
          </button>
          
          <AnimatePresence>
            {activeDropdown === 'notifications' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 overflow-hidden"
              >
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((item) => (
                    <div key={item.id} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700/50 last:border-0 cursor-pointer">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                        <span className="text-xs text-gray-500">{item.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{item.message}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700/30 text-center border-t border-gray-200 dark:border-gray-700">
                  <a href="#" className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline">View all notifications</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Messages Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => handleDropdown('messages')}
          onMouseLeave={() => handleDropdown(null)}
        >
          <button className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <ChatBubbleLeftRightIcon className="w-6 h-6" />
          </button>
          
          <AnimatePresence>
            {activeDropdown === 'messages' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 overflow-hidden"
              >
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Messages</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {messages.map((item) => (
                    <div key={item.id} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700/50 last:border-0 cursor-pointer flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.sender}</p>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{item.time}</span>
                        </div>
                        <p className={clsx("text-xs truncate", item.unread ? "font-medium text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400")}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700/30 text-center border-t border-gray-200 dark:border-gray-700">
                  <a href="#" className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline">View all messages</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => handleDropdown('profile')}
          onMouseLeave={() => handleDropdown(null)}
        >
          <button 
            className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
               {/* Using UserCircleIcon as avatar placeholder if no image */}
               <UserCircleIcon className="w-full h-full" />
            </div>
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </button>

          <AnimatePresence>
            {activeDropdown === 'profile' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 overflow-hidden z-50"
              >
                {[
                  { name: 'Profile', href: '/profile' },
                  { name: 'Grades', href: '#' },
                  { name: 'Language', href: '#' },
                  { name: 'Exams Portal', href: '#' },
                  { name: 'Log out', href: '/' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
