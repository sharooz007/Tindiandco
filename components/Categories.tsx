"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
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
  const wideCardRef = useRef<HTMLAnchorElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerBottom, setHeaderBottom] = useState(178);

  useEffect(() => {
    if (!headerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      // Height of the sticky header itself
      const height = entries[0].borderBoxSize[0].blockSize;
      // Cutouts hang 28px below it
      setHeaderBottom(height + 28);
    });
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);
  
  // Track when the wide card approaches the sticky header
  // Instantly toggle the middle divider at the exact pixel it crosses the cutouts
  const { scrollYProgress } = useScroll({
    target: wideCardRef,
    offset: [`start ${headerBottom + 1}px`, `start ${headerBottom}px`]
  });
  
  const middleDividerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="products" className="bg-[var(--color-cream)] pt-24 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div ref={headerRef} className="pointer-events-none sticky top-0 z-20 -mx-5 -mt-[90px] mb-7 pt-[90px] bg-[var(--color-cream)]">
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-2 sm:pb-7">
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[12ch] font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--color-green)]"
            >
              Three ways to crunch.
            </motion.h2>

            {/* Dynamic Arch Cutouts */}
            <div className="absolute -bottom-[1.75rem] left-5 right-5 grid h-[1.75rem] grid-cols-1 gap-7 lg:grid-cols-12">
              
              {/* Mobile Single Card Arch */}
              <div className="relative h-full w-full lg:hidden">
                <div className="absolute right-[100%] top-0 h-full w-5 bg-[var(--color-cream)]" />
                <div className="absolute left-[100%] top-0 h-full w-5 bg-[var(--color-cream)]" />
                <div className="absolute left-0 top-0 h-full w-[1.75rem]" style={{ background: "radial-gradient(circle at bottom right, transparent 1.75rem, var(--color-cream) 1.75rem)" }} />
                <div className="absolute right-0 top-0 h-full w-[1.75rem]" style={{ background: "radial-gradient(circle at bottom left, transparent 1.75rem, var(--color-cream) 1.75rem)" }} />
              </div>

              {/* Desktop Left Card Arch */}
              <div className="hidden h-full w-full lg:block lg:col-span-7 relative">
                <div className="absolute right-[100%] top-0 h-full w-5 bg-[var(--color-cream)]" />
                <div className="absolute left-0 top-0 h-full w-[1.75rem]" style={{ background: "radial-gradient(circle at bottom right, transparent 1.75rem, var(--color-cream) 1.75rem)" }} />
                
                {/* Dynamic Inner corner & gap block */}
                <motion.div style={{ opacity: middleDividerOpacity }} className="absolute right-0 top-0 h-full z-10">
                  <div className="absolute right-0 top-0 h-full w-[1.75rem]" style={{ background: "radial-gradient(circle at bottom left, transparent 1.75rem, var(--color-cream) 1.75rem)" }} />
                  <div className="absolute -right-7 top-0 h-full w-7 bg-[var(--color-cream)]" />
                </motion.div>
              </div>
              
              {/* Desktop Right Card Arch */}
              <div className="hidden h-full w-full lg:block lg:col-span-5 relative">
                {/* Dynamic Inner corner */}
                <motion.div style={{ opacity: middleDividerOpacity }} className="absolute left-0 top-0 h-full z-10">
                  <div className="absolute left-0 top-0 h-full w-[1.75rem]" style={{ background: "radial-gradient(circle at bottom right, transparent 1.75rem, var(--color-cream) 1.75rem)" }} />
                </motion.div>

                <div className="absolute right-0 top-0 h-full w-[1.75rem]" style={{ background: "radial-gradient(circle at bottom left, transparent 1.75rem, var(--color-cream) 1.75rem)" }} />
                <div className="absolute left-[100%] top-0 h-full w-5 bg-[var(--color-cream)]" />
              </div>
              
            </div>
          </div>
        </div>

        <motion.div
          variants={reduce ? undefined : staggerParent}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-7 lg:grid-cols-12"
        >
          {categories.map((c, i) => (
            <motion.a
              key={c.title}
              href="#connect"
              ref={i === 2 ? wideCardRef : undefined}
              variants={reduce ? undefined : staggerChild}
              className={`group relative ${spans[i]} ${heights[i]} block overflow-hidden rounded-[1.75rem]`}
            >
              <Image
                src={img(c.img, 1300)}
                alt={c.alt}
                fill
                priority
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
        
        {/* Spacer to extend the sticky track, allowing cards to fully hide before un-sticking */}
        <div className="h-24 sm:h-32" aria-hidden="true" />
      </div>
    </section>
  );
}
