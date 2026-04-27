import Link from "next/link";
import { Container } from "./Container";

const links = [
  { label: "Work", href: "/#work", external: false },
  { label: "About", href: "/about", external: false },
  { label: "Resume", href: "https://drive.google.com/file/d/1cwFitapr33Wyhw7VkFnQf3iYhqPaoy-U/view?usp=sharing", external: true },
  { label: "Contact", href: "/#contact", external: false },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-surface/85 backdrop-blur-md">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="hidden sm:inline font-mono text-kicker uppercase text-ink hover:text-terracotta whitespace-nowrap"
        >
          Natasha Oza
        </Link>
        <ul className="flex items-center gap-5 sm:gap-7 text-small">
          {links.map((link) =>
            link.external ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center text-ink hover:text-terracotta transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative inline-flex items-center text-ink hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </Container>
    </header>
  );
}
