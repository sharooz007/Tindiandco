import { Asterisk } from "@phosphor-icons/react/dist/ssr";

const phrases = [
  "Quality today",
  "Trust forever",
  "Fry or air fry",
  "Cook from frozen",
  "No preservatives",
];

export default function Marquee() {
  // One looping band, doubled for a seamless wrap.
  const items = [...phrases, ...phrases];
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden border-y border-[var(--color-green-soft)] bg-[var(--color-green)] py-5"
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-semibold uppercase tracking-tight text-[var(--color-cream)] sm:text-3xl">
              {p}
            </span>
            <Asterisk size={22} weight="bold" className="text-[var(--color-cream)]/60" />
          </div>
        ))}
      </div>
    </section>
  );
}
