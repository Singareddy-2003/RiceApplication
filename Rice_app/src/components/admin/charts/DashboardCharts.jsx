import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

// Dummy Data
const revenueData = [
  { day: "Tue", value: 1000 },
  { day: "Wed", value: 950 },
  { day: "Thu", value: 900 },
  { day: "Fri", value: 950 },
  { day: "Sat", value: 1100 },
  { day: "Sun", value: 1000 },
  { day: "Mon", value: 1050 }
];

const ordersData = [
  { day: "Tue", value: 40 },
  { day: "Wed", value: 38 },
  { day: "Thu", value: 37 },
  { day: "Fri", value: 35 },
  { day: "Sat", value: 48 },
  { day: "Sun", value: 45 },
  { day: "Mon", value: 40 }
];

const customersData = [
  { day: "Tue", value: 25 },
  { day: "Wed", value: 18 },
  { day: "Thu", value: 18 },
  { day: "Fri", value: 22 },
  { day: "Sat", value: 18 },
  { day: "Sun", value: 19 },
  { day: "Mon", value: 25 }
];

const DashboardCharts = () => {
  return (
    <div className="row g-4 my-3">
      {/* Daily Revenue */}
      <div className="col-12 col-md-4">
        <div className="card shadow-sm border-0 p-4 bg-light" style={{backgroundColor:"#fdfcf6"}}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold text-danger fs-5">Daily Revenue</span>
            <span className="fw-bold text-success">$80.00 ▲</span>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis tickFormatter={(val) => `$${(val / 1000).toFixed(1)}k`} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Daily Orders */}
      <div className="col-12 col-md-4">
        <div className="card shadow-sm border-0 p-4 bg-light">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold text-warning fs-5 ">Daily Orders</span>
            <span className="fw-bold text-success">150 ▲</span>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={ordersData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#38bdf8" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* New Customers */}
      <div className="col-12 col-md-4">
        <div className="card shadow-sm border-0 p-4 bg-light">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold text-primary fs-5 ">New Customers</span>
            <span className="fw-bold text-success">11,000% ▲</span>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={customersData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
