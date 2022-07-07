import { useUserAgent } from "next-useragent";
import isServer from "utils/isServer";

export function useBrowser() {
  const ua = isServer() ? undefined : useUserAgent(window.navigator.userAgent);
  const browser = ua?.browser.toLowerCase();

  return {
    browser,
  };
}
