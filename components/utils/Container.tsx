import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: String;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`xl:px-0 lg:px-6 md:px-6 px-8 max-w-6xl m-auto ${className} relative`}
    >
      {children}
    </div>
  );
}
