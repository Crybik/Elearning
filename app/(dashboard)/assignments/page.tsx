'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { calendarEvents } from '../../data/dummyData';
import clsx from 'clsx';

export default function AssignmentsDashboard() {
  // Hardcoded for December 2025 as per requirements
  const currentMonth = "December 2025";
  const daysInMonth = 31;
  const startDay = 1; // Monday (0=Sun, 1=Mon, ...) - Dec 1 2025 is Monday

  // Generate calendar grid
  const days = [];
  // Empty slots for days before start of month
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getEventsForDay = (day: number) => {
    const dateStr = `2025-12-${day.toString().padStart(2, '0')}`;
    return calendarEvents.find(e => e.date === dateStr)?.events || [];
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-[family-name:var(--font-display)]">
          Assignments Dashboard
        </h1>
        <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-gray-700">
           <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
             <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
           </button>
           <span className="font-semibold text-gray-900 dark:text-white px-2">{currentMonth}</span>
           <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
             <ChevronRightIcon className="w-5 h-5 text-gray-500" />
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex-1 flex flex-col overflow-hidden">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          {weekDays.map(day => (
            <div key={day} className="py-3 text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 flex-1 auto-rows-fr bg-gray-200 dark:bg-gray-700 gap-px border-b border-gray-200 dark:border-gray-700">
          {days.map((day, index) => {
            const events = day ? getEventsForDay(day) : [];
            return (
              <div 
                key={index} 
                className={clsx(
                  "bg-white dark:bg-gray-800 p-2 min-h-[100px] flex flex-col gap-1 transition-colors",
                  day ? "hover:bg-gray-50 dark:hover:bg-gray-750" : "bg-gray-50 dark:bg-gray-900/30"
                )}
              >
                {day && (
                  <>
                    <span className={clsx(
                      "text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full mb-1",
                      // Highlight today (assuming today is Dec 15 for demo purposes or just style it simply)
                      day === 15 
                        ? "bg-indigo-600 text-white" 
                        : "text-gray-700 dark:text-gray-300"
                    )}>
                      {day}
                    </span>
                    
                    <div className="flex flex-col gap-1 overflow-y-auto max-h-[120px] custom-scrollbar">
                      {events.map((event, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={clsx(
                            "text-xs p-1.5 rounded-md truncate cursor-pointer text-white shadow-sm",
                            event.color
                          )}
                          title={event.title}
                        >
                          {event.title}
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
