import type { ComponentPropsWithoutRef } from "react";

type KickerLabelProps = ComponentPropsWithoutRef<"span"> & {
  tone?: "ink" | "terracotta" | "cerulean";
};

const toneClass = {
  ink: "text-ink-soft",
  terracotta: "text-terracotta",
  cerulean: "text-cerulean",
} as const;

export function KickerLabel({
  tone = "ink",
  className = "",
  ...rest
}: KickerLabelProps) {
  return (
    <span
      className={`font-mono text-kicker uppercase ${toneClass[tone]} ${className}`}
      {...rest}
    />
  );
}
