'use client';

import { useState, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronRightIcon, 
  DocumentIcon, 
  VideoCameraIcon, 
  ChevronDownIcon,
  CalendarIcon,
  MegaphoneIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';
import { courses, courseDetails } from '../../../data/dummyData';
import clsx from 'clsx';
import { notFound } from 'next/navigation';

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState('materials');
  const [openChapter, setOpenChapter] = useState<number | null>(1);

  const course = courses.find(c => c.id === id);
  const details = courseDetails[id as keyof typeof courseDetails];

  if (!course) {
    return notFound();
  }

  // Use HCI details as fallback for other courses to show data
  const data = details || courseDetails['hci'];

  const tabs = [
    { id: 'materials', label: 'Material', icon: ClipboardDocumentListIcon },
    { id: 'announcements', label: 'Announcements', icon: MegaphoneIcon },
    { id: 'assignments', label: 'Assignments', icon: CalendarIcon },
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <Link href="/courses" className="hover:text-indigo-600 transition-colors">Courses</Link>
        <ChevronRightIcon className="w-4 h-4 mx-2" />
        <span className="font-medium text-gray-900 dark:text-white">{course.title}</span>
        <ChevronRightIcon className="w-4 h-4 mx-2" />
        <span>{course.sections}</span>
      </nav>

      {/* Header */}
      <div className={`${course.color} rounded-2xl p-8 text-white relative overflow-hidden shadow-lg`}>
        <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
                <pattern id="header-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M0 60L60 0H30L0 30M60 60V30L30 60" stroke="currentColor" strokeWidth="2" fill="none"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#header-pattern)" />
            </svg>
        </div>
        <div className="relative z-10">
            <h1 className="text-3xl font-bold font-[family-name:var(--font-display)] mb-2">{course.title}</h1>
            <p className="opacity-90">{course.code} • {course.department}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex space-x-8">
          {tabs.map((tab) => {
             const Icon = tab.icon;
             return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  "flex items-center gap-2 pb-4 text-sm font-medium transition-colors relative",
                  activeTab === tab.id
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                )}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'materials' && (
            <div className="space-y-4">
              {data.chapters.map((chapter) => (
                <div 
                  key={chapter.id} 
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenChapter(openChapter === chapter.id ? null : chapter.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">{chapter.title}</span>
                    <motion.div
                      animate={{ rotate: openChapter === chapter.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openChapter === chapter.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-2 bg-gray-50 dark:bg-gray-800/50">
                          {chapter.materials.map((material, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-sm transition-shadow cursor-pointer">
                                {material.type === 'pdf' ? (
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                        <DocumentIcon className="w-6 h-6" />
                                    </div>
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <VideoCameraIcon className="w-6 h-6" />
                                    </div>
                                )}
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white text-sm">{material.title}</p>
                                    <p className="text-xs text-gray-500">{material.date}</p>
                                </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'announcements' && (
            <div className="grid gap-4">
              {data.announcements.map((announcement) => (
                <div key={announcement.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                   <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold text-lg text-gray-900 dark:text-white">{announcement.title}</h3>
                       <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">{announcement.date}</span>
                   </div>
                   <p className="text-gray-600 dark:text-gray-300">{announcement.content}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="grid gap-4">
              {data.assignments.map((assignment) => (
                <div key={assignment.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-l-4 border-l-amber-500 border-gray-200 dark:border-gray-700 shadow-sm flex justify-between items-center">
                   <div>
                       <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{assignment.title}</h3>
                       <div className="flex gap-4 text-sm text-gray-500">
                           <span>Open: {assignment.openDate}</span>
                           <span className="text-red-500 font-medium">Due: {assignment.dueDate}</span>
                       </div>
                   </div>
                   <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                       Submit
                   </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
