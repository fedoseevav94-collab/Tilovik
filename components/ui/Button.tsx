import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  children: ReactNode;
};

const variants = {
  primary: "bg-[#C8A96A] text-neutral-950 hover:bg-[#d9bd82]",
  secondary: "bg-white text-neutral-950 hover:bg-[#F7F4EB]",
  outline: "border border-[#C8A96A]/50 bg-transparent text-current hover:bg-[#C8A96A]/10",
  ghost: "bg-transparent text-current hover:bg-black/5",
  dark: "bg-[#26311F] text-white hover:bg-[#3F4A2F]"
};

export function Button({ href, variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
