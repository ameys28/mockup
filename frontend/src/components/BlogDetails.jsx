"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate,Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Heart, Bookmark, Share2, MessageSquare } from "lucide-react"

// Sample blog data
const allBlogs = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    content: `
      <p>Artificial intelligence is no longer confined to science fiction or specialized research labs. It's becoming an integral part of our daily lives, often in ways we don't even notice.</p>
      
      <p>From the moment we wake up and check our personalized news feeds to the recommendations we receive while shopping online, AI algorithms are working behind the scenes to tailor our digital experiences.</p>
      
      <h2>Smart Homes and Personal Assistants</h2>
      
      <p>Perhaps the most visible manifestation of AI in everyday life is the rise of smart home devices and personal assistants. Products like Amazon's Alexa, Google Home, and Apple's Siri have become commonplace in many households, allowing users to control their environment, access information, and perform tasks through simple voice commands.</p>
      
      <p>These systems are constantly learning from user interactions, becoming more accurate and helpful over time. They can adjust your thermostat, turn lights on and off, play music, order groceries, and even tell jokes—all through natural language processing and machine learning algorithms that improve with use.</p>
      
      <h2>Healthcare Innovations</h2>
      
      <p>In healthcare, AI is making significant strides. Machine learning algorithms can analyze medical images to detect signs of disease often with accuracy rivaling that of human specialists. AI systems are being developed to predict patient deterioration in hospitals before traditional warning signs appear, potentially saving lives through early intervention.</p>
      
      <p>Wearable devices powered by AI can monitor vital signs and alert users to potential health issues, while personalized medicine approaches use AI to tailor treatments to individual genetic profiles.</p>
      
      <h2>Transportation Revolution</h2>
      
      <p>The transportation sector is being transformed by AI, with autonomous vehicles representing perhaps the most dramatic shift. Self-driving cars use a combination of sensors, cameras, and AI algorithms to navigate roads, interpret traffic signals, and avoid obstacles.</p>
      
      <p>While fully autonomous vehicles are still being perfected, many modern cars already incorporate AI-driven features like adaptive cruise control, lane-keeping assistance, and automated parking.</p>
      
      <h2>Ethical Considerations</h2>  lane-keeping assistance, and automated parking.</p>
      
      <h2>Ethical Considerations</h2>
      
      <p>As AI becomes more integrated into our daily lives, important ethical questions arise. Issues of privacy, data security, algorithmic bias, and transparency need careful consideration. Who owns the data collected by AI systems? How can we ensure AI doesn't perpetuate existing societal biases? What happens when AI makes mistakes that impact people's lives?</p>
      
      <p>These questions require thoughtful discussion among technologists, policymakers, ethicists, and the public to ensure AI development proceeds in ways that benefit humanity while minimizing potential harms.</p>
      
      <h2>The Future Outlook</h2>
      
      <p>Looking ahead, we can expect AI to become even more seamlessly integrated into our daily routines. From smart cities that optimize traffic flow and energy usage to personalized education systems that adapt to individual learning styles, the potential applications are vast.</p>
      
      <p>The key to successful AI integration will be balancing innovation with careful consideration of social impact, ensuring these powerful technologies enhance human capabilities rather than diminish human agency.</p>
    `,
    author: "Alex Johnson",
    authorBio: "Tech journalist and AI researcher with over a decade of experience covering emerging technologies.",
    date: "Mar 8, 2023",
    readTime: "5 min read",
    category: "Technology",
    tags: ["AI", "Technology", "Future", "Smart Home"],
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    content: `
      <p>In a world facing pressing environmental challenges, the concept of sustainable living has moved from fringe movement to mainstream necessity. But what exactly does it mean to live sustainably, and how can individuals make meaningful changes without completely overhauling their lives?</p>
      
      <p>Sustainable living is about making choices that reduce our negative impact on the environment while maintaining or improving our quality of life. It's about understanding that our daily decisions—from what we eat to how we travel—have consequences that extend far beyond our immediate surroundings.</p>
      
      <h2>Start in the Kitchen</h2>
      
      <p>One of the most impactful places to begin a sustainability journey is in the kitchen. Food production accounts for approximately 26% of global greenhouse gas emissions, making our dietary choices particularly significant.</p>
      
      <p>Reducing meat consumption, especially beef, can substantially lower your carbon footprint. Even adopting a "flexitarian" approach—eating mostly plant-based foods with occasional meat—can make a difference. Choosing locally grown, seasonal produce reduces transportation emissions and supports local economies.</p>
      
      <p>Minimizing food waste is equally important. Plan meals, store food properly, use leftovers creatively, and compost what can't be eaten. Remember that roughly one-third of all food produced globally is wasted—a staggering statistic with serious environmental implications.</p>
      
      <h2>Rethink Consumption</h2>
      
      <p>Our culture of consumption drives resource depletion and waste generation. Adopting a more mindful approach to purchasing can yield significant environmental benefits.</p>
      
      <p>Before buying something new, consider whether you truly need it. Can you borrow, rent, or purchase secondhand instead? When you do buy new items, look for quality products that will last, and research companies' environmental and social practices.</p>
      
      <p>Fast fashion is particularly problematic, with its resource-intensive production and short lifecycle. Building a smaller, more versatile wardrobe of higher-quality items reduces environmental impact while often saving money in the long run.</p>
      
      <h2>Energy and Water</h2>
      
      <p>Household energy and water use represent another area where small changes can add up to meaningful impact.</p>
      
      <p>Simple measures like switching to LED bulbs, unplugging electronics when not in use, washing clothes in cold water, and installing low-flow showerheads can reduce resource consumption without sacrificing comfort.</p>
      
      <p>For more substantial changes, consider home energy audits to identify inefficiencies, explore renewable energy options like solar panels, and investigate energy-efficient appliances when replacements are needed.</p>
      
      <h2>Transportation Choices</h2>
      
      <p>How we move from place to place significantly affects our environmental footprint. When possible, walk, bike, or use public transportation instead of driving. If you must drive, consider carpooling or investing in a fuel-efficient or electric vehicle.</p>
      
      <p>Air travel has a particularly high carbon footprint. While not everyone can eliminate flying, being more intentional about when and how often we fly can make a difference. Consider combining trips, choosing direct flights (which use less fuel), and exploring carbon offset programs.</p>
      
      <h2>Community Engagement</h2>
      
      <p>Individual actions matter, but collective efforts create systemic change. Engage with your community through local environmental groups, advocate for sustainable policies, and share knowledge with friends and family.</p>
      
      <p>Remember that sustainability is a journey, not a destination. Start with changes that feel manageable, celebrate progress, and gradually incorporate more sustainable practices into your lifestyle. Every positive choice, no matter how small, contributes to a healthier planet for current and future generations.</p>
    `,
    author: "Emma Roberts",
    authorBio:
      "Environmental scientist and sustainability advocate focusing on practical solutions for everyday living.",
    date: "Mar 5, 2023",
    readTime: "7 min read",
    category: "Lifestyle",
    tags: ["Sustainability", "Environment", "Lifestyle", "Climate"],
  },
  // Additional blog entries would be defined here
]

export default function BlogDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true)
    setTimeout(() => {
      const foundBlog = allBlogs.find((blog) => blog.id === Number(id))
      setBlog(foundBlog || null)
      setIsLoading(false)

      // Simulate random likes
      setLikes(Math.floor(Math.random() * 200) + 50)
    }, 500)
  }, [id])

  if (isLoading) {
    return (
      <div className="container-custom py-20 flex justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-12"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="container-custom py-20 text-center">
      <h1 className="text-3xl font-bold mb-4 font-serif">Blog not found</h1>
      <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
      <Link to="/" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
        Back to all blogs
      </Link>
    </div>
    )
  }

  return (
    <article className="min-h-screen bg-[#121212] text-gray-200">
  <div className="sticky top-16 z-40 bg-[#1E1E1E] border-b border-gray-700">
    {/* <div className="container-custom py-3">
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors"
        >
          <ArrowLeft size={16} />
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
            }}
            className={`flex items-center gap-1 ${
              isLiked ? "text-red-400" : "text-gray-400 hover:text-red-400"
            } transition-colors`}
          >
            <Heart size={16} fill={isLiked ? "#E3000B" : "none"} />
            <span className="text-sm">{likes}</span>
          </button>

          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`${
              isBookmarked ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"
            } transition-colors`}
          >
            <Bookmark size={16} fill={isBookmarked ? "#FFD502" : "none"} />
          </button>

          <button className="text-gray-400 hover:text-red-400 transition-colors">
            <Share2 size={16} />
          </button>

          <button className="text-gray-400 hover:text-red-400 transition-colors">
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </div> */}
  </div>

  <motion.div
    className="container-custom py-10 max-w-3xl mt-[6%]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-200">
        {blog.title}
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-medium">
          {blog.author.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{blog.author}</p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{blog.date}</span>
            <span>·</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      className="prose prose-lg max-w-none font-serif prose-headings:font-serif text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      dangerouslySetInnerHTML={{ __html: blog.content }}
    />

    <motion.div
      className="mt-12 pt-8 border-t border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
            }}
            className={`flex items-center gap-1 ${
              isLiked ? "text-red-400" : "text-gray-400 hover:text-red-400"
            } transition-colors`}
          >
            <Heart size={18} fill={isLiked ? "#E3000B" : "none"} />
            <span>{likes}</span>
          </button>

          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`${
              isBookmarked ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"
            } transition-colors`}
          >
            <Bookmark size={18} fill={isBookmarked ? "#FFD502" : "none"} />
          </button>
        </div>

        <div>
          <button className="text-gray-400 hover:text-red-400 transition-colors">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-start gap-4 mt-8">
        <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-black text-xl font-medium">
          {blog.author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-lg">{blog.author}</p>
          <p className="text-gray-400">{blog.authorBio}</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      className="mt-12 pt-8 border-t border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blogs?tag=${tag}`}
            className="bg-gray-800 px-3 py-1.5 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>
    </motion.div>
  </motion.div>
</article>


  )
}

