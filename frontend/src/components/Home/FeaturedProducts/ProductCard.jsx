import { Heart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProductCard({ id, name, price, image, rating, pieces, isNew }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="flex flex-col overflow-hidden rounded-[1rem] bg-white shadow-md transition-all hover:shadow-xl"
    >
      <div className="relative">
        {isNew && <Badge className="absolute right-3 top-3 bg-[#FFD502] text-[#2b2b2b] font-medium">New</Badge>}
        <button className="absolute left-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors hover:bg-white">
          <Heart className="h-5 w-5 text-[#2b2b2b]" />
        </button>
        <img src={image || "/placeholder.svg"} alt={name} className="aspect-square w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex items-center text-sm">
            <span className="mr-1 text-[#FFD502]">★</span>
            {rating}
          </span>
          <span className="text-sm text-[#2b2b2b]/70">{pieces} pcs</span>
        </div>

        <h3 className="mb-2 flex-1 text-lg font-bold text-[#2b2b2b]">{name}</h3>
        <p className="mb-4 text-xl font-bold text-[#E3000B]">₹ {price}</p>

        <Button className="w-full rounded-full bg-[#FFD502] text-[#2b2b2b] hover:bg-[#FFD502]/90">Add to Bag</Button>
      </div>
    </motion.div>
  )
}
