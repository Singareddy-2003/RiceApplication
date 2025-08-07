import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Suspense } from "react"; // fall back UI (loading , spinners ..etc )
import PrivateRoutes from "./PrivateRoutes"; // route guard
import Navbar from "../components/common/Navbar";
import { useAuth } from "../store/context/AuthContext";

const PrivacyPolicy =  React.lazy(() => import("../pages/PrivacyPolicy"));

const Home = React.lazy(() => import("../pages/users/Home"));
const About = React.lazy(() => import("../pages/users/About"));
const Blog = React.lazy(() => import("../pages/users/Blog"));
const Shop = React.lazy(() => import("../pages/users/Shop"));
const Contact = React.lazy(() => import("../pages/users/Contact"));
const profile = React.lazy(() => import("../components/common/Profile"));
const PageNotFound = React.lazy(() =>
  import("../components/common/PageNotFound")
);
const Unauthurized = React.lazy(() =>
  import("../components/common/Unauthurized")
);
const Cart = React.lazy(() => import("../components/common/Cart"));
const Orders = React.lazy(() => import("../components/common/Orders"));
const PageLoader = React.lazy(() => import("../components/common/PageLoader"));
const AdminDashboard = React.lazy(() => import("../layouts/admin/AdminLayout"));
const Vendordashboard = React.lazy(() =>
  import("../layouts/vendor/VendorDashboard")
);
const Authenticationpage = React.lazy(() => import("../pages/auth/Login"));

const AppRoutes = () => {
  // access the context of the user like authenticated or not  and rolr

  let { isAuthenticated, role } = useAuth();
  console.log(isAuthenticated);
  // uselocation hook to access the current URL path
  let location = useLocation();
  // console.log(url)

  // hide navbar when you have a path
  let hideNav = ["/auth","/admin"];
  let shouldHidenav = hideNav.includes(location.pathname); // includes method returnms true or false values

  return (
    <>
      {!shouldHidenav && <Navbar />}

      <Suspense
        fallback={
          <div className="spinner-border">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      >
        <Routes>
          {/* public roiutes  */}
          <Route path="/" element={<Navigate to={"/shop"} replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

          {/* auth Routes roiutes  (role based access) */}
          {/* after authemntication paths will be like localhost:5173/admin , ocalhost:5173/vendor , ocalhost:5173/shop  */}
          <Route
            path="/auth"
            element={
              isAuthenticated ? (
                `/${
                  role == "vendor"
                    ? "vendor"
                    : role == "admin"
                    ? "admin"
                    : "shop"
                }`
              ) : (
                <Authenticationpage />
              )
            }
          />

          {/* protected route (denied access to pages  all users before login ) */}
          <Route
            element={
              <PrivateRoutes allowedUser={["admin", "public", "vendor"]} />
            }
          >
            <Route path="/cart" element={<Cart />} />
          </Route>

          {/* admin roiutes  */}

          <Route element={<PrivateRoutes allowedUser={["admin"]} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          {/* vendor roiutes  */}

          <Route element={<PrivateRoutes allowedUser={["vendor"]} />}>
            <Route path="/vendor" element={<Vendordashboard />} />
          </Route>

          <Route path="/shop" element={<Shop />} />

          {/* fallback roiutes  */}
          <Route path="*" element={<PageNotFound />} />
          <Route path="/unauthorized" element={<Unauthurized />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
