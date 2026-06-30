"use client";

import { motion, useReducedMotion } from "motion/react";
import { staggerParent, staggerChild } from "./Reveal";
import { reasons } from "@/lib/content";

export default function WhyChooseUs() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[var(--color-cream)] pt-24 pb-0 sm:pt-32 lg:pb-32">
      <div className="mx-auto block w-full max-w-6xl px-5 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-x-12">
        <div className="pointer-events-none sticky top-0 z-20 -mx-5 -mt-[90px] mb-7 bg-[var(--color-cream)] pt-[90px] lg:mb-0 lg:top-28 lg:self-start lg:mx-0 lg:-mt-0 lg:bg-transparent lg:pt-0">
          <div className="px-5 pb-7 lg:px-0 lg:pb-0">
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--color-green)]"
            >
              What sets the crunch apart.
            </motion.h2>
          </div>
        </div>

        <motion.div
          variants={reduce ? undefined : staggerParent}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2"
        >
          {reasons.map((r) => (
            <motion.div key={r.no} variants={reduce ? undefined : staggerChild}>
              <div className="h-1 w-10 rounded-full bg-[var(--color-green)]/30" />
              <span className="mt-4 block font-display text-sm font-bold tracking-widest text-[var(--color-green)]/45">
                {r.no}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[var(--color-green)]">
                {r.title}
              </h3>
              <p className="mt-3 max-w-[34ch] leading-relaxed text-[var(--color-green)]/70">
                {r.blurb}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Spacer for mobile to allow all reasons to scroll fully behind the sticky header before the container ends */}
        <div className="h-[250px] lg:hidden" aria-hidden="true" />
      </div>
    </section>
  );
}
