import React, { FC } from "react";
import SideMenu from "./side-menu";

interface PageLayoutProps {
  isShowSideMenu?: boolean;
}

const PageLayout: FC<PageLayoutProps> = ({
  isShowSideMenu = false,
}: PageLayoutProps) => {
  return isShowSideMenu ? <SideMenu /> : <></>;
};

export default PageLayout;
