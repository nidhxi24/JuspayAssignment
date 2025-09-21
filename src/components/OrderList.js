import React, { useState } from "react";
import "./OrderList.css";
import "./Dashboard.css";
import { ReactComponent as Add } from "../icons/Add.svg";
import { ReactComponent as AddBlack } from "../icons/AddBlack.svg";

import { ReactComponent as FunnelSimple } from "../icons/FunnelSimple.svg";
import { ReactComponent as FunnelSimpleBlack } from "../icons/FunnelSimpleBlack.svg";

import { ReactComponent as ArrowsDownUp } from "../icons/ArrowsDownUp.svg";
import { ReactComponent as ArrowsDownUpBlack } from "../icons/ArrowsDownUpBlack.svg";

import { ReactComponent as SearchBlack } from "../icons/SearchBlack.svg";
import { ReactComponent as Search } from "../icons/Search.svg";

import { ReactComponent as CalendarBlank } from "../icons/CalendarBlank.svg";
import { ReactComponent as CalendarBlankBlack } from "../icons/CalendarBlankBlack.svg";

import orders from "./OrdersDetails.js";

const pageSize = 10;

export default function OrderList({isDarkMode}) {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / pageSize);

  const handleSelectAll = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const visibleIndexes = Array.from(
      { length: pageSize },
      (_, i) => startIndex + i
    );

    if (selectAll) {
      setSelectedOrders((prev) =>
        prev.filter((i) => !visibleIndexes.includes(i))
      );
    } else {
      setSelectedOrders((prev) => [...new Set([...prev, ...visibleIndexes])]);
    }

    setSelectAll(!selectAll);
  };

  const handleSelectOrder = (index) => {
    setSelectedOrders((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const paginate = (data, page) => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  };

  const paginatedOrders = paginate(orders, currentPage);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "#8A8CD9";
      case "complete":
        return "#4AA785";
      case "pending":
        return "#59A8D4";
      case "approved":
        return "#FFC555";
      case "rejected":
        return isDarkMode ? "#FFFFFF66": "#1C1C1C66";
      default:
        return "#000";
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="header">
          <h3>Order List</h3>
        </div>
      </div>

      <div className="order-toolbar">
        <div style={{ display: "flex", gap: "1rem", cursor: "pointer" }}>
          {isDarkMode ? (
            <AddBlack width={20} height={20} />
          ) : (
            <Add width={20} height={20} />
          )}
          {/* <Add width={20} height={20} /> */}
          {isDarkMode ? (
            <FunnelSimpleBlack width={20} height={20} />
          ) : (
            <FunnelSimple width={20} height={20} />
          )}
          {isDarkMode ? (
            <ArrowsDownUpBlack width={20} height={20} />
          ) : (
            <ArrowsDownUp width={20} height={20} />
          )}
        </div>
        <div className="search-box-hdr">
          {isDarkMode ? (
            <SearchBlack width={20} height={20} />
          ) : (
            <Search width={20} height={20} />
          )}

          <input type="text" placeholder="Search" />
        </div>
      </div>

      <table className="order-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={paginatedOrders.every((_, idx) =>
                  selectedOrders.includes((currentPage - 1) * pageSize + idx)
                )}
                onChange={handleSelectAll}
              />
            </th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((item, index) => {
            const globalIndex = (currentPage - 1) * pageSize + index;
            return (
              <tr
                key={globalIndex}
                style={{ fontSize: "0.9rem", fontWeight: "400" }}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(globalIndex)}
                    onChange={() => handleSelectOrder(globalIndex)}
                  />
                </td>
                <td>{item.id}</td>
                <td>
                  {item.usericon}
                  <span style={{ marginLeft: "0.5rem" }}>{item.user}</span>
                </td>
                <td>{item.project}</td>
                <td>{item.address}</td>
                <td>
                  {isDarkMode ? (
                    <CalendarBlankBlack width={20} height={20} />
                  ) : (
                    <CalendarBlank width={20} height={20} />
                  )}
                  <span style={{ marginLeft: "0.5rem" }}>{item.date}</span>
                </td>
                <td
                  style={{
                    fontWeight: 500,
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: getStatusColor(item.status),
                    }}
                  >
                    ●
                  </span>
                  <span
                    style={{
                      color: getStatusColor(item.status),
                      marginLeft: "0.5rem",
                    }}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          ‹
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`pagination-btn ${
              currentPage === i + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="pagination-btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
