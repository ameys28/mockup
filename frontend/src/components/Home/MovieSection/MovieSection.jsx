import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

export function MovieSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="bg-[#2b2b2b] py-5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            The LEGO® Movie Experience
          </h2>
          <p className="mb-10 text-lg text-white/70">
            Dive into the world of LEGO® movies and discover the magic behind the bricks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl"
        >
          {/* Video Container with Hover Effect */}
          <div className="relative aspect-video w-full overflow-hidden group">
            {/* Video Element */}
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/ds7sasaqb/video/upload/v1741674929/l1yh0r1qwkhbajkwg73z.mp4"
              className="h-full w-full object-cover"
            />

            {/* Play/Pause Button - Appears on Hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
              <Button
                onClick={handleTogglePlay}
                className="group-hover:opacity-100 h-20 w-20 rounded-full bg-[#E3000B] transition-transform hover:scale-110"
              >
                {isPlaying ? (
                  <Pause className="h-10 w-10 fill-white text-white transition-transform group-hover:scale-110" />
                ) : (
                  <Play className="h-10 w-10 fill-white text-white transition-transform group-hover:scale-110" />
                )}
                <span className="sr-only">{isPlaying ? "Pause Trailer" : "Play Trailer"}</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
