import React, { FC } from "react";
import SideMenu from "./side-menu";
import { Container, Row, Col } from "react-bootstrap";

interface PageLayoutProps {
  isShowSideMenu?: boolean;
  children?: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({
  isShowSideMenu = false,
  children,
}: PageLayoutProps) => {
  return (
    <Container fluid>
      <Row>
        {isShowSideMenu && (
          <Col md={3} style={{ backgroundColor: "#f8f9fa" }}>
            <SideMenu />
          </Col>
        )}
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default PageLayout;
