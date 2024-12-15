import * as React from "react"
import { MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

export const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)

BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"