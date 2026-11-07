"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  Armchair,
  Lightbulb,
  ClipboardList,
  Check,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80";

type Card = { title: string; text: string; icon: LucideIcon };

const cards: Card[] = [
  {
    title: "Architectural Design",
    text: "Dream it, we'll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
    icon: Compass,
  },
  {
    title: "Interior Design & Planning",
    text: "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
    icon: Armchair,
  },
  {
    title: "Consulting Services",
    text: "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
    icon: Lightbulb,
  },
  {
    title: "Project Management",
    text: "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free - so you can sit back and watch the magic happen.",
    icon: ClipboardList,
  },
];

const checks = [
  "Latest Technologies",
  "High-Quality Designs",
  "5 Years Warranty",
  "Residential Design",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="w-full overflow-x-clip">
      {/* ---------- Light intro + cards ---------- */}
      <div className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="lg:col-span-4"
            >
              <span className="inline-block rounded-full border border-line bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
                + Who we are
              </span>
            </motion.div>

            <div className="lg:col-span-8">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                custom={1}
                className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl"
              >
                Experience <span className="text-gold">The Art Of</span>
                <br />
                <span className="text-gold">Interior</span> Design
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                custom={2}
                className="mt-6 max-w-md text-xs leading-relaxed text-muted sm:text-sm"
              >
                We specialize in transforming visions into reality. Explore our
                portfolio of innovative architectural and interior design
                projects crafted with precision.
              </motion.p>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  custom={i}
                  whileHover={{ y: -6 }}
                  className="flex flex-col rounded-3xl bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-snug text-ink">
                      {card.title}
                    </h3>
                    <Icon className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.25} />
                  </div>
                  <div className="mt-10 border-t border-line pt-5">
                    <p className="text-xs leading-relaxed text-muted">
                      {card.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- Dark block ---------- */}
      <div className="relative overflow-hidden bg-dark py-16 sm:py-20 lg:py-24">
        {/* Watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-10 left-0 select-none text-[9rem] font-bold leading-none tracking-tighter text-paper/5 sm:text-[16rem] lg:text-[22rem]"
        >
          stellar
        </span>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Text */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="inline-block rounded-full border border-dark-line px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper"
            >
              + Started in 1991
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              custom={1}
              className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl"
            >
              Where Spaces
              <br />
              Inspire, And <span className="text-gold">Design</span>
              <br />
              <span className="text-gold">Comes Alive</span>
            </motion.h2>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              custom={2}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {checks.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-paper"
                >
                  <Check className="h-4 w-4 text-gold" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              custom={3}
              className="mt-6 max-w-sm text-xs leading-relaxed text-paper/80 sm:text-sm"
            >
              Whether it&apos;s your home, office, or a commercial project, we
              are always dedicated to bringing your vision to life. Our numbers
              speak better than words:
            </motion.p>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              custom={4}
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-dark-line py-1.5 pl-6 pr-1.5 text-sm font-medium text-paper"
            >
              More About Us
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-paper">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.a>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
          >
            <Image
              src={ABOUT_IMG}
              alt="Elegant living room interior"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}