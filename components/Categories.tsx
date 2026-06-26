"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { staggerParent, staggerChild } from "./Reveal";
import { categories, img } from "@/lib/content";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-12",
];
const heights = ["h-[24rem] sm:h-[28rem]", "h-[24rem] sm:h-[28rem]", "h-[20rem] sm:h-[24rem]"];

export default function Categories() {
  const reduce = useReducedMotion();
  return (
    <section id="products" className="bg-[var(--color-cream)] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-12">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[12ch] font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--color-green)]"
          >
            Three ways to crunch.
          </motion.h2>
        </div>

        <motion.div
          variants={reduce ? undefined : staggerParent}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-12"
        >
          {categories.map((c, i) => (
            <motion.a
              key={c.title}
              href="#connect"
              variants={reduce ? undefined : staggerChild}
              className={`group relative ${spans[i]} ${heights[i]} block overflow-hidden rounded-[1.75rem]`}
            >
              <Image
                src={img(c.img, 1300)}
                alt={c.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
              />
              {/* green scrim for legible text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-green)] via-[var(--color-green)]/35 to-transparent opacity-90" />

              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--color-cream)] sm:text-3xl">
                      {c.title}
                    </h3>
                    <p className="mt-2 max-w-[36ch] text-[var(--color-cream)]/80 transition-all duration-500 ease-[var(--ease-out-soft)] sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                      {c.blurb}
                    </p>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--color-cream)] text-[var(--color-green)] transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:rotate-45">
                    <ArrowUpRight size={22} weight="bold" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
