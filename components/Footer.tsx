"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { fadeUp, viewport } from "@/lib/motion";
import { useEffect, useState } from "react";

const BG =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80";

const colOne = [
  { label: "About Us", href: "#about", active: true },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#" },
  { label: "Our Team", href: "#team" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const colTwo = [
  { label: "Our Projects", href: "#projects" },
  { label: "Partners", href: "#" },
  { label: "Partners Program", href: "#" },
  { label: "Affiliate Program", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Support Center", href: "#" },
];

const socials = ["Facebook", "Instagram", "YouTube", "TikTok"];

function LinkColumn({
  links,
}: {
  links: { label: string; href: string; active?: boolean }[];
}) {
  return (
    <ul className="space-y-3">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            className={`text-xs font-medium transition-colors hover:text-gold ${
              l.active ? "text-gold underline" : "text-paper"
            }`}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-dark text-paper"
    >
      {/* Background */}
      <Image
        src={BG}
        alt=""
        fill
        sizes="100vw"
        className="object-cover grayscale"
      />
      <div className="absolute inset-0 bg-footer-scrim" />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="sm:col-span-2 lg:col-span-4"
          >
            <a href="#home" className="flex items-center gap-2">
              <Gem className="h-6 w-6 text-gold" />
              <span className="text-xl font-semibold tracking-tight">stellar</span>
            </a>
            <p className="mt-6 max-w-[16rem] text-xs font-medium leading-relaxed">
              We Transform Your Vision Into Beautifully Crafted Spaces.
            </p>
            <p className="mt-5 max-w-[14rem] text-[11px] leading-relaxed text-paper/70">
              Rongo, Migori County
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            custom={1}
            className="lg:col-span-2"
          >
            <LinkColumn links={colOne} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            custom={2}
            className="lg:col-span-2"
          >
            <LinkColumn links={colTwo} />
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            custom={3}
            className="sm:col-span-2 lg:col-span-4"
          >
            <a
              href="tel:+0844560789"
              className="text-lg font-medium text-gold underline underline-offset-4"
            >
              (+254) 123 678 900
            </a>
            <a
              href="mailto:Support@example.com"
              className="mt-3 block break-all text-xl font-semibold sm:text-2xl"
            >
              info@stellar.com
            </a>

            <ul className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] text-paper/80">
              {socials.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <a href="#" className="transition-colors hover:text-gold">
                    {s}
                  </a>
                  {i < socials.length - 1 && <span aria-hidden>·</span>}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-14 border-t border-dark-line pt-6 text-center lg:mt-20">
          <p className="text-[11px] text-paper/80">
              &copy; Copyright {year}{" "}
            <span className="text-gold">Stellar</span>. All rights reserved.
          </p>
        </div>

        {/* Watermark */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="fade-bottom pointer-events-none flex justify-center overflow-hidden"
        >
          <span
            aria-hidden
            className="select-none text-[7rem] font-bold leading-[0.85] tracking-tighter text-watermark-light sm:text-[14rem] lg:text-[22rem]"
          >
            stellar
          </span>
        </motion.div>
      </div>
    </footer>
  );
}