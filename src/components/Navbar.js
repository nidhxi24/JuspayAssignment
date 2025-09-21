import React, { useState, useEffect } from "react";
import { Sun, Moon, Clock, Menu } from "lucide-react";
import { ReactComponent as Sidebar } from "../icons/Sidebar.svg";
import { ReactComponent as SidebarBlack } from "../icons/SidebarBlack.svg";
import { ReactComponent as Star } from "../icons/Star.svg";
import { ReactComponent as StarBlack } from "../icons/StarBlack.svg";
import { ReactComponent as ClockCounterClockwise } from "../icons/ClockCounterClockwise.svg";
import { ReactComponent as ClockCounterClockwiseBlack } from "../icons/ClockCounterClockwiseBlack.svg";
import { ReactComponent as Bell } from "../icons/Bell.svg";
import { ReactComponent as BellBlack } from "../icons/BellBlack.svg";
import { ReactComponent as SearchBlack } from "../icons/SearchBlack.svg";
import { ReactComponent as Search } from "../icons/Search.svg";


const Navbar = ({
  onToggleSidebar,
  onToggleRightbar,
  sidebarOpen,
  rightbarOpen,
  isDarkMode,
  setIsDarkMode,
}) => {

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDarkMode =
      savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDarkMode(shouldUseDarkMode);

    if (shouldUseDarkMode) {
      document.body.classList.add("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <button
          className="sidebar-toggle-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isDarkMode ? (
            <SidebarBlack width={20} height={20} />
          ) : (
            <Sidebar width={20} height={20} />
          )}
        </button>
        {isDarkMode ? (
          <StarBlack width={20} height={20} />
        ) : (
          <Star width={20} height={20} />
        )}
        <span className="breadcrumb">
          Dashboards <span className="slash">/</span> <strong>Default</strong>
        </span>
      </div>

      <div style={{display: "flex"}}>
        <div className="search-box">
          {isDarkMode ? <SearchBlack width={20} height= {20}/> : <Search width={20} height= {20}/>}
          {/* <Search size={20} /> */}
          <input type="text" placeholder="Search" />
        </div>

        <div className="nav-icons">
          <button
            className="theme-toggle-btn"
            onClick={handleThemeToggle}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button aria-label="Recent activity">
            {isDarkMode ? (
              <ClockCounterClockwiseBlack width={20} height={20} />
            ) : (
              <ClockCounterClockwise width={20} height={20} />
            )}
          </button>
          <button aria-label="Notifications">
            {isDarkMode ? (
              <BellBlack width={20} height={20} />
            ) : (
              <Bell width={20} height={20} />
            )}
          </button>
          <div
            className="rightbar-toggle-btn"
            onClick={onToggleRightbar}
            aria-label="Toggle notifications panel"
          >
            {isDarkMode ? (
              <SidebarBlack width={20} height={20} />
            ) : (
              <Sidebar width={20} height={20} />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background-color: var(--navbar-bg, #f9fafb);
          color: var(--text-color, #111827);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
          height: 60px;
          border-bottom: 2px solid var(--border-color, #e5e7eb);
          transition: all 0.3s ease;
        }

        .nav-left,
        .nav-icons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-icons button,
        .sidebar-toggle-btn {
          background: none;
          border: none;
          color: var(--text-color, #111827);
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-icons button:hover,
        .sidebar-toggle-btn:hover {
          background-color: var(--hover-bg, rgba(0, 0, 0, 0.05));
        }

        .theme-toggle-btn {
          position: relative;
        }

        .theme-toggle-btn:hover {
          background-color: var(--hover-bg, rgba(0, 0, 0, 0.1));
          transform: scale(1.05);
        }

        .breadcrumb {
          font-size: 14px;
          color: var(--text-color, #111827);
        }

        .breadcrumb .slash {
          margin: 0 4px;
          color: var(--text-secondary, #6b7280);
        }

        .breadcrumb strong {
          font-weight: 600;
          color: var(--text-color, #111827);
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--input-bg, #f5f5f5);
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid var(--border-color, #e5e7eb);
          transition: all 0.3s ease;
        }

        .search-box:focus-within {
          border-color: var(--primary-color, #3b82f6);
          box-shadow: 0 0 0 3px var(--primary-shadow, rgba(59, 130, 246, 0.1));
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--input-text, #111827);
          font-size: 14px;
          width: 200px;
        }

        .search-box input::placeholder {
          color: var(--text-secondary, #6b7280);
        }

        /* Dark mode styles */
        :global(body.dark) .navbar {
          --navbar-bg: #C6C7F8;
          --text-color: #f9fafb;
          --text-secondary: #9ca3af;
          --input-bg: #374151;
          --input-text: #f9fafb;
          --border-color: #4b5563;
          --hover-bg: rgba(255, 255, 255, 0.1);
          --primary-color: #60a5fa;
          --primary-shadow: rgba(96, 165, 250, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Navbar;
