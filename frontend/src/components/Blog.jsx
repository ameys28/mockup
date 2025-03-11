import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development...",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    excerpt: "A comprehensive guide to using React Hooks effectively in your applications...",
    author: "Mike Chen",
    date: "March 14, 2024",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800"
  },
  {
    id: 3,
    title: "Building Scalable APIs",
    excerpt: "Best practices and patterns for creating maintainable and scalable API architectures...",
    author: "Alex Turner",
    date: "March 13, 2024",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800"
  }
];

export function Blog() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Latest Blog Posts</h1>
        <p className="text-xl text-slate-600">Discover insights and tutorials from our community</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-3 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-slate-600 mb-6 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-slate-500">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <button className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium">
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
// add later