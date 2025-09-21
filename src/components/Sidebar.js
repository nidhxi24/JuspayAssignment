import { useState } from "react";
import "./Sidebar.css";
import { ReactComponent as ByeWind } from "../icons/ByeWind.svg";
import { ReactComponent as ChartPieSlice } from "../icons/ChartPieSlice.svg";
import { ReactComponent as ChartPieSliceBlack } from "../icons/ChartPieSliceBlack.svg";
import { ReactComponent as ShoppingBagOpen } from "../icons/ShoppingBagOpen.svg";
import { ReactComponent as ShoppingBagOpenBlack } from "../icons/ShoppingBagOpenBlack.svg";

import { ReactComponent as FolderNotch } from "../icons/FolderNotch.svg";
import { ReactComponent as FolderNotchBlack } from "../icons/FolderNotchBlack.svg";

import { ReactComponent as BookOpen } from "../icons/BookOpen.svg";
import { ReactComponent as BookOpenBlack } from "../icons/BookOpenBlack.svg";

import { ReactComponent as Vector } from "../icons/Vector.svg";
import { ReactComponent as VectorBlack } from "../icons/VectorBlack.svg";

import { ReactComponent as IdentificationCard } from "../icons/IdentificationCard.svg";
import { ReactComponent as IdentificationCardBlack } from "../icons/IdentificationCardBlack.svg";

import { ReactComponent as UsersThree } from "../icons/UsersThree.svg";
import { ReactComponent as UsersThreeBlack } from "../icons/UsersThreeBlack.svg";

import { ReactComponent as ChatsTeardrop } from "../icons/ChatsTeardrop.svg";
import { ReactComponent as ChatsTeardropBlack } from "../icons/ChatsTeardropBlack.svg";

import { ReactComponent as Notebook } from "../icons/Notebook.svg";
import { ReactComponent as NotebookBlack } from "../icons/NotebookBlack.svg";

export default function Sidebar({ currentPage, setCurrentPage, onPageChange, isDarkMode }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <ByeWind width={32} height={32} />
        <span className="brand">ByeWind</span>
      </div>

      <div className="sidebar-mini">
        <div className="mini-header">
          <div>Favorites</div>
          <div>Recently</div>
        </div>
        <ul className="mini-list">
          <li>
            <span style={{ color: "grey" }}>● </span>
            <span>Overview</span>
          </li>
          <li>
            <span style={{ color: "grey" }}>● </span>
            <span>Projects</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <p className="section-title">Dashboards</p>
        <ul>
          <li
            className={currentPage === "dashboard" ? "active" : ""}
            onClick={() => onPageChange("dashboard")}
          >
            {currentPage === "dashboard" ? (
              <span className="active-line"></span>
            ) : (
              <i className="bx bx-chevron-right"></i>
            )}
            {isDarkMode ? (
              <ChartPieSliceBlack width={20} height={20} />
            ) : (
              <ChartPieSlice width={20} height={20} />
            )}
            Default
          </li>
          <li
            className={currentPage === "ecommerce" ? "active" : ""}
            onClick={() => onPageChange("ecommerce")}
          >
            {currentPage === "ecommerce" ? (
              <span className="active-line"></span>
            ) : (
              <i className="bx bx-chevron-right"></i>
            )}
            {isDarkMode ? (
              <ShoppingBagOpenBlack width={20} height={20} />
            ) : (
              <ShoppingBagOpen width={20} height={20} />
            )}
            eCommerce
          </li>
          <li>
            <i className="bx bx-chevron-right"></i>
            {isDarkMode ? (
              <FolderNotchBlack width={20} height={20} />
            ) : (
              <FolderNotch width={20} height={20} />
            )}
            Projects
          </li>
          <li>
            <i className="bx bx-chevron-right"></i>
            {isDarkMode ? (
              <BookOpenBlack width={20} height={20} />
            ) : (
              <BookOpen width={20} height={20} />
            )}
            Online Courses
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <p className="section-title">Pages</p>
        <ul>
          <li onClick={() => toggleMenu("user")}>
            {openMenu === "user" ? (
              <i className="bx bx-chevron-down"></i>
            ) : (
              <i className="bx bx-chevron-right"></i>
            )}
            {isDarkMode ? (
              <VectorBlack width={20} height={20} />
            ) : (
              <Vector width={20} height={20} />
            )}
            User Profile
          </li>
          {openMenu === "user" && (
            <ul className="submenu" style={{ paddingLeft: "3.5rem" }}>
              <li>Overview</li>
              <li>Projects</li>
              <li>Campaigns</li>
              <li>Documents</li>
              <li>Followers</li>
            </ul>
          )}

          <li>
            <i className="bx bx-chevron-right"></i>
            {isDarkMode ? (
              <IdentificationCardBlack width={20} height={20} />
            ) : (
              <IdentificationCard width={20} height={20} />
            )}
            Account
          </li>
          <li>
            <i className="bx bx-chevron-right"></i>
            {isDarkMode ? (
              <UsersThreeBlack width={20} height={20} />
            ) : (
              <UsersThree width={20} height={20} />
            )}
            Corporate
          </li>
          <li>
            <i className="bx bx-chevron-right"></i>
            {isDarkMode ? (
              <NotebookBlack width={20} height={20} />
            ) : (
              <Notebook width={20} height={20} />
            )}
            Blog
          </li>
          <li>
            <i className="bx bx-chevron-right"></i>
            {isDarkMode ? (
              <ChatsTeardropBlack width={20} height={20} />
            ) : (
              <ChatsTeardrop width={20} height={20} />
            )}
            Social
          </li>
        </ul>
      </div>
    </aside>
  );
}
