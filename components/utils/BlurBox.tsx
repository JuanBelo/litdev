import { useBrowser } from "../../hooks/useBrowser";
interface BlurBoxProps {
  children: React.ReactNode;
  className?: String;
}
export function BlurBox({ children, className }: BlurBoxProps) {
  const { browser } = useBrowser();
  const isFirefox = browser === "firefox";

  return (
    <div
      style={{
        boxShadow: "0px 4px 250px rgba(0, 0, 0, 0.5)",
      }}
      className={`z-50 w-full flex rounded-lg relative overflow-hidden justify-center items-center`}
    >
      {!isFirefox && (
        <>
          <div
            className={`h-56 w-[50rem] absolute z-10 bg-[#327691] opacity-100 right-10 top-10 rounded-full`}
          />
          <div
            className={`h-56 w-562 absolute z-10 bg-brand-litdev-500 bg-opacity-[38%] left-0 opacity-25 bottom-0 rounded-full`}
          />
          <div
            className={`h-56 w-[50rem] absolute z-10 bg-brand-litdev-500 left-20 bg-opacity-[38%] bottom-20 rounded-full rounded-r-lg`}
          />
          <div
            className={`h-56 w-[50rem] absolute z-10 bg-brand-litdev-500 left-20 bg-opacity-[38%] bottom-0 rounded-full rounded-r-lg`}
          />
        </>
      )}

      <div
        className={`bg-[#2C3745] bg-opacity-80 customblur abosulte z-50 col-span-4 md:col-span-3 flex flex-col w-full ${className}`}
      >
        <div className="my-auto">{children}</div>
      </div>
    </div>
  );
}
