"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const sheetVariants = cva(
  "fixed z-50 bg-background p-6 shadow-lg transition ease-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b",
        bottom: "inset-x-0 bottom-0 border-t",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
      },
    },
    defaultVariants: { side: "right" },
  }
)

export const Sheet = SheetPrimitive.Root
export const SheetTrigger = SheetPrimitive.Trigger

export function SheetContent({ side = "right", className, children, ...props }) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 bg-black/40" />
      <SheetPrimitive.Content
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        <div className="absolute right-4 top-4">
          <SheetPrimitive.Close>
            <X className="h-5 w-5" />
          </SheetPrimitive.Close>
        </div>

        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
}
