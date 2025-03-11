"use client"

import { useState } from "react"
import {Link} from "react-router-dom"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"

// Sample blog data
const allBlogs = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    excerpt: "How artificial intelligence is transforming our daily routines and what to expect next.",
    author: "Alex Johnson",
    date: "Mar 8",
    readTime: "5 min read",
    category: "Technology",
    url: "https://media.gettyimages.com/id/537596301/photo/pile-of-colorful-lego-bricks.jpg?s=612x612&w=gi&k=20&c=z77nEU4O4GgvadmZNRMZUgdCfGULNScg8YQMHMX0hd8="
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    excerpt: "Simple ways to reduce your carbon footprint and live more sustainably.",
    author: "Emma Roberts",
    date: "Mar 5",
    readTime: "7 min read",
    category: "Lifestyle",
    url: "https://st2.depositphotos.com/1009868/45177/i/450/depositphotos_451772690-stock-photo-tambov-russian-federation-january-2021.jpg"
  },
  {
    id: 3,
    title: "The Psychology of Productivity",
    excerpt: "Understanding the mental factors that affect how we work and get things done.",
    author: "Michael Chen",
    date: "Mar 3",
    readTime: "8 min read",
    category: "Psychology",
    url: "https://media.gettyimages.com/id/537596301/photo/pile-of-colorful-lego-bricks.jpg?s=612x612&w=gi&k=20&c=z77nEU4O4GgvadmZNRMZUgdCfGULNScg8YQMHMX0hd8="
  },
  {
    id: 4,
    title: "Remote Work Revolution: The New Normal",
    excerpt: "How companies and employees are adapting to permanent remote work arrangements.",
    author: "Sarah Williams",
    date: "Mar 7",
    readTime: "6 min read",
    category: "Work",
     url: "https://st2.depositphotos.com/1009868/45177/i/450/depositphotos_451772690-stock-photo-tambov-russian-federation-january-2021.jpg"
  },
  {
    id: 5,
    title: "Financial Freedom: A Step-by-Step Guide",
    excerpt: "Practical advice for managing your money and building wealth over time.",
    author: "David Kim",
    date: "Mar 6",
    readTime: "10 min read",
    category: "Finance",
    url: "https://media.gettyimages.com/id/537596301/photo/pile-of-colorful-lego-bricks.jpg?s=612x612&w=gi&k=20&c=z77nEU4O4GgvadmZNRMZUgdCfGULNScg8YQMHMX0hd8="
  },
  {
    id: 6,
    title: "The Art of Mindful Eating",
    excerpt: "How paying attention to what and how you eat can transform your relationship with food.",
    author: "Lisa Chen",
    date: "Mar 4",
    readTime: "4 min read",
    category: "Health",
     url: "https://st2.depositphotos.com/1009868/45177/i/450/depositphotos_451772690-stock-photo-tambov-russian-federation-january-2021.jpg"
  },
  {
    id: 7,
    title: "The Rise of Sustainable Fashion",
    excerpt: "How the fashion industry is evolving to address environmental concerns.",
    author: "Jessica Lee",
    date: "Mar 2",
    readTime: "6 min read",
    category: "Fashion",
    url: "https://media.gettyimages.com/id/537596301/photo/pile-of-colorful-lego-bricks.jpg?s=612x612&w=gi&k=20&c=z77nEU4O4GgvadmZNRMZUgdCfGULNScg8YQMHMX0hd8="
  },
  {
    id: 8,
    title: "Digital Minimalism: Reclaiming Focus",
    excerpt: "Strategies for reducing digital distractions and improving concentration.",
    author: "Ryan Park",
    date: "Mar 1",
    readTime: "7 min read",
    category: "Technology",
     url: "https://st2.depositphotos.com/1009868/45177/i/450/depositphotos_451772690-stock-photo-tambov-russian-federation-january-2021.jpg"
  },
  {
    id: 9,
    title: "The Science of Sleep: Why It Matters",
    excerpt: "Understanding the crucial role of sleep in physical and mental health.",
    author: "Dr. Amanda Chen",
    date: "Feb 28",
    readTime: "9 min read",
    category: "Health",
    url: "https://media.gettyimages.com/id/537596301/photo/pile-of-colorful-lego-bricks.jpg?s=612x612&w=gi&k=20&c=z77nEU4O4GgvadmZNRMZUgdCfGULNScg8YQMHMX0hd8="
  },
]

const categories = ["All", "Technology", "Lifestyle", "Psychology", "Work", "Finance", "Health", "Fashion"]

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
    <section className="bg-[#121212] py-8 border-b border-gray-700">
      <div className="container-custom mt-[8%]">
        <motion.h1
          className="text-3xl font-bold mb-6 font-serif text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All stories
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <select
              className="appearance-none pl-4 pr-10 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-8 bg-[#1A1A1A]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="mb-8 pb-8 border-b border-gray-700 last:border-0"
              >
                <Link to={`/blog/${blog.id}`} className="flex flex-col md:flex-row gap-6 group">
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-300">{blog.author}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors font-serif text-white">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 mb-3 text-base line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span>{blog.date}</span>
                      <span>·</span>
                      <span>{blog.readTime}</span>
                      <span>·</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-300">{blog.category}</span>
                    </div>
                  </div>
                  <div className="md:w-1/3 h-32 bg-gray-800 flex items-center justify-center">
                  <div className="w-full h-full">
                    <img src={blog.url} alt={blog.title} className="h-32 w-full object-cover rounded-lg" />
                  </div>
                    
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-gray-400">No articles found matching your criteria.</p>
              <button
                className="mt-4 text-blue-500 hover:underline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  </>
  )
}

