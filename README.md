**React Dashboard App**

A responsive dashboard application built with React.js, featuring:

- Sidebar navigation

- Top navbar with toggles

- Rightbar (collapsible)

- Dark mode support

- Dashboard with charts

- Ecommerce order list

**Features**


Sidebar Navigation – Navigate between Dashboard and Ecommerce pages.

Collapsible Sidebar & Rightbar – Easily toggle panels for more space.

Dark Mode Toggle – Switch between light and dark themes.

Dashboard – Displays charts (built using Recharts
).

Ecommerce (Order List) – Shows tabular order data.

Cross browser compatibility

**Project Structure**


src/
├── App.js            # Main layout, theme state, routing
├── App.css           # Global styles
├── components/
│   ├── Sidebar.js    # Sidebar navigation component
│   ├── Navbar.js     # Top bar with toggles
│   ├── Dashboard.js  # Dashboard with charts
│   ├── Rightbar.js   # Optional right sidebar
│   ├── OrderList.js  # Ecommerce order list
│   └── ...           # Other shared components
└── icons/            # Custom SVG icons


**Installation & Setup
**

Install dependencies:

npm install


Start development server:

npm start


Open http://localhost:3000

**Dependencies**


React (UI library)

Recharts (charts in Dashboard)

React Icons / SVGs (for icons)

CSS Modules / Custom CSS (styling)

**Dark Mode**

Controlled via isDarkMode state in App.js.

Passed down as a prop to components (Sidebar, Navbar, Dashboard, OrderList).

Styles change dynamically in dark mode using CSS overrides (body.dark).

**Usage
**
Dashboard Page: Displays revenue trends using line charts.

Ecommerce Page: Displays order list in a styled table.

Sidebar: Click menu items to switch between pages.

Navbar: Toggle sidebar, rightbar, and dark mode.


** Preview
**
✨ Dashboard with charts and dark mode:

<img width="1846" height="1008" alt="Screenshot from 2025-09-21 22-42-39" src="https://github.com/user-attachments/assets/2972a738-d991-4218-96ac-cc7f7e303d09" />
<img width="1850" height="970" alt="Screenshot from 2025-09-21 22-38-58" src="https://github.com/user-attachments/assets/c8c622f3-4675-4eab-936b-b4fc74c02726" />
<img width="1845" height="1005" alt="Screenshot from 2025-09-21 22-39-30" src="https://github.com/user-attachments/assets/f53f4885-b90e-4043-93df-061261b7562d" />
<img width="1845" height="966" alt="Screenshot from 2025-09-21 22-40-14" src="https://github.com/user-attachments/assets/7f2d8eba-f715-4f51-98a5-81b2da73f5aa" />
<img width="1840" height="965" alt="Screenshot from 2025-09-21 22-40-50" src="https://github.com/user-attachments/assets/e203a605-74b6-4cac-af17-9b12baca5e1d" />



**Author**

Developed by Your Nidhi.
