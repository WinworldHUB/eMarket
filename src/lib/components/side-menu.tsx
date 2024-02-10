import React, { FC } from "react";
import { PageRoutes } from "../constants";
import { Link } from "react-router-dom";
interface SideMenuProps {
  children?: React.ReactNode;
}

const SideMenu: FC<SideMenuProps> = ({ children }: SideMenuProps) => {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 bg-slate-900 fixed-start "
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a
          rel="noopener noreferrer"
          className="navbar-brand d-flex align-items-center m-0"
          href="/"
          target="_blank"
        >
          <span className="font-weight-bold text-lg">eMarket</span>
        </a>
      </div>
      <div
        className="collapse navbar-collapse px-4  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link  active" to={PageRoutes.Home}>
              <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>dashboard</title>
                  <g
                    id="dashboard"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="template"
                      transform="translate(12.000000, 12.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <path
                        className="color-foreground"
                        d="M0,1.71428571 C0,0.76752 0.76752,0 1.71428571,0 L22.2857143,0 C23.2325143,0 24,0.76752 24,1.71428571 L24,5.14285714 C24,6.08962286 23.2325143,6.85714286 22.2857143,6.85714286 L1.71428571,6.85714286 C0.76752,6.85714286 0,6.08962286 0,5.14285714 L0,1.71428571 Z"
                        id="Path"
                      ></path>
                      <path
                        className="color-background"
                        d="M0,12 C0,11.0532171 0.76752,10.2857143 1.71428571,10.2857143 L12,10.2857143 C12.9468,10.2857143 13.7142857,11.0532171 13.7142857,12 L13.7142857,22.2857143 C13.7142857,23.2325143 12.9468,24 12,24 L1.71428571,24 C0.76752,24 0,23.2325143 0,22.2857143 L0,12 Z"
                        id="Path"
                      ></path>
                      <path
                        className="color-background"
                        d="M18.8571429,10.2857143 C17.9103429,10.2857143 17.1428571,11.0532171 17.1428571,12 L17.1428571,22.2857143 C17.1428571,23.2325143 17.9103429,24 18.8571429,24 L22.2857143,24 C23.2325143,24 24,23.2325143 24,22.2857143 L24,12 C24,11.0532171 23.2325143,10.2857143 22.2857143,10.2857143 L18.8571429,10.2857143 Z"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="../pages/tables.html">
              <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>table</title>
                  <g
                    id="table"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="view-grid"
                      transform="translate(12.000000, 12.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <path
                        className="color-foreground"
                        d="M3.42857143,0 C1.53502286,0 0,1.53502286 0,3.42857143 L0,6.85714286 C0,8.75069143 1.53502286,10.2857143 3.42857143,10.2857143 L6.85714286,10.2857143 C8.75069143,10.2857143 10.2857143,8.75069143 10.2857143,6.85714286 L10.2857143,3.42857143 C10.2857143,1.53502286 8.75069143,0 6.85714286,0 L3.42857143,0 Z"
                        id="Path"
                      ></path>
                      <path
                        className="color-background"
                        d="M3.42857143,13.7142857 C1.53502286,13.7142857 0,15.2492571 0,17.1428571 L0,20.5714286 C0,22.4650286 1.53502286,24 3.42857143,24 L6.85714286,24 C8.75069143,24 10.2857143,22.4650286 10.2857143,20.5714286 L10.2857143,17.1428571 C10.2857143,15.2492571 8.75069143,13.7142857 6.85714286,13.7142857 L3.42857143,13.7142857 Z"
                        id="Path"
                      ></path>
                      <path
                        className="color-background"
                        d="M13.7142857,3.42857143 C13.7142857,1.53502286 15.2492571,0 17.1428571,0 L20.5714286,0 C22.4650286,0 24,1.53502286 24,3.42857143 L24,6.85714286 C24,8.75069143 22.4650286,10.2857143 20.5714286,10.2857143 L17.1428571,10.2857143 C15.2492571,10.2857143 13.7142857,8.75069143 13.7142857,6.85714286 L13.7142857,3.42857143 Z"
                        id="Path"
                      ></path>
                      <path
                        className="color-foreground"
                        d="M13.7142857,17.1428571 C13.7142857,15.2492571 15.2492571,13.7142857 17.1428571,13.7142857 L20.5714286,13.7142857 C22.4650286,13.7142857 24,15.2492571 24,17.1428571 L24,20.5714286 C24,22.4650286 22.4650286,24 20.5714286,24 L17.1428571,24 C15.2492571,24 13.7142857,22.4650286 13.7142857,20.5714286 L13.7142857,17.1428571 Z"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="nav-link-text ms-1">Tables</span>
            </a>
          </li>

          <li className="nav-item border-start my-0 pt-2">
            <Link
              className="nav-link position-relative ms-0 ps-2 py-2 "
              to={PageRoutes.Login}
            >
              <span className="nav-link-text ms-1">Sign Up</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
