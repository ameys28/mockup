import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Users, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-16 flex flex-row justify-center">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-blue-900 mb-6 leading-tight">
          Welcome to <span className="text-yellow-500">DevSpace</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10">
          Your vibrant community for development discussions, insights, and collaboration
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-blue-900 bg-yellow-400 hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Read Blog
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/forum"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-blue-900 hover:bg-blue-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Join Discussion
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <Code2 className="w-12 h-12 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold text-blue-900 mb-3">Expert Insights</h2>
          <p className="text-slate-600">Access in-depth technical articles and tutorials from experienced developers.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <Users className="w-12 h-12 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold text-blue-900 mb-3">Active Community</h2>
          <p className="text-slate-600">Connect with fellow developers, share knowledge, and grow together.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <Sparkles className="w-12 h-12 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold text-blue-900 mb-3">Latest Trends</h2>
          <p className="text-slate-600">Stay updated with the newest technologies and development practices.</p>
        </div>
      </div>
    </div>
  );
}