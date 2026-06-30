"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

export default function ParentCompany() {
  return (
    <section className="bg-[var(--color-cream)] py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-5 text-center md:grid-cols-2 md:gap-16 md:text-left">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[0.98] tracking-tight text-[var(--color-green)]">
            A Fatheel Group company.
          </h2>
          <p className="mx-auto mt-5 max-w-[48ch] leading-relaxed text-[var(--color-green)]/70 md:mx-0">
            TINDI &amp; CO is a brand of Fatheel Group Pvt Ltd, carrying the same
            commitment to quality, trust and everyday value the group is built
            on.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-center md:items-end">
          {/* hairline ties the logo to the copy on mobile */}
          <span className="mb-7 h-px w-16 bg-[var(--color-green)]/20 md:hidden" />
          <Image
            src="/Fatheel.svg"
            alt="Fatheel Group Pvt Ltd"
            width={260}
            height={164}
            className="h-auto w-44 transition-transform duration-500 ease-[var(--ease-out-soft)] hover:scale-[1.04] sm:w-64"
          />
        </Reveal>
      </div>
    </section>
  );
}
