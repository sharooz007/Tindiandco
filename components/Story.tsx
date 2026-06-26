"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Reveal } from "./Reveal";
import { img, story } from "@/lib/content";

export default function Story() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="story"
      ref={ref}
      className="relative overflow-hidden bg-[var(--color-green)] py-24 text-[var(--color-cream)] sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal y={40} className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--color-green-soft)]">
            <motion.div style={reduce ? undefined : { y: imgY }} className="absolute inset-[-8%]">
              <Image
                src={img(story.storyImg, 1100)}
                alt={story.storyAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-cream)]/60">
              Our story
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
              Bringing the crunch to every home.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-[var(--color-cream)]/80">
              TINDI &amp; CO is a modern retail brand built around the finest
              frozen foods and snacks. The name <strong className="font-semibold text-[var(--color-cream)]">Tindi</strong> comes
              from Kannada, where it simply means snack, and that is exactly
              what we set out to do well.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-[var(--color-cream)]/80">
              A carefully chosen range of ready-to-cook frozen products and
              crispy snacks, through our stores and online. Every bite should
              carry freshness, taste and a little happiness.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="text-[var(--color-cream)]">Quality today,</span>
              <span className="italic text-[var(--color-cream)]/55">trust forever.</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
