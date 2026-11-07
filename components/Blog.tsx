"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewport } from "@/lib/motion";

const posts = [
  {
    category: "Exteriors",
    date: "May 25, 2025",
    title: "Four Ways For Creating Extra Space In Small Homes",
    text: "Modest, recently established interior design company that seeks to address a variety of topics, including...",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Lifestyle",
    date: "May 25, 2025",
    title: "Timeless Furniture Pieces Every Home Needs",
    text: "Modest, recently established interior design company that seeks to address a variety of topics, including...",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Tips & Trick",
    date: "May 25, 2025",
    title: "How Does One Go About Buying Furniture?",
    text: "Modest, recently established interior design company that seeks to address a variety of topics, including...",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
];

const WIDE = "w-56 sm:w-72 lg:w-96";
const NARROW = "w-40 sm:w-52 lg:w-64";

const rowOne = [
  { src: "photo-1565182999561-18d7dc61c393", w: WIDE },
  { src: "photo-1616486338812-3dadae4b4ace", w: NARROW },
  { src: "photo-1600210492486-724fe5c67fb0", w: WIDE },
  { src: "photo-1556909114-f6e7ad7d3136", w: NARROW },
];

const rowTwo = [
  { src: "photo-1600585154340-be6161a56a0c", w: NARROW },
  { src: "photo-1556911220-bff31c812dba", w: WIDE },
  { src: "photo-1618219908412-a29a1bb7b86e", w: NARROW },
  { src: "photo-1618221195710-dd6b41faaea6", w: WIDE },
];

type GalleryItem = { src: string; w: string };

function MarqueeRow({
  items,
  reverse = false,
  duration = 45,
}: {
  items: GalleryItem[];
  reverse?: boolean;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={
          reduceMotion
            ? undefined
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className={`relative mr-4 h-36 shrink-0 overflow-hidden rounded-3xl sm:h-44 lg:h-52 ${item.w}`}
          >
            <Image
              src={`https://images.unsplash.com/${item.src}?auto=format&fit=crop&w=800&q=80`}
              alt="Interior gallery photo"
              fill
              sizes="(min-width: 1024px) 384px, 288px"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Blog() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to your newsletter service or API route
    setSent(true);
    setEmail("");
  };

  return (
    <section id="blog" className="w-full overflow-x-clip bg-surface">
      {/* ---------- Blog ---------- */}
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-4"
          >
            <span className="inline-block rounded-full border border-line bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
              + Straight from the newsroom
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            custom={1}
            className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:col-span-8"
          >
            Take A Look At <span className="text-gold">Our Latest</span>
            <br />
            <span className="text-gold">Blog</span> &amp; Articles.
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              custom={i}
              className="group"
            >
              <a href="#blog" className="block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-medium text-paper">
                    {post.category}
                  </span>
                </div>

                <p className="mt-4 text-[10px] text-muted">
                  {post.date} &nbsp;•&nbsp; By{" "}
                  <span className="font-medium text-gold">Admin</span>
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-gold">
                  {post.title}
                </h3>
                <p className="mt-3 text-[11px] leading-relaxed text-muted">
                  {post.text}
                </p>
              </a>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ---------- Gallery ---------- */}
      <div className="relative mt-16 py-10 sm:mt-20 lg:mt-24">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[6rem] font-bold leading-none tracking-tighter text-watermark sm:text-[13rem] lg:text-[20rem]"
        >
          gallery
        </span>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 flex flex-col gap-4"
        >
          <MarqueeRow items={rowOne} duration={50} />
          <MarqueeRow items={rowTwo} reverse duration={60} />
        </motion.div>
      </div>

      {/* ---------- Newsletter ---------- */}
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 text-center sm:px-6 lg:px-8 lg:pb-28">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="inline-block rounded-full border border-line bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink"
        >
          + Subscribe to the newsletter
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          custom={1}
          className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl"
        >
          Join <span className="text-gold">Our Newsletter</span>
          <br />
          <span className="text-gold">Stay</span> Up To Date
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          custom={2}
          className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-muted sm:text-sm"
        >
          Join our newsletter. Learn something new, gain access to exclusive
          content, and stay informed with the latest updates in the industry.
        </motion.p>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          custom={3}
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md items-center gap-3 border-b border-gold pb-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSent(false);
            }}
            placeholder="Email address..."
            aria-label="Email address"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
          />
          <motion.button
            type="submit"
            aria-label="Subscribe"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-paper"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.button>
        </motion.form>

        {sent && (
          <p className="mt-4 text-xs font-medium text-gold">
            Thanks for subscribing!
          </p>
        )}
      </div>
    </section>
  );
}