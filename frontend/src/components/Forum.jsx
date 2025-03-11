import React from 'react';
import { MessageSquare, Users, ArrowUpRight, Search } from 'lucide-react';

const forumTopics = [
  {
    id: 1,
    title: "How to optimize React performance?",
    description: "Looking for best practices to improve React application performance...",
    replies: 23,
    participants: 12,
    category: "React",
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    title: "TypeScript configuration help needed",
    description: "Having issues with TypeScript config in a Next.js project...",
    replies: 15,
    participants: 8,
    category: "TypeScript",
    lastActive: "4 hours ago"
  },
  {
    id: 3,
    title: "State management solutions comparison",
    description: "Comparing different state management solutions for React applications...",
    replies: 45,
    participants: 28,
    category: "State Management",
    lastActive: "1 hour ago"
  }
];

const categories = ["All Topics", "React", "TypeScript", "JavaScript", "Node.js", "State Management"];

export function Forum() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Discussion Forum</h1>
        <p className="text-xl text-slate-600 mb-8">Join the conversation with fellow developers</p>
        
        <div className="max-w-2xl mx-auto relative mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search discussions..."
            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-slate-200 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              category === 'All Topics'
                ? 'bg-yellow-400 text-blue-900 shadow-lg'
                : 'bg-white text-slate-700 hover:bg-blue-900 hover:text-white shadow hover:shadow-lg'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {forumTopics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  {topic.title}
                </h3>
                <p className="text-slate-600 mb-6">{topic.description}</p>
                <div className="flex items-center flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {topic.replies} replies
                  </span>
                  <span className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4 mr-1" />
                    {topic.participants} participants
                  </span>
                  <span className="text-yellow-500 font-medium">{topic.category}</span>
                </div>
              </div>
              <button className="flex items-center px-6 py-3 rounded-full text-white bg-blue-900 hover:bg-blue-800 shadow-lg hover:shadow-xl transition-all ml-6">
                Join Discussion
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-500">
              Last active {topic.lastActive}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// add later