import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import AddProperty from "./pages/AddProperty"; 
import DashboardPage from "./pages/Dashboard"; 
import PropertyDetails from "./pages/PropertyDetails";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/add-property" element={<AddProperty />} /> {/* Ensure this route exists */}
            <Route path="/dashboard" element={<DashboardPage />} /> {/* ✅ Dashboard Route */}
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
