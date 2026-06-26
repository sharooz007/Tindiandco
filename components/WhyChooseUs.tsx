"use client";

import { motion, useReducedMotion } from "motion/react";
import { staggerParent, staggerChild } from "./Reveal";
import { reasons } from "@/lib/content";

export default function WhyChooseUs() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[var(--color-cream)] py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-12 gap-y-14 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--color-green)] lg:sticky lg:top-28 lg:self-start"
        >
          What sets the crunch apart.
        </motion.h2>

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
      </div>
    </section>
  );
}
