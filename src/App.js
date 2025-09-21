import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Rightbar from "./components/Rightbar";
import OrderList from "./components/OrderList";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightbarOpen, setRightbarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleRightbar = () => setRightbarOpen(!rightbarOpen);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (page === "ecommerce") {
      setRightbarOpen(false);
    }
  };

  return (
    <div className="app-container">
      {sidebarOpen && <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} onPageChange={handlePageChange} isDarkMode= {isDarkMode} />}
      <div
        className={`main-content 
          ${!sidebarOpen ? "no-sidebar" : ""} 
          ${!rightbarOpen ? "no-rightbar" : ""}`}
      >
        <Navbar
          onToggleSidebar={toggleSidebar}
          onToggleRightbar={toggleRightbar}
          sidebarOpen={sidebarOpen}
          rightbarOpen={rightbarOpen}
          isDarkMode= {isDarkMode} 
          setIsDarkMode = {setIsDarkMode}
        />

        {currentPage === "dashboard" && <Dashboard isDarkMode= {isDarkMode}/>}
        {currentPage === "ecommerce" && <OrderList  isDarkMode= {isDarkMode} />}
      </div>

      {rightbarOpen && <Rightbar />}
    </div>
  );
}
