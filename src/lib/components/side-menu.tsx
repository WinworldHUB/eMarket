import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { PiSignOutBold } from "react-icons/pi";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { PageRoutes } from "../constants";

interface SideMenuProps {
  children?: React.ReactNode;
}

const SideMenu: FC<SideMenuProps> = ({ children }: SideMenuProps) => {
  return (
    <Sidebar>
      <div className="p-3 mb-4">
        <h4 className="mb-4">eMarket</h4>
      </div>
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            backgroundColor: active ? "#333" : "transparent",
            color: active ? "white" : "inherit",
            transition: "background-color 0.3s",
          }),
        }}
      >
        <MenuItem>
          <Link className="nav-link active" to={PageRoutes.Home}>
            <MdSpaceDashboard />
            <span className="nav-link-text ms-1">Dashboard</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="nav-link active" to={PageRoutes.Invoices}>
            <LiaFileInvoiceSolid />
            <span className="nav-link-text ms-1">Invoices</span>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link className="nav-link" to={PageRoutes.Login}>
            <PiSignOutBold />
            <span className="nav-link-text ms-1">Sign Out</span>
          </Link>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideMenu;
