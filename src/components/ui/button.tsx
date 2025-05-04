import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        "bg-blue-600 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-xl transition",
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";
