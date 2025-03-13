"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-white shadow hover:bg-neutral-800 border border-white/10",
        destructive:
          "bg-red-900/30 text-white shadow-sm hover:bg-red-900/50 border border-red-800/50",
        outline:
          "border border-white/20 bg-transparent shadow-sm hover:bg-white/5 text-white",
        secondary:
          "bg-white/5 text-white shadow-sm hover:bg-white/10 border border-white/10",
        ghost:
          "hover:bg-white/5 text-white",
        link: "text-white underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-neutral-800 to-neutral-900 text-white shadow-lg hover:from-neutral-700 hover:to-neutral-800 border border-white/10 hover:shadow-white/5 transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-7 sm:h-8 rounded-md px-2 sm:px-3 text-xs",
        lg: "h-10 sm:h-11 md:h-12 rounded-lg px-4 sm:px-6 md:px-8 text-sm sm:text-base",
        icon: "h-8 w-8 sm:h-9 sm:w-9",
        responsive: "h-9 sm:h-10 md:h-11 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 