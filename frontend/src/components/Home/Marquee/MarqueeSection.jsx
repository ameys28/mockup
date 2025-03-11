import { InfiniteMarquee } from "./InfiniteMarquee";

const imageUrls = [
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675879/igl0c7fo9xbvuaaayw0h.jpg",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675879/bfjs9knpgxmw7asphjkq.jpg",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675879/cliseo2lmao1gi6bdkyr.jpg",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675879/ey6lwvzd5jdgrwrfaaql.jpg",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675879/igbiiedx7aamsq56opnf.jpg",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675878/whrhfbusvkaoeoso29hm.jpg",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675878/gjrcm7ec3qvgotvph5dw.webp",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675878/mj7vxsjffuveeaargsy0.jpg",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675878/is1py2cpitjmgftsdbdz.webp",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675878/vxw70bnwegdqirczdovs.jpg",
    "https://res.cloudinary.com/ds7sasaqb/image/upload/v1741675881/aufnonqd2jkypzrlefn6.jpg"
];

const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

export function MarqueeSection() {
    const marqueeConfigs = [
        { direction: "left", speed: 25 },
        { direction: "right", speed: 35 },
        { direction: "left", speed: 40 }
    ];

    return (
        <section className="bg-[#F6F6F6] py-3 h-[100vh] flex flex-col gap-2">
            <div className="container mx-auto mb-3">
                <h2 className="text-center text-3xl font-bold text-[#2b2b2b] md:text-4xl">
                    Explore Creations
                </h2>
            </div>

            <div className="flex flex-col gap-1">
                {marqueeConfigs.map((config, index) => (
                    <div key={index} className="overflow-hidden">
                        <InfiniteMarquee
                            direction={config.direction}
                            speed={config.speed}
                            images={shuffleArray(imageUrls).map((src, i) => ({
                                id: i,
                                src,
                                alt: `Image ${i + 1}`
                            }))}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
