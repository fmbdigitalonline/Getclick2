import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}

export const BreadcrumbSeparator = React.forwardRef<HTMLDivElement, BreadcrumbSeparatorProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn("inline-flex items-center [&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </div>
  )
);

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";