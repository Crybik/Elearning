'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { courses } from '../../data/dummyData';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredCourses = courses
    .filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      // Add more sort options if needed
      return 0;
    });

  return (
    <div className="space-y-8">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-[family-name:var(--font-display)]">
          My Courses
        </h1>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow"
            />
          </div>
          
          <div className="relative">
            <FunnelIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-10 pr-8 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
            >
              <option value="name">Sort by Name</option>
              {/* Add more options like progress, etc. */}
            </select>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 flex flex-col h-full cursor-pointer"
            >
              {/* Top Half - Geometric Pattern */}
              <div className={`h-32 ${course.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                   {/* Geometric Pattern SVG Overlay */}
                   <svg width="100%" height="100%">
                     <pattern id={`pattern-${course.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                       <circle cx="2" cy="2" r="1" className="text-white fill-current" />
                       <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" className="text-white" fill="none"/>
                     </pattern>
                     <rect width="100%" height="100%" fill={`url(#pattern-${course.id})`} />
                   </svg>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 dark:text-white">
                  {course.code}
                </div>
              </div>

              {/* Bottom Half - Details */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {course.department}
                </p>
                
                <div className="mt-auto">
                   <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                     <span>Progress</span>
                     <span>{course.progress}%</span>
                   </div>
                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                     <div 
                       className={`h-full ${course.color.replace('bg-', 'bg-')}`} 
                       style={{ width: `${course.progress}%` }}
                     ></div>
                   </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
