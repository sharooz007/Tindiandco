"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { heroFloats, img } from "@/lib/content";

const FLOAT_POS = [
  "left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 sm:h-[25rem] sm:w-[25rem] lg:h-[28rem] lg:w-[28rem]",
  "right-0 top-2 h-28 w-28 sm:h-36 sm:w-36",
  "left-0 bottom-6 h-32 w-32 sm:h-40 sm:w-40",
  "right-6 bottom-0 h-24 w-24 sm:h-28 sm:w-28",
];
const FLOAT_DEPTH = [26, -34, 18, -22];

function Float({
  sx,
  sy,
  index,
  reduce,
}: {
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  index: number;
  reduce: boolean;
}) {
  const d = FLOAT_DEPTH[index];
  const f = heroFloats[index];
  const tx = useTransform(sx, [-0.5, 0.5], [-d, d]);
  const ty = useTransform(sy, [-0.5, 0.5], [-d, d]);
  return (
    <motion.div
      style={reduce ? undefined : { x: tx, y: ty }}
      initial={reduce ? false : { opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${FLOAT_POS[index]} ${
        index === 0
          ? ""
          : "overflow-hidden rounded-full border-4 border-[var(--color-cream)] shadow-[0_24px_60px_-20px_rgba(18,60,54,0.45)]"
      }`}
    >
      <Image
        src={img(f.id, 700)}
        alt={f.alt}
        fill
        sizes="(max-width: 768px) 60vw, 30vw"
        className={index === 0 ? "object-contain" : "object-cover"}
        priority={index === 0}
      />
    </motion.div>
  );
}

const headline = ["Bring", "the", "crunch", "home."];

export default function Hero() {
  const reduce = useReducedMotion();

  // Pointer parallax - motion values only, never React state per frame.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });

  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      id="home"
      onPointerMove={onMove}
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--color-cream)] pt-28 pb-16"
    >
      {/* soft depth wash, brand green only */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-[var(--color-green)]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[var(--color-green)]/[0.05] blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="relative z-10">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-green)]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]"
          >
            The crunch side of snacks
          </motion.p>

          <h1 className="font-display text-[clamp(3.2rem,9vw,6.2rem)] font-extrabold leading-[0.92] tracking-tight text-[var(--color-green)]">
            {headline.map((word, i) => (
              <span key={word} className="mr-[0.28ch] inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className={`inline-block ${word === "crunch" ? "italic pr-[0.1em]" : ""}`}
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + i * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-[46ch] text-lg leading-relaxed text-[var(--color-green)]/75"
          >
            Ready-to-cook frozen snacks and crispy takeaway favourites, sealed
            fresh and built for the perfect bite.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-7 py-3.5 text-base font-semibold text-[var(--color-cream)] transition-transform duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              See the snacks
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-green)]/25 px-7 py-3.5 text-base font-semibold text-[var(--color-green)] transition-colors duration-200 hover:bg-[var(--color-green)]/5"
            >
              Our story
            </a>
          </motion.div>
        </div>

        {/* Floating food cluster */}
        <div className="relative h-[24rem] sm:h-[30rem] lg:h-[34rem]">
          {heroFloats.map((f, i) => (
            <Float key={f.id} sx={sx} sy={sy} index={i} reduce={!!reduce} />
          ))}

          {/* slow-spinning brand badge */}
          <SpinBadge reduce={!!reduce} sx={sx} sy={sy} />
        </div>
      </div>
    </section>
  );
}

function SpinBadge({ reduce, sx, sy }: { reduce: boolean; sx: MotionValue<number>; sy: MotionValue<number> }) {
  const tx = useTransform(sx, [-0.5, 0.5], [-35, 35]);
  const ty = useTransform(sy, [-0.5, 0.5], [-35, 35]);

  return (
    <motion.div
      style={reduce ? undefined : { x: tx, y: ty }}
      initial={reduce ? false : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="absolute -left-2 top-2 z-20 h-24 w-24 sm:h-28 sm:w-28 hover:scale-105 transition-transform"
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        style={{
          animation: reduce ? "none" : "spin 18s linear infinite",
        }}
      >
        <defs>
          <path
            id="badge-curve"
            d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
          />
        </defs>
        <circle cx="100" cy="100" r="92" fill="var(--color-green)" />
        <text
          fill="var(--color-cream)"
          fontSize="17"
          fontWeight="700"
          letterSpacing="3"
          style={{ fontFamily: "var(--font-display)", textTransform: "uppercase" }}
        >
          <textPath href="#badge-curve" startOffset="0">
            Quality today · Trust forever · Quality today ·
          </textPath>
        </text>
      </svg>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </motion.div>
  );
}
