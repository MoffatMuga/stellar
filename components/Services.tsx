"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Residential Interior Design",
    caption:
      "Tailored design services for private homes, including room makeovers and complete home transformations.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial Interior Design",
    caption:
      "Functional, brand-driven workspaces, retail and hospitality interiors that leave a lasting impression.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Interior Design Consultation",
    caption:
      "Expert one-on-one guidance on layouts, materials and styling to help you make confident decisions.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Outdoor & Landscape Design",
    caption:
      "Gardens, patios and outdoor living areas that extend your interior style into the open air.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Renovation And Remodeling",
    caption:
      "Full renovations managed from concept to completion, giving existing spaces a fresh new life.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

const stats = [
  {
    value: 2013,
    suffix: "",
    count: false, // a year, so it stays static
    label: "Years Experience",
    text: "Improving homes with expert craftsmanship for years",
  },
  {
    value: 190,
    suffix: "+",
    count: true,
    label: "Projects Completed",
    text: "Over 250 successful projects delivered with quality and care",
  },
  {
    value: 260,
    suffix: "+",
    count: true,
    label: "Skilled Tradespeople",
    text: "Our team of 30 experts ensures top-quality results",
  },
  {
    value: 328,
    suffix: "+",
    count: true,
    label: "Client Satisfaction",
    text: "All of our clients are satisfied with our work and service",
  },
];

const steps = [
  {
    no: "01",
    title: "Initial Consultation",
    text: "We begin by understanding your vision, goals, and needs, followed by Antra.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    offset: "lg:mt-0",
  },
  {
    no: "02",
    title: "Design & Planning",
    text: "Our team creates detailed designs that reflect your requirements.",
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80",
    offset: "lg:mt-10",
  },
  {
    no: "03",
    title: "Implementation",
    text: "With carefully selected contractors, we manage every phase.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    offset: "lg:mt-20",
  },
  {
    no: "04",
    title: "Project Handover",
    text: "Upon completion, we conduct a thorough review, making sure all details.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    offset: "lg:mt-28",
  },
];

const FLOORPLAN =
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: "easeOut" as const },
  }),
};

const view = { once: false, amount: 0.3 };

function CountUp({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return () => controls.stop();
    }
    count.set(0); // reset when out of view so it replays
  }, [inView, to, duration, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="w-full overflow-x-clip bg-surface">
      {/* ---------- Top: heading, list, stats ---------- */}
      <div className="relative">
        {/* Watermark (clipped in its own wrapper so the floor plan can overlap) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span
            aria-hidden
            className="absolute -bottom-6 -left-6 select-none text-[10rem] font-bold leading-none tracking-tighter text-watermark sm:text-[18rem] lg:text-[24rem]"
          >
            stellar
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
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
                + Our services
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
                Explore Our <span className="text-gold">Comprehensive</span>
                <br />
                <span className="text-gold">Interior Design</span> Services
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={view}
                custom={2}
                className="mt-6 max-w-lg text-xs leading-relaxed text-muted sm:text-sm"
              >
                We specialize in transforming visions into reality. Explore our
                portfolio of innovative architectural and interior design
                projects crafted with precision.
              </motion.p>
            </div>
          </div>

          {/* Image + list */}
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={view}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:col-span-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[active].image}
                    alt={services[active].title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 max-w-xs rounded-2xl bg-card-glass p-4 backdrop-blur-md sm:bottom-6 sm:left-6">
                    <p className="text-xs font-medium leading-relaxed text-paper">
                      {services[active].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={view}
              custom={1}
              className="border-t border-ink lg:col-span-6"
            >
              {services.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.title} className="border-b border-line">
                    <button
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="flex w-full items-center gap-4 py-4 text-left"
                    >
                      <span className="w-5 text-[10px] text-muted">
                        0{i + 1}
                      </span>
                      <span
                        className={`flex-1 text-base font-medium transition-colors sm:text-xl ${
                          isActive ? "text-gold" : "text-ink"
                        }`}
                      >
                        {s.title}
                      </span>
                      {isActive ? (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-paper">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-ink" />
                      )}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={view}
                custom={i}
              >
                <p className="text-3xl font-semibold text-ink sm:text-4xl">
                    {s.count ? (
                        <CountUp to={s.value} suffix={s.suffix} />
                    ) : (
                        s.value
                    )}
                </p>
                <div className="mt-4 border-t border-line pt-4">
                  <p className="text-xs font-semibold text-ink sm:text-sm">
                    {s.label}
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floor plan (overlaps into the next band) */}
        <div className="relative z-10 mx-auto -mb-10 max-w-7xl px-4 sm:px-6 lg:-mb-40 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative ml-auto aspect-[16/10] w-full overflow-hidden rounded-3xl lg:w-3/5"
          >
            <Image
              src={FLOORPLAN}
              alt="3D floor plan of a modern apartment"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* ---------- Bottom: process ---------- */}
      <div className="relative bg-band pb-16 pt-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={view}
                className="inline-block rounded-full border border-line bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink"
              >
                + How we work
              </motion.span>
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={view}
                custom={1}
                className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl"
              >
                Description <span className="text-gold">Architecture Process</span>{" "}
                For Exceptional Results.
              </motion.h3>
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={view}
              custom={2}
              className="max-w-xs text-xs leading-relaxed text-muted lg:col-span-6 lg:col-start-8 lg:self-end"
            >
              Our process is alive - adapting, refining, and growing with your
              vision. Always. Like artists with a blank canvas, we transform
              rooms into living works of art.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
            {steps.map((step, i) => (
              <motion.article
                key={step.no}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={view}
                custom={i}
                whileHover={{ y: -6 }}
                className={`relative overflow-hidden rounded-3xl bg-card p-3 shadow-sm transition-shadow hover:shadow-lg ${step.offset}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-2 pb-3 pt-4">
                  <h4 className="text-sm font-semibold text-ink">
                    {step.no}. {step.title}
                  </h4>
                  <p className="mt-2 max-w-[14rem] text-[11px] leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-1 right-3 text-5xl font-semibold text-watermark"
                >
                  {step.no}
                </span>
              </motion.article>
            ))}
          </div>

          <p className="mt-16 text-center text-[11px] text-muted">
            We&apos;ve been working hard to impress you.{" "}
            <a href="#contact" className="font-medium text-gold underline">
              Start Yours Today
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}