"use client";

import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  EnvelopeSimple,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { contact } from "@/lib/content";

const socials = [
  { Icon: WhatsappLogo, label: "WhatsApp", href: contact.whatsapp },
  { Icon: InstagramLogo, label: "Instagram", href: contact.instagram },
  { Icon: FacebookLogo, label: "Facebook", href: contact.facebook },
  { Icon: LinkedinLogo, label: "LinkedIn", href: contact.linkedin },
  { Icon: EnvelopeSimple, label: "Email", href: `mailto:${contact.email}` },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-[var(--color-green)] py-28 text-center text-[var(--color-cream)] sm:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-green-soft)]/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-3xl px-5">
        <Reveal>
          <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight">
            Ready to taste the crunch?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-[44ch] text-lg leading-relaxed text-[var(--color-cream)]/75">
            Message us to find your nearest stock, ask about the range, or place
            an order. We reply on WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-[var(--color-cream)] px-8 py-4 text-base font-semibold text-[var(--color-green)] transition-transform duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          >
            <WhatsappLogo size={20} weight="fill" />
            Order now
          </a>
          <p className="mt-4 text-sm text-[var(--color-cream)]/60">{contact.whatsappLabel}</p>
        </Reveal>

        <Reveal delay={0.24}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-[var(--color-cream)]/25 text-[var(--color-cream)] transition-all duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-green)]"
                >
                  <Icon size={20} weight="regular" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
