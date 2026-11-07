"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gem, Menu, X, Phone, Search, LayoutGrid } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="lg:absolute bg-ink/70 mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-ink">
          <Gem className="h-6 w-6 text-gold" />
          <span className="text-xl font-semibold tracking-tight">stellar</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink transition-colors hover:text-gold-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 xl:flex">
            <Phone className="h-5 w-5 text-ink" />
            <div className="leading-tight">
              <p className="text-[10px] text-muted">Call Us Phone</p>
              <p className="text-xs font-semibold text-ink">(+480) 123 678 900</p>
            </div>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-paper transition-colors hover:bg-gold-dark sm:inline-block"
          >
            Get A Quote
          </a>

          <button
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-nav-glass text-ink backdrop-blur-md transition hover:bg-paper sm:flex"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            aria-label="Menu"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-nav-glass text-ink backdrop-blur-md transition hover:bg-paper sm:flex"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-nav-glass text-ink backdrop-blur-md lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 overflow-hidden rounded-2xl bg-paper shadow-xl lg:hidden"
          >
            <ul className="flex flex-col p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(true)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-ink hover:bg-glass"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  className="block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-paper"
                >
                  Get A Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}