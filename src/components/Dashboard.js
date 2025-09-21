import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "../App.css";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingBag,
  DollarSign,
  BarChart3,
  MapPin,
} from "lucide-react";
import { ReactComponent as ArrowRise } from "../icons/ArrowRise.svg";
import { ReactComponent as ArrowRiseBlack } from "../icons/ArrowRiseBlack.svg";

import { ReactComponent as ArrowFall } from "../icons/ArrowFall.svg";
import { ReactComponent as ArrowFallBlack } from "../icons/ArrowFallBlack.svg";

import { ReactComponent as Map } from "../icons/Map.svg";
import { ReactComponent as Block } from "../icons/Block.svg";
import { ReactComponent as BlockBlack } from "../icons/BlockBlack.svg";

import "./Dashboard.css";

export default function Dashboard({ isDarkMode }) {
  const revenueData = [
    { month: "Jan", current: 15, previous: 10 },
    { month: "Feb", current: 10, previous: 18 },
    { month: "Mar", current: 12, previous: 15 },
    { month: "Apr", current: 16, previous: 12 },
    { month: "May", current: 20, previous: 12 },
    { month: "Jun", current: 22, previous: 22 },
  ];

  const projectionsData = [
    { month: "Jan", actual: 18, projection: 3 },
    { month: "Feb", actual: 21, projection: 5 },
    { month: "Mar", actual: 19, projection: 4 },
    { month: "Apr", actual: 23, projection: 5 },
    { month: "May", actual: 16, projection: 3 },
    { month: "Jun", actual: 21, projection: 5 },
  ];

  const salesData = [
    { name: "Direct", value: 300.56, color: "#1C1C1C" },
    { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
    { name: "Sponsored", value: 154.02, color: "#95A4FC" },
    { name: "E-mail", value: 48.96, color: "#B1E3FF" },
  ];

  const topProducts = [
    {
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18,
    },
    {
      name: "Marco Lightweight Shirt",
      price: 128.5,
      quantity: 37,
      amount: 4754.5,
    },
    { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
    { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1967.81 },
  ];

  const locationData = [
    { city: "New York", value: "72K" },
    { city: "San Francisco", value: "39K" },
    { city: "Sydney", value: "25K" },
    { city: "Singapore", value: "61K" },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="header">
          <h3>eCommerce</h3>
        </div>

        <div className="kpi-projections-section">
          <div className="kpi-cards-grid">
            <div className="kpi-card customers">
              <div className="kpi-card-header">
                <div className="kpi-card-content">
                  <h4 className="kpi-card-label">Customers</h4>
                </div>
              </div>
              <div className="kpi-card-trend positive">
                <h1
                  className="kpi-card-value number-box"
                  style={{
                    fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
                    justifyItems: "space-between",
                  }}
                >
                  3,781
                </h1>
                <div>
                  <span className="kpi-trend-text">+11.01%</span>
                  <ArrowRise width={16} height={16} />
                </div>
              </div>
            </div>

            <div className="kpi-card white">
              <div className="kpi-card-header">
                <div className="kpi-card-content">
                  <h4 className="kpi-card-label">Orders</h4>
                </div>
              </div>
              <div className="kpi-card-trend negative">
                <h1 className="kpi-card-value">1,219</h1>
                <div>
                  <span className="kpi-trend-text">-0.03%</span>
                  {isDarkMode ? (
                    <ArrowFallBlack width={16} height={16} />
                  ) : (
                    <ArrowFall width={16} height={16} />
                  )}
                </div>
              </div>
            </div>

            <div className="kpi-card white">
              <div className="kpi-card-header">
                <div className="kpi-card-content">
                  <h4 className="kpi-card-label">Revenue</h4>
                </div>
              </div>
              <div className="kpi-card-trend positive">
                <h1 className="kpi-card-value">$695</h1>
                <div>
                  <span className="kpi-trend-text">+15.03%</span>
                  {isDarkMode ? (
                    <ArrowRiseBlack width={16} height={16} />
                  ) : (
                    <ArrowRise width={16} height={16} />
                  )}
                </div>
              </div>
            </div>

            <div className="kpi-card growth">
              <div className="kpi-card-header">
                <div className="kpi-card-content">
                  <h4 className="kpi-card-label">Growth</h4>
                </div>
              </div>
              <div className="kpi-card-trend positive">
                <h1 className="kpi-card-value">30.1%</h1>
                <div>
                  <span className="kpi-trend-text">+6.08%</span>
                  <ArrowRise width={16} height={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="projections-chart">
            <h3 className="chart-title">Projections vs Actuals</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={projectionsData}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                barCategoryGap={20}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="0"
                  stroke="#e5e7eb"
                />

                <XAxis dataKey="month" axisLine={false} tickLine={false} />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  width={30}
                  ticks={[10, 20, 30]}
                  domain={[0, 30]}
                  tickFormatter={(value) => `${value}M`}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />

                <Bar
                  dataKey="actual"
                  stackId="a"
                  fill="#A8C5DA"
                  radius={[4, 4, 0, 0]}
                  barSize={26}
                />

                <Bar
                  dataKey="projection"
                  stackId="a"
                  fill="#E5ECF6"
                  radius={[4, 4, 0, 0]}
                  barSize={26}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="revenue-location-section">
          <div className="revenue-chart">
            <div className="chart-header">
              <h3 className="chart-title">Revenue</h3>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-dot current"></div>
                  <span>
                    Current Week <b>$58,211</b>
                  </span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot previous"></div>
                  <span>
                    Previous Week <b>$68,708</b>
                  </span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={revenueData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid
                  stroke={isDarkMode ? "#374151" : "#e2e8f0"}
                  strokeWidth={1}
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#64748b" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 30]}
                  ticks={[0, 10, 20, 30]}
                  tickFormatter={(value) => `${value}M`}
                  tick={{ fontSize: 12, fill: "#64748b" }}
                  width={35}
                />

                {isDarkMode ? (
                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke="#A8C5DA"
                    strokeWidth={3}
                    dot={false}
                    name="previous"
                  />
                ) : (
                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke="#A8C5DA"
                    strokeWidth={3}
                    dot={false}
                    name="previous"
                  />
                )}

                {isDarkMode ? (
                  <Line
                    type="monotone"
                    dataKey="current"
                    stroke="#C6C7F8"
                    strokeWidth={3}
                    dot={false}
                    name="current"
                  />
                ) : (
                  <Line
                    type="monotone"
                    dataKey="current"
                    stroke="#1C1C1C"
                    strokeWidth={3}
                    dot={false}
                    name="current"
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="sales-section-location">
            {isDarkMode ? (
              <BlockBlack width={290} height={438} />
            ) : (
              <Block width={290} height={438} />
            )}
          </div>
        </div>

        <div className="products-sales-section">
          <div className="products-section">
            <h3 className="section-title">Top Selling Products</h3>
            <div className="table-wrapper">
              <table className="products-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product, index) => (
                    <tr key={index}>
                      <td className="product-name">{product.name}</td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td className="amount-cell">
                        ${product.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="sales-section">
            <h3 className="section-title">Total Sales</h3>
            <div className="pie-chart-wrapper">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={salesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {salesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="sales-legend">
              {salesData.map((item, index) => (
                <div key={index} className="sales-legend-item">
                  <div className="sales-legend-label">
                    <div
                      className="sales-legend-dot"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="sales-legend-text">{item.name}</span>
                  </div>
                  <span className="sales-legend-value">${item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
