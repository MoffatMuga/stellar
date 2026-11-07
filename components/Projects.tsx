"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

type Project = {
  title: string;
  location: string;
  year: string;
  tags: [string, string];
  image: string;
};

const projects: Project[] = [
  {
    title: "Luxury Skyline",
    location: "Nyahururu, Laikipia",
    year: "2025",
    tags: ["Residential", "Single Home"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bohemian Rhapsody",
    location: "Ruiru, Kiambu",
    year: "2025",
    tags: ["Residential", "Single Home"],
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Vintage Glamour",
    location: "Ngong, Kajiado",
    year: "2025",
    tags: ["Residential", "Single Home"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Living Innovation",
    location: "Mavoko, Machakos",
    year: "2025",
    tags: ["Residential", "Apartment"],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Urban Serenity",
    location: "Naivasha, Nakuru",
    year: "2024",
    tags: ["Residential", "Penthouse"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Golden Hour Loft",
    location: "Nyeri, Nyeri",
    year: "2024",
    tags: ["Commercial", "Office"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
];

const HOUSE =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80";

const SPEED = 40; // pixels per second, raise for faster movement

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: "easeOut" as const },
  }),
};

const view = { once: false, amount: 0.3 };

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={`group w-[220px] shrink-0 pr-5 sm:w-[260px] lg:w-[300px] ${
        index % 2 === 1 ? "mt-7" : ""
      }`}
    >
      <div className="relative aspect-[5/6] w-full overflow-hidden rounded-3xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="300px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute left-3 top-3 flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-tag-border bg-tag px-2.5 py-1 text-[9px] font-medium uppercase tracking-wide text-paper backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#projects"
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-view text-xs font-medium text-paper opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
        >
          View
        </a>
      </div>

      <h3 className="mt-4 text-base font-semibold text-ink sm:text-lg">
        {project.title}
      </h3>
      <p className="mt-2 text-[11px] leading-relaxed text-muted">
        {project.location}
        <br />
        {project.year}
      </p>
    </article>
  );
}

export default function Projects() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (paused.current || reduceMotion || !trackRef.current) return;

    // The list is rendered twice, so one loop is exactly half the track width
    const loopWidth = trackRef.current.scrollWidth / 2;
    let next = x.get() - (delta / 1000) * SPEED;
    if (Math.abs(next) >= loopWidth) next += loopWidth;
    x.set(next);
  });

  const pause = () => (paused.current = true);
  const resume = () => (paused.current = false);

  return (
    <section id="projects" className="w-full overflow-x-clip bg-surface">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        {/* Heading */}
        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={view}
            className="lg:col-span-4"
          >
            <span className="inline-block rounded-full border border-line bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
              + Our projects
            </span>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={view}
              custom={1}
              className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl"
            >
              Creative <span className="text-gold">Projects That</span>
              <br />
              <span className="text-gold">Define</span> Our Style
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={view}
              custom={2}
              className="mt-6 max-w-md text-xs leading-relaxed text-muted sm:text-sm"
            >
              Our portfolio showcases a diverse range of projects, from
              beautifully crafted residential spaces to functional and stylish
              commercial interiors.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Marquee carousel (full width) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        custom={2}
        className="relative z-10 mt-12 w-full overflow-hidden pb-4"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-start"
        >
          {[...projects, ...projects].map((project, i) => (
            <ProjectCard
              key={`${project.title}-${i}`}
              project={project}
              index={i % projects.length}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Watermark + house */}
      <div className="relative -mt-4 pb-10 pt-6 sm:pt-10 lg:pt-14">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none text-[6rem] font-bold leading-none tracking-tighter text-watermark sm:text-[13rem] lg:text-[20rem]"
        >
          Interior
        </span>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto mt-16 aspect-[16/7] w-full max-w-5xl overflow-hidden rounded-3xl px-4 sm:mt-24 lg:mt-40"
        >
          <Image
            src={HOUSE}
            alt="Modern architectural house"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}