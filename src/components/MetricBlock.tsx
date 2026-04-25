"use client";

import { useEffect, useRef, useState } from "react";

type MetricBlockProps = {
  from?: number;
  to: number;
  suffix?: string;
  label: string;
  durationMs?: number;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function MetricBlock({
  from,
  to,
  suffix = "",
  label,
  durationMs = 1100,
  className = "",
}: MetricBlockProps) {
  const [value, setValue] = useState(from ?? 0);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduced) {
      setValue(to);
      animatedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const start = performance.now();
            const startVal = from ?? 0;
            const delta = to - startVal;
            const tick = (now: number) => {
              const elapsed = Math.min(1, (now - start) / durationMs);
              setValue(Math.round(startVal + delta * easeOutCubic(elapsed)));
              if (elapsed < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [from, to, durationMs, reduced]);

  const showFromPrefix = typeof from === "number";

  return (
    <div ref={ref} className={`flex flex-col gap-2 ${className}`}>
      <div className="font-mono text-display-3 text-terracotta tabular-nums">
        {showFromPrefix && (
          <span className="text-ink-soft">
            {from}
            {suffix}{" "}
            <span aria-hidden="true">→</span>{" "}
          </span>
        )}
        <span>
          {value}
          {suffix}
        </span>
      </div>
      <span className="font-mono text-kicker uppercase text-ink-soft">
        {label}
      </span>
    </div>
  );
}
