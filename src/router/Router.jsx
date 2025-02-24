import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import Layout from "../components/common/Layout";
import ProtectedRoute from "../components/common/ProtectedRoute";
import MyTestResults from "../pages/MyTestResult";
import ResultPage from "../components/Resultpage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="result/:id" element={<ResultPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/results" element={<TestResultPage />} />
            <Route path="/my-results" element={<MyTestResults />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
