"use client";

import Image from "next/image";
import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { contact } from "@/lib/content";

const links = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Products", href: "#products" },
  { label: "Connect", href: "#connect" },
];

export default function Nav() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Boolean toggle on threshold cross - does not re-render per frame.
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-[var(--color-cream-line)] bg-[var(--color-cream)]/90 px-4 py-2.5 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_12px_40px_-12px_rgba(18,60,54,0.35)]" : "shadow-none"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5" aria-label="TINDI & CO home">
          <Image
            src="/tindi-logo.svg"
            alt="TINDI & CO"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="font-display text-lg font-extrabold tracking-tight text-[var(--color-green)]">
            TINDI &amp; CO
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-[var(--color-green)]/80 transition-colors hover:text-[var(--color-green)]"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[var(--color-green)] transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[var(--color-green)] px-4 py-2 text-sm font-semibold text-[var(--color-cream)] transition-transform duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] sm:flex"
          >
            <WhatsappLogo size={18} weight="fill" />
            Order now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full text-[var(--color-green)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-4 top-20 z-50 rounded-3xl border border-[var(--color-cream-line)] bg-[var(--color-cream)] p-3 shadow-[0_24px_60px_-20px_rgba(18,60,54,0.45)] md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-[var(--color-green)] transition-colors hover:bg-[var(--color-cream-warm)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-1">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-green)] px-4 py-3 text-base font-semibold text-[var(--color-cream)]"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Order now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
