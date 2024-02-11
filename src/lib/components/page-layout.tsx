import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import SidebarMenu from "./sidebar-menu";
import { FaOpencart, FaFileInvoiceDollar } from "react-icons/fa6";

const APP_MENU: MenuItem[] = [
  {
    id: 1,
    title: "Orders",
    icon: <FaOpencart />,
  },
  {
    id: 2,
    title: "Invoices",
    icon: <FaFileInvoiceDollar />,
  },
];

interface PageLayoutProps {
  isShowSideMenu?: boolean;
  children?: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({
  isShowSideMenu = false,
  children,
}: PageLayoutProps) => {
  return (
    <Row className="clearfix">
      {isShowSideMenu && (
        <Col md={3} className="bg-primary">
          <SidebarMenu menuItems={APP_MENU} />
        </Col>
      )}
      <Col>{children}</Col>
    </Row>
  );
};

export default PageLayout;
