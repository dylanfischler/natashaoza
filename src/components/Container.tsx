import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  as?: "div" | "section" | "header" | "footer" | "nav" | "main" | "article";
};

export function Container({
  as: Tag = "div",
  className = "",
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-20 ${className}`}
      {...rest}
    />
  );
}
