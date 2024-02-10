import React, { FC } from "react";
import { PageRoutes } from "../constants";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

interface SideMenuProps {
  children?: React.ReactNode;
}

const SideMenu: FC<SideMenuProps> = ({ children }: SideMenuProps) => {
  return (
    <Sidebar>
      <div className="p-3 mb-4">
        <h4 className="mb-4">eMarket</h4>
      </div>
      <Menu>
        <MenuItem>
          <Link className="nav-link active" to={PageRoutes.Home}>
            <span className="nav-link-text ms-1">Dashboard</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="nav-link active" to={PageRoutes.Invoices}>
            <span className="nav-link-text ms-1">Invoices</span>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link className="nav-link" to={PageRoutes.Login}>
            <span className="nav-link-text ms-1">Sign Up</span>
          </Link>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideMenu;
