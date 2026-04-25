type HairlineProps = {
  className?: string;
};

export function Hairline({ className = "" }: HairlineProps) {
  return (
    <div
      role="presentation"
      className={`h-px w-full bg-hairline ${className}`}
    />
  );
}
