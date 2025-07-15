import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Signup from "./pages/Signup";

// import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/profile/:username" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
