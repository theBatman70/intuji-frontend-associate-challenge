import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import BlankPage from "../pages/BlankPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/schedule" element={<BlankPage />} />
      <Route path="/message" element={<BlankPage />} />
      <Route path="/analytics" element={<BlankPage />} />
      <Route path="/teams" element={<BlankPage />} />
      <Route path="/profile" element={<BlankPage />} />
      <Route path="/settings" element={<BlankPage />} />
      <Route path="/help" element={<BlankPage />} />
      <Route path="/logout" element={<BlankPage />} />
    </Routes>
  );
};

export default AppRoutes;
