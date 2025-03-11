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
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    excerpt: "Simple ways to reduce your carbon footprint and live more sustainably.",
    author: "Emma Roberts",
    date: "Mar 5",
    readTime: "7 min read",
    category: "Lifestyle",
  },
  {
    id: 3,
    title: "The Psychology of Productivity",
    excerpt: "Understanding the mental factors that affect how we work and get things done.",
    author: "Michael Chen",
    date: "Mar 3",
    readTime: "8 min read",
    category: "Psychology",
  },
  {
    id: 4,
    title: "Remote Work Revolution: The New Normal",
    excerpt: "How companies and employees are adapting to permanent remote work arrangements.",
    author: "Sarah Williams",
    date: "Mar 7",
    readTime: "6 min read",
    category: "Work",
  },
  {
    id: 5,
    title: "Financial Freedom: A Step-by-Step Guide",
    excerpt: "Practical advice for managing your money and building wealth over time.",
    author: "David Kim",
    date: "Mar 6",
    readTime: "10 min read",
    category: "Finance",
  },
  {
    id: 6,
    title: "The Art of Mindful Eating",
    excerpt: "How paying attention to what and how you eat can transform your relationship with food.",
    author: "Lisa Chen",
    date: "Mar 4",
    readTime: "4 min read",
    category: "Health",
  },
  {
    id: 7,
    title: "The Rise of Sustainable Fashion",
    excerpt: "How the fashion industry is evolving to address environmental concerns.",
    author: "Jessica Lee",
    date: "Mar 2",
    readTime: "6 min read",
    category: "Fashion",
  },
  {
    id: 8,
    title: "Digital Minimalism: Reclaiming Focus",
    excerpt: "Strategies for reducing digital distractions and improving concentration.",
    author: "Ryan Park",
    date: "Mar 1",
    readTime: "7 min read",
    category: "Technology",
  },
  {
    id: 9,
    title: "The Science of Sleep: Why It Matters",
    excerpt: "Understanding the crucial role of sleep in physical and mental health.",
    author: "Dr. Amanda Chen",
    date: "Feb 28",
    readTime: "9 min read",
    category: "Health",
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
      <section className="bg-whitesmoky py-8 border-b border-gray-200">
        <div className="container-custom">
          <motion.h1
            className="text-3xl font-bold mb-6 font-serif text-black"
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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/50" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-red"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-red bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Filter
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 pointer-events-none"
                size={18}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="mb-8 pb-8 border-b border-gray-200 last:border-0"
                >
                  <Link to={`/blog/${blog.id}`} className="flex flex-col md:flex-row gap-6 group">
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-yellow flex items-center justify-center text-xs text-black">
                          {blog.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium">{blog.author}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-red transition-colors font-serif">
                        {blog.title}
                      </h3>
                      <p className="text-black/70 mb-3 text-base line-clamp-2">{blog.excerpt}</p>
                      <div className="flex items-center gap-1 text-xs text-black/60">
                        <span>{blog.date}</span>
                        <span>·</span>
                        <span>{blog.readTime}</span>
                        <span>·</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-whitesmoky">{blog.category}</span>
                      </div>
                    </div>
                    <div className="md:w-1/3 h-32 bg-whitesmoky flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center">
                        <span className="text-red text-xs">{blog.id}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="py-16 text-center">
                <p className="text-lg text-black/60">No articles found matching your criteria.</p>
                <button
                  className="mt-4 text-red hover:underline"
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

