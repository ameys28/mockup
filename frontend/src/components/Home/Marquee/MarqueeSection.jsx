import { InfiniteMarquee } from "./InfiniteMarquee"

export function MarqueeSection() {
    const generateImages = (prefix) =>
        Array.from({ length: 10 }, (_, i) => ({
            id: i,
            src: `/placeholder.svg?height=300&width=300&text=${prefix}${i + 1}`,
            alt: `LEGO Set ${i + 1}`,
    }))

    const row1Images = generateImages("Set")
    const row2Images = generateImages("Build")
    const row3Images = generateImages("Create")

return (
    <section className="bg-[#F6F6F6] py-3 h-[100vh]">
        <div className="container mx-auto mb-6">
            <h2 className="text-center text-3xl font-bold text-[#2b2b2b] md:text-4xl">Explore Creations</h2>
        </div>

        <div>
            <InfiniteMarquee direction="left" speed={30} images={row1Images} />
            <InfiniteMarquee direction="right" speed={25} images={row2Images} />
            <InfiniteMarquee direction="left" speed={35} images={row3Images} />
        </div>
    </section>
)
}

