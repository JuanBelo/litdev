import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: String;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={`border-b-[1px] border-gray-700 h-full sm:py-24 py-20 ${className}`}
    >
      {children}
    </section>
  );
}
