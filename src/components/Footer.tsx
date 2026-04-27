import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-hairline">
      <Container className="flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-kicker uppercase text-ink-soft">
          © {year} Natasha Oza
        </p>
        <p className="font-mono text-kicker uppercase text-ink-soft">
          <a
            href="mailto:natasha.oza96@gmail.com"
            className="hover:text-terracotta transition-colors"
          >
            natasha.oza96@gmail.com
          </a>
          <span className="mx-3 text-hairline">·</span>
          <a
            href="https://www.linkedin.com/in/natasha-oza/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </Container>
    </footer>
  );
}
