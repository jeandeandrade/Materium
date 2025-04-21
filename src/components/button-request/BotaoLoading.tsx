"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BotaoLoadingProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "success" | "error" | "warning" | "ghost";
  size?: "sm" | "md" | "lg";
  loadingText?: string;
}

export default function BotaoLoading({
  isLoading,
  children,
  icon,
  className,
  disabled,
  variant = "default",
  size = "md",
  loadingText = "Carregando...",
  ...rest
}: BotaoLoadingProps) {
  const baseStyles =
    "w-full border-2 p-3 rounded-full text-sm tracking-wide font-semibold flex items-center justify-center gap-2 transition";

  const variantStyles: Record<string, string> = {
    default:
      "border-zinc-300 bg-blue-300 text-zinc-600 hover:bg-blue-400 hover:text-zinc-700",
    success: "border-green-300 bg-green-400 text-white hover:bg-green-500",
    error: "border-red-300 bg-red-400 text-white hover:bg-red-500",
    warning: "border-yellow-300 bg-yellow-300 text-black hover:bg-yellow-400",
    ghost: "border-transparent bg-transparent text-zinc-700 hover:bg-zinc-100",
  };

  const sizeStyles: Record<string, string> = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-sm",
    lg: "py-4 px-8 text-base",
  };

  return (
    <button
      aria-busy={isLoading}
      aria-disabled={isLoading || disabled}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        isLoading ? "pointer-events-none" : "",
        className
      )}
      {...rest}
    >
      {isLoading ? (
        <>
          <div
            className={cn(
              "animate-spin rounded-full h-4 w-4 border-2 border-t-transparent",
              variant === "default" && "border-blue-500",
              variant === "success" && "border-white",
              variant === "error" && "border-white",
              variant === "warning" && "border-black",
              variant === "ghost" && "border-zinc-500"
            )}
          />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {icon && <span className="mr-1">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}
