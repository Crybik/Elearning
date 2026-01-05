import { 
  BookOpenIcon, 
  CalendarIcon, 
  ChatBubbleLeftRightIcon, 
  AcademicCapIcon, 
  UserCircleIcon,
  DocumentIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

export const currentUser = {
  name: "صالح احمد",
  studentId: "2023001",
  email: "alex.j@university.edu",
  faculty: "Computer Science",
  username: "alexj23",
  avatar: "/placeholder-avatar.png" // We will use a placeholder or icon if image not available
};

export const courses = [
  {
    id: "hci",
    code: "CS401",
    title: "Human Computer Interaction",
    department: "Computer Science",
    color: "bg-blue-500",
    sections: "All Sections",
    progress: 75,
  },
  {
    id: "cn",
    code: "CS402",
    title: "Computer Networks",
    department: "Computer Science",
    color: "bg-purple-500",
    sections: "Section A",
    progress: 45,
  },
  {
    id: "db",
    code: "CS403",
    title: "Database Systems",
    department: "Computer Science",
    color: "bg-green-500",
    sections: "Section B",
    progress: 60,
  },
  {
    id: "ai",
    code: "CS404",
    title: "Artificial Intelligence",
    department: "Computer Science",
    color: "bg-red-500",
    sections: "All Sections",
    progress: 30,
  }
];

export const courseDetails = {
  "hci": {
    chapters: [
      {
        id: 1,
        title: "Chapter 1: Introduction to HCI",
        materials: [
          { type: "pdf", title: "Introduction.pdf", date: "2025-10-01" },
          { type: "video", title: "What is HCI?", date: "2025-10-02" }
        ]
      },
      {
        id: 2,
        title: "Chapter 2: User Research Methods",
        materials: [
          { type: "pdf", title: "User_Research.pdf", date: "2025-10-10" },
          { type: "video", title: "Interview Techniques", date: "2025-10-12" }
        ]
      }
    ],
    announcements: [
      {
        id: 1,
        title: "Midterm Exam",
        date: "2025-12-15",
        content: "The midterm exam will cover Chapters 1-3. Please bring your student ID."
      },
      {
        id: 2,
        title: "Quiz 1 Results",
        date: "2025-11-20",
        content: "Quiz 1 results have been posted. Check the Grades tab."
      }
    ],
    assignments: [
      {
        id: 1,
        title: "Phase 2 submission",
        openDate: "2025-12-01",
        dueDate: "2025-12-20",
        status: "Pending"
      }
    ]
  }
};

export const calendarEvents = [
  {
    date: "2025-12-31",
    events: [
      { title: "Human Computer Interaction - Final Project", type: "assignment", color: "bg-blue-500" },
      { title: "Machine Learning - Quiz 3", type: "exam", color: "bg-purple-500" }
    ]
  },
  {
    date: "2025-12-15",
    events: [
      { title: "HCI Midterm", type: "exam", color: "bg-red-500" }
    ]
  }
];

export const notifications = [
  {
    id: 1,
    title: "New Assignment",
    message: "HCI Phase 2 is now available",
    time: "2 hours ago",
    read: false
  },
  {
    id: 2,
    title: "Grade Posted",
    message: "Your grade for Computer Networks Quiz 1 is out",
    time: "5 hours ago",
    read: true
  },
  {
    id: 3,
    title: "System Maintenance",
    message: "The LMS will be down for maintenance on Saturday",
    time: "1 day ago",
    read: true
  }
];

export const messages = [
  {
    id: 1,
    sender: "Dr. Sarah Smith",
    avatar: "/avatars/sarah.jpg", 
    content: "Please check your submission format.",
    time: "10 mins ago",
    unread: true
  },
  {
    id: 2,
    sender: "John Doe",
    avatar: "/avatars/john.jpg",
    content: "Hey, do you want to study for the exam?",
    time: "2 hours ago",
    unread: false
  }
];
