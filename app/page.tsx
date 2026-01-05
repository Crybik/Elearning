"use client";

import { useTheme } from "./context/ThemeContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const { theme, toggleTheme } = useTheme();
  const [showCredits, setShowCredits] = useState(false);
  const isDark = theme === "dark";

  return (
    <div className="font-[family-name:var(--font-body)] min-h-screen flex relative">
      {/* Credits Popup */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {showCredits && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="mb-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-72"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-100 dark:border-gray-700 pb-2">
                Credits
              </h3>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Saleh Barjakly</span>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400">Web Developer</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Katia Makhamreh</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400">Designer</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Leen Abusalem</span>
                  <span className="text-xs text-purple-600 dark:text-purple-400">Designer</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Hasan Alzyoud</span>
                  <span className="text-xs text-green-600 dark:text-green-400">Quality Assurance</span>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setShowCredits(!showCredits)}
          className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors border border-gray-200 dark:border-gray-700"
        >
          <QuestionMarkCircleIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-1 min-h-screen">
        {/* Left Side - Campus Image */}
        <div className="w-2/3 relative">
          <Image
            alt="Dynamic University Campus Scene"
            className="w-full h-full object-cover"
            src="https://www.ju.edu.jo/SiteAssets/%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D8%A7%D9%94%D8%B1%D8%AF%D9%86%D9%8A%D8%A9.jpg"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-white text-center">
              <h2 className="text-6xl font-[family-name:var(--font-display)] font-bold leading-tight drop-shadow-lg">
                <span className="text-[#00B06B]">UJ</span> Elearning
              </h2>
              <p className="mt-4 text-xl font-[family-name:var(--font-body)] drop-shadow-md">
                Discover, Learn, Achieve.
              </p>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-white/90 text-sm z-10 font-medium drop-shadow-md">
            © 2025 University of Jordan. All rights reserved.
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/3 flex flex-col items-center justify-center p-8 bg-white dark:bg-[#2A2A2A] shadow-xl transition-colors duration-300">
          <div className="w-full max-w-sm">
            {/* Logo and Header */}
            <div className="text-center mb-10">
              <div className="mx-auto h-20 w-20 flex items-center justify-center mb-4">
                <div className="p-2 rounded-full bg-gray-100 dark:bg-[#1A1A1A] shadow-md transition-colors duration-300">
                  <Image
                    alt="University of Jordan Logo"
                    className="w-full h-full object-contain"
                    src="/logo.png"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <h1 className="text-4xl font-[family-name:var(--font-display)] font-bold text-gray-800 dark:text-gray-100 mb-2 tracking-tight transition-colors duration-300">
                Your Gateway
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-300">
                to UJ Elearning.
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              <div className="space-y-1.5">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300"
                  htmlFor="username"
                >
                  Username
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[20px] transition-colors duration-300">
                      person
                    </span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-[#4A4A4A] rounded-lg bg-gray-50 dark:bg-[#3A3A3A] text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B06B] focus:border-transparent transition-all sm:text-sm"
                    id="username"
                    name="username"
                    placeholder="Enter your ID"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[20px] transition-colors duration-300">
                      lock
                    </span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-[#4A4A4A] rounded-lg bg-gray-50 dark:bg-[#3A3A3A] text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B06B] focus:border-transparent transition-all sm:text-sm"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end">
                <a
                  className="text-sm font-medium text-[#00B06B] hover:text-green-600 dark:hover:text-green-300 transition-colors"
                  href="#"
                >
                  Forgot your password?
                </a>
              </div>

              <Link
                href="/courses"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-[#00B06B] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B06B] transition-colors duration-200 transform hover:scale-[1.01]"
              >
                Log In
              </Link>
            </form>

            {/* Language Selector */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#4A4A4A] flex justify-center transition-colors duration-300">
              <div className="relative inline-block text-left">
                <button
                  aria-expanded="true"
                  aria-haspopup="true"
                  className="group inline-flex justify-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none transition-colors items-center gap-1.5"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">language</span>
                  English
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform">
                    expand_more
                  </span>
                </button>
              </div>
            </div>

            {/* Theme Toggle Switch */}
            <div className="mt-6 flex justify-center items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                Light
              </span>
              <label className="theme-switch">
                <input
                  type="checkbox"
                  id="theme-toggle"
                  checked={isDark}
                  onChange={toggleTheme}
                />
                <span className="theme-slider"></span>
              </label>
              <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                Dark
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
