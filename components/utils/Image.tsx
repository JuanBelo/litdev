import { ReactNode } from "react";

interface ImageProps {
  className?: string;
  srcmobile?: string;
  srctablet?: string;
  srcdesk?: string;
}

/* eslint-disable @next/next/no-img-element */

export function Image({
  className,
  srcmobile,
  srctablet,
  srcdesk,
}: ImageProps) {
  const imageClassNames = `z-0 w-full h-full object-cover absolute 
      ${className}`;
  return (
    <>
      <picture>
        <source
          className={imageClassNames}
          srcSet={srcdesk}
          media="(min-width: 1400px)"
        />

        <source
          className={imageClassNames}
          srcSet={srctablet}
          media="(min-width: 1024px)"
        />
        <source
          className={imageClassNames}
          srcSet={srcmobile}
          media="(min-width: 768px)"
        />
        <img alt="" className={imageClassNames} src={srcdesk} />
      </picture>
      {/*  {srcmobile && (
        <img
          className={`hidden sm:flex w-full h-full object-cover absolute mix-blend-overlay
      ${className}`}
          src={srcmobile}
        />
      )}

      {srctablet && (
        <img
          className={`hidden md:flex w-full h-full object-cover absolute mix-blend-overlay
      ${className}`}
          src={srctablet}
        />
      )}

      {srcdesk && (
        <img
          className={`hidden lg:flex w-full h-full object-cover absolute mix-blend-overlay
      ${className}`}
          src={srcdesk}
        />
      )} */}
    </>
  );
}
