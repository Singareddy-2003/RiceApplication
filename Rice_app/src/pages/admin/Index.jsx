// import React from 'react'
// import Sidebar from '../../components/admin/Sidebar'
// import Header from '../../components/admin/Header'
// import ProductCard from '../../components/admin/products/ProductCard'
// import ProductList from '../../components/admin/products/ProductList'
// import { LineChart } from 'recharts'
// const Index = () => {
//   return (
//     <div>
//       <Header/>
//       <div className="conatainer-fluid">
//         <div className="row">
//           <div className="col-12 col-sm-12 col-md-2 col-lg-2">
// <Sidebar/>
//           </div>

//           <div className="col-12 col-sm-12 col-md-10 col-lg-10">
// <ProductList/>
//           </div>

//         </div>

//         <LineChart/>
//       </div>
  
//     </div>
//   )
// }

// export default Index
import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import ProductList from "../../components/admin/products/ProductList";
import { LineChart } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardCharts from "../../components/admin/charts/DashboardCharts";
import SellersTable from "../../components/admin/table/SellersTable";

const Index = () => {
  return (
    <div className="admin-layout">
      {/* Fixed Header */}
      <div className="fixed-top">
        <Header />
      </div>

      <div className="container-fluid" style={{ paddingTop: "60px" }}>
        <div className="row">
          {/* Sidebar - Collapsible on mobile */}
          <div className="col-12 col-md-2 bg-light border-end p-0 sidebar-container">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div
            className="col-12 col-md-10 p-3 content-area"
            style={{
              height: "calc(100vh - 70px)", // 70px for navbar height
              overflowY: "auto"
            }}
          >
           <h2 className=" fw-bold text-cente my-2">🌾 <span className="text-warning fw-bold">Rice</span><span className="text-success">Mart</span> Business Overview</h2>

            <ProductList />
             <h2 className="fw-bold my-4 ">📊 Performance Insights</h2>
              <DashboardCharts/>
              <SellersTable/>
              
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Index;
