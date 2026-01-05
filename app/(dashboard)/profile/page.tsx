'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCircleIcon, 
  EnvelopeIcon, 
  IdentificationIcon, 
  AcademicCapIcon, 
  FingerPrintIcon,
  EyeIcon, 
  EyeSlashIcon,
  KeyIcon
} from '@heroicons/react/24/outline';
import { currentUser } from '../../data/dummyData';

export default function ProfilePage() {
  const [showPassword, setShowPassword] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Top Section - User Card */}
      <motion.div 
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center sm:items-start gap-8"
      >
        <div className="w-32 h-32 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
           <UserCircleIcon className="w-full h-full p-2" />
        </div>
        
        <div className="flex-1 text-center sm:text-left space-y-4">
           <div>
             <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-[family-name:var(--font-display)]">
               {currentUser.name}
             </h1>
             <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
               Student ID: {currentUser.studentId}
             </p>
           </div>
           
           <div className="flex flex-wrap justify-center sm:justify-start gap-3">
             <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
               Message
             </button>
             <button className="px-6 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-medium transition-colors">
               Reset Password
             </button>
           </div>
        </div>
      </motion.div>

      {/* Details Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <ProfileField 
             icon={UserCircleIcon} 
             label="Full Name" 
             value={currentUser.name} 
           />
           <ProfileField 
             icon={EnvelopeIcon} 
             label="Email Address" 
             value={currentUser.email} 
           />
           <ProfileField 
             icon={IdentificationIcon} 
             label="Student ID" 
             value={currentUser.studentId} 
           />
           <ProfileField 
             icon={AcademicCapIcon} 
             label="Faculty" 
             value={currentUser.faculty} 
           />
           <ProfileField 
             icon={FingerPrintIcon} 
             label="Username" 
             value={currentUser.username} 
           />
           
           {/* Password Field with Toggle */}
           <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center gap-4">
             <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
               <KeyIcon className="w-6 h-6" />
             </div>
             <div className="flex-1">
               <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">
                 Password
               </p>
               <div className="flex items-center justify-between">
                 <p className="text-gray-900 dark:text-white font-medium">
                   {showPassword ? "student123" : "••••••••••••"}
                 </p>
                 <button 
                   onClick={() => setShowPassword(!showPassword)}
                   className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none"
                 >
                   {showPassword ? (
                     <EyeSlashIcon className="w-5 h-5" />
                   ) : (
                     <EyeIcon className="w-5 h-5" />
                   )}
                 </button>
               </div>
             </div>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProfileField({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center gap-4 hover:shadow-sm transition-shadow">
      <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">
          {label}
        </p>
        <p className="text-gray-900 dark:text-white font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}
