"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80";
const THUMB =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" as const },
  }),
};

const view = { once: false, amount: 0.1 };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src={HERO_BG}
        alt="Modern minimalist interior"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-overlay" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-28 pt-32 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          {/* Text */}
          <div className="lg:col-span-8">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0}
              viewport={view}
              className="inline-block rounded-full bg-glass px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-ink backdrop-blur-md"
            >
              + Fast and reliable
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={view}
              className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl"
            >
              The Art of Stunning
              <br />
              Interior Design
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={2}
              viewport={view}
              className="mt-6 max-w-md text-sm leading-relaxed text-paper sm:text-base"
            >
              Whether it&apos;s your home, office, or a commercial project, we
              are always dedicated to bringing your vision to life.
            </motion.p>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={3}
              viewport={view}
              href="#about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-glass-border bg-glass py-1.5 pl-6 pr-1.5 text-sm font-medium text-paper backdrop-blur-md"
            >
              Take Counsel
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-paper">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.a>
          </div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView="show"
            viewport={view}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row lg:col-span-4 lg:justify-end"
          >
            <div className="flex-1 rounded-3xl border border-glass-border bg-glass p-5 backdrop-blur-xl lg:max-w-[230px]">
              <p className="text-3xl font-semibold text-paper">260+</p>
              <p className="mt-1 text-xs text-paper">
                Successful Projects and Counting
              </p>
              <ul className="mt-5 space-y-1 text-xs font-medium text-paper">
                <li>Tech Specifications</li>
                <li>Design Project</li>
                <li>3D Visualisation</li>
              </ul>
            </div>

            <div className="relative hidden h-48 w-44 shrink-0 overflow-hidden rounded-3xl border border-glass-border sm:block">
              <Image
                src={THUMB}
                alt="Interior detail"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-lg"
      >
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}