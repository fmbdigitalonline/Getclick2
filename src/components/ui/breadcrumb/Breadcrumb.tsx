import * as React from "react";
import { cn } from "@/lib/utils";

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  separator?: React.ReactNode;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => (
    <nav 
      ref={ref} 
      aria-label="breadcrumb"
      className={cn("", className)} 
      {...props} 
    />
  )
);

Breadcrumb.displayName = "Breadcrumb";