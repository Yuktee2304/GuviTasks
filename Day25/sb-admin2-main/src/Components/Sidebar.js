// import "../assets/sb-admin-2.min.css";
import { Link } from "react-router-dom";
import myrocketsvg from "../img/undraw_rocket.svg";
import React from "react";

export default function Sidebar() {
  function toggleSidebar() {
    document.querySelector("body").classList.toggle("sidebar-toggled");
    document.getElementById("accordionSidebar").classList.toggle("toggled");
  }
  function hidecomponents() {
    document.querySelector(".collapseTwoHeading").click();
  }
  function hideutilities() {
    document.querySelector(".collapseUtilities").click();
  }
  function hidePages() {
    document.querySelector(".collapsedPages").click();
  }
  function hideothersForTwo() {
    // document.getElementById("collapseTwo")
    document.getElementById("collapseUtilities").classList.remove("show");
    document.getElementById("collapsePages").classList.remove("show");
  }
  function hideothersForUtilities() {
    document.getElementById("collapseTwo").classList.remove("show");
    document.getElementById("collapsePages").classList.remove("show");
  }
  function hideothersForPages() {
    document.getElementById("collapseTwo").classList.remove("show");
    document.getElementById("collapseUtilities").classList.remove("show");
  }

  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex nav-link align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed collapseTwoHeading"
            href="#collapseTwo"
            data-bs-toggle="collapse"
            data-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            onClick={hideothersForTwo}
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link
                className="collapse-item"
                to="/buttons"
                onClick={hidecomponents}
              >
                Buttons
              </Link>
              <Link
                className="collapse-item"
                to="/cards"
                onClick={hidecomponents}
              >
                Cards
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed collapseUtilities"
            href="#"
            data-bs-toggle="collapse"
            data-toggle="collapse"
            data-bs-target="#collapseUtilities"
            aria-expanded="false"
            aria-controls="collapseUtilities"
            onClick={hideothersForUtilities}
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link
                className="collapse-item"
                to="/colors"
                onClick={hideutilities}
              >
                Colors
              </Link>
              <Link
                className="collapse-item"
                to="/borders"
                onClick={hideutilities}
              >
                Borders
              </Link>
              <Link
                className="collapse-item"
                to="/animations"
                onClick={hideutilities}
              >
                Animations
              </Link>
              <Link
                className="collapse-item"
                to="/other"
                onClick={hideutilities}
              >
                Other
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed collapsedPages"
            href="#collapsePages"
            data-bs-toggle="collapse"
            data-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
            onClick={hideothersForPages}
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link className="collapse-item" to="/login" onClick={hidePages}>
                Login
              </Link>
              <Link
                className="collapse-item"
                to="/register"
                onClick={hidePages}
              >
                Register
              </Link>
              <Link
                className="collapse-item"
                to="/forgotpassword"
                onClick={hidePages}
              >
                Forgot Password
              </Link>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" to="/page404" onClick={hidePages}>
                404 Page
              </Link>
              <Link className="collapse-item" to="/blank" onClick={hidePages}>
                Blank Page
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <Link className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={() => toggleSidebar()}
          ></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src={myrocketsvg}
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </>
  );
}
