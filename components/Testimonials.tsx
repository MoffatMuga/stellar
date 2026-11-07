"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Play, Quote, Star } from "lucide-react";
import { fadeUp, viewport } from "@/lib/motion";

// Swap these for any video you like (Pexels, Mixkit, Pixabay or your own file in /public)
const VIDEO_SRC =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
const VIDEO_POSTER =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80";

const testimonials = [
  {
    name: "Amelia Johnson",
    role: "Homeowner",
    text: "The team understood our style from day one. Every room feels warm, modern and completely us. We couldn't be happier with the result.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "John Doe",
    role: "Restaurant Owner",
    text: "Our space went from ordinary to unforgettable. The process was smooth, on budget and finished ahead of schedule.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sophie Laurent",
    role: "Office Manager",
    text: "Professional from the first consultation to the final handover. Our new office has boosted both comfort and productivity.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Scroll-linked size: small -> full -> small
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });

    const insetRaw = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [48, 0, 0, 48]
  );
  const radiusRaw = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [48, 0, 0, 48]
  );

  const inset = useSpring(insetRaw, { stiffness: 120, damping: 25 });
  const borderRadius = useSpring(radiusRaw, { stiffness: 120, damping: 25 });

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section id="testimonials" className="w-full overflow-x-clip bg-surface">
      {/* ---------- Video banner ---------- */}
            <div ref={stageRef} className="py-10 sm:py-16">
    <motion.div
          style={{
            marginLeft: inset,
            marginRight: inset,
            borderRadius,
          }}
          className="relative aspect-[4/5] overflow-hidden bg-dark sm:aspect-[16/9] lg:aspect-[16/8]"
        >
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            poster={VIDEO_POSTER}
            controls={playing}
            playsInline
            preload="none"
            onEnded={() => setPlaying(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {!playing && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-scrim" />

              <motion.button
                aria-label="Play video"
                onClick={handlePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-1/2 top-[38%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-play-border bg-play text-paper backdrop-blur-md sm:top-[40%] sm:h-24 sm:w-24"
              >
                <motion.span
                  aria-hidden
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border border-play-border"
                />
                <Play className="h-6 w-6 fill-paper" />
              </motion.button>

              <div className="pointer-events-none absolute inset-x-0 bottom-0">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 p-6 sm:flex-row sm:items-end sm:gap-6 sm:p-10 lg:px-8 lg:pb-14">
                    <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
                    Unlock Your Dream
                    <br />
                    Home Today!
                    </h2>
                    <p className="max-w-[15rem] text-xs leading-relaxed text-paper/90 sm:pb-2">
                    We encourage clients to actively participate in discussions,
                    share their ideas, preferences, and feedback.
                    </p>
                </div>
                </div>
            </>
          )}
        </motion.div>
      </div>

      {/* ---------- Testimonial cards ---------- */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="inline-block rounded-full border border-line bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink"
          >
            + Testimonials
          </motion.span>

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            custom={1}
            className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl"
          >
            What Our <span className="text-gold">Clients Say</span>
            <br />
            About <span className="text-gold">Working</span> With Us
          </motion.h3>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              custom={i}
              whileHover={{ y: -6 }}
              className="relative flex flex-col rounded-3xl bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote className="h-8 w-8 text-gold" strokeWidth={1.25} />

              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {t.text}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-[11px] text-muted">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}