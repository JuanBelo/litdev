import { useBrowser } from "../../hooks/useBrowser";
interface BlurBoxProps {
  children: React.ReactNode;
  className?: String;
}
export function BlurBackGround({ children, className }: BlurBoxProps) {
  const { browser } = useBrowser();
  const isFirefox = browser === "firefox";

  return (
    <section
      style={{
        position: "relative",
        background:
          "linear-gradient(50deg, #161c2460, #161c2460 100%), url(/assets/images/HeroBackGround.png) no-repeat 49% center",
        backgroundSize: "cover",
      }}
      className="h-[100vh] z-0 relative"
    >
      <div
        className={`z-50 w-full flex absolute overflow-hidden justify-center items-center`}
      >
        {!isFirefox && (
          <>
            <div
              className={`h-56 w-[50rem] absolute z-10 bg-[#327691] opacity-100 right-10 top-10 rounded-full`}
            />
            <div
              className={`h-56 w-562 absolute z-10 bg-[#50fa7b] bg-opacity-[38%] left-0 opacity-50 bottom-0 rounded-full`}
            />
            <div
              className={`h-56 w-[50rem] absolute z-10 bg-[#50fa7b] left-20 bg-opacity-[70%] bottom-20 rounded-full rounded-r-lg`}
            />
            <div
              className={`h-56 w-[50rem] absolute z-10 bg-[#633bbc] bg-opacity-[90%] bottom-0 left-0 rounded-full rounded-r-lg`}
            />
          </>
        )}

        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(27, 34, 44, 0.5) 0%, rgba(27, 34, 44, 0.557292) 0.38%, rgba(27, 34, 44, 0.9000) 50.41%)",
          }}
          className={`bg-opacity-90 customblur abosulte z-50 w-full ${className}`}
        >
          <div className="">{children}</div>
        </div>
      </div>
    </section>
  );
}
