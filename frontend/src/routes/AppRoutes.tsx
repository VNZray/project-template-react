import { AuthProvider } from "@/context/AuthContext";
import LandingPage from "@/pages/landing-page/LandingPage";
import NotFound from "@/pages/NotFound";
import { Routes, Route, Outlet } from "react-router-dom";

// Pages
export default function AppRoutes() {
  const home = "/";

  return (
    <Routes>
      <Route
        element={
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        }
      >
        <Route path={home} element={<LandingPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
