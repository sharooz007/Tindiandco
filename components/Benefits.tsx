"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { benefits, img } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  // Default false = reduced-motion / SSR safe: a plain horizontal scroll strip.
  const [enhance, setEnhance] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mql.matches) setEnhance(true);
  }, []);

  useEffect(() => {
    if (!enhance || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = () => track.current!.scrollWidth - window.innerWidth;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top", // pin once the section top reaches viewport top
          end: () => `+=${distance() * 1.25}`, // extra 25% scroll length for the pause
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track.current, {
        x: () => -distance(),
        ease: "none",
        duration: 1,
      })
      .to({}, { duration: 0.25 }); // 25% pause at the end holding the last card in view
    }, wrap);
    return () => ctx.revert();
  }, [enhance]);

  return (
    <section
      ref={wrap}
      className="relative overflow-hidden bg-[var(--color-green)] text-[var(--color-cream)]"
    >
      <div
        ref={track}
        className={`flex h-[100dvh] items-center gap-6 px-6 ${
          enhance ? "w-max" : "w-full overflow-x-auto snap-x snap-mandatory"
        }`}
      >
        {/* Intro panel */}
        <div className="flex h-[70vh] w-[85vw] shrink-0 snap-start flex-col justify-center pr-6 sm:w-[60vw] lg:w-[36vw]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-cream)]/60">
            Why frozen works
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[0.95] tracking-tight">
            Crisp on demand, every time.
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-[var(--color-cream)]/75">
            Four reasons our snacks earn a permanent spot in your freezer.
            {enhance ? " Keep scrolling." : " Swipe across."}
          </p>
        </div>

        {/* Benefit panels */}
        {benefits.map((b, i) => (
          <article
            key={b.title}
            className="flex h-[70vh] w-[85vw] shrink-0 snap-start flex-col overflow-hidden rounded-[2rem] bg-[var(--color-cream)] text-[var(--color-green)] sm:w-[58vw] lg:w-[34vw]"
          >
            <div className="relative h-1/2 w-full overflow-hidden">
              <Image
                src={img(b.img, 900)}
                alt={b.alt}
                fill
                sizes="(max-width: 1024px) 85vw, 34vw"
                className="object-cover"
              />
              <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-[var(--color-cream)] font-display text-lg font-bold text-[var(--color-green)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-center p-7">
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {b.title}
              </h3>
              <p className="mt-3 max-w-[38ch] text-base leading-relaxed text-[var(--color-green)]/70">
                {b.blurb}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
