import React, { FC } from "react";
import SideMenu from "./side-menu";

interface PageLayoutProps {
  isShowSideMenu?: boolean;
  children?: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({
  isShowSideMenu = false,
  children,
}: PageLayoutProps) => {
  return (
    <>
      {isShowSideMenu ? <SideMenu /> : <></>}
      {children}
    </>
  );
};

export default PageLayout;
