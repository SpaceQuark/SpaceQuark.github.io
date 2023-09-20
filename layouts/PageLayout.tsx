import NavBar from "@/components/NavBar";
import React from "react";
import { PropsWithChildren } from "react";

interface PageLayoutProps {
  full?: boolean;
}

const PageLayout: React.FC<PropsWithChildren<PageLayoutProps>> = ({
  full = false,
  children,
}) => {
  return (
    <div className={"dark:bg-dark-900 w-full bg-white"}>
      <NavBar />
      <div
        className={`mx-auto flex max-w-3xl flex-col px-4 py-12 pt-16 lg:max-w-4xl ${
          full ? "min-h-screen justify-center" : "justify-between"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
