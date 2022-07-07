import dynamic from "next/dynamic";
import React from "react";

interface NonSSRWrapperProps {
  children: React.ReactNode;
}
const NonSSRWrapper = (props: NonSSRWrapperProps) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
