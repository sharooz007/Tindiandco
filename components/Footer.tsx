import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Products", href: "#products" },
  { label: "Connect", href: "#connect" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-green-deep)] py-14 text-[var(--color-cream)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-5 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-cream)]">
            <Image src="/tindi-logo.svg" alt="TINDI & CO" width={28} height={28} className="h-7 w-7" />
          </span>
          <div>
            <p className="font-display text-lg font-extrabold tracking-tight">TINDI &amp; CO</p>
            <p className="text-sm text-[var(--color-cream)]/60">Quality today, trust forever.</p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--color-cream)]/70 transition-colors hover:text-[var(--color-cream)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-[var(--color-green-soft)] px-5 pt-6">
        <p className="text-center text-xs text-[var(--color-cream)]/50">
          © {new Date().getFullYear()} TINDI &amp; CO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
