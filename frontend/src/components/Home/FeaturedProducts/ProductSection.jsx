import { motion } from "framer-motion"
import { ProductCard } from "./ProductCard"

export function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Twilight The Cullen House",
      price: "219.99",
      image: "https://res.cloudinary.com/dze7wdgzb/image/upload/v1741677149/uj1jhqmhf6oa4tyqyhat.jpg",
      rating: 4.6,
      pieces: 2001,
      isNew: true,
    },
    {
      id: 2,
      name: "Architecture Skyline Series",
      price: "199.99",
      image: "https://res.cloudinary.com/dze7wdgzb/image/upload/v1741676837/n7d9dk7rchrwzclfwopi.jpg",
      rating: 4.8,
      pieces: 2584,
      isNew: false,
    },
    {
      id: 3,
      name: "Technic Supercar",
      price: "349.99",
      image: "https://res.cloudinary.com/dze7wdgzb/image/upload/v1741676795/lakqdgxbfmuttjqbc5xf.jpg",
      rating: 4.9,
      pieces: 3696,
      isNew: true,
    },
    {
      id: 4,
      name: "Star Wars Ultimate Collector Series",
      price: "799.99",
      image: "https://res.cloudinary.com/dze7wdgzb/image/upload/v1741676743/oti9s5i1uiy3gsuwywuw.jpg",
      rating: 4.7,
      pieces: 7541,
      isNew: false,
    },
  ]

  return (
    <section className="bg-[#F6F6F6] py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-[#2b2b2b] md:text-4xl">Featured Products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#2b2b2b]/70">
            Discover our most popular building sets for collectors and enthusiasts
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

