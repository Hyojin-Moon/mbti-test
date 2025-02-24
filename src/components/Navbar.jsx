import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useState } from "react";

const Navbar = () => {

  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    alert("로그아웃");
    navigate("/");
  };

  return (
    <nav className="bg-red-500 text-white p-4 flex justify-between items-center">
      {/* 왼쪽 - 홈 링크 */}
      <Link to="/" className="nav-link">
        MBTI TEST
      </Link>

      {/* 모바일 햄버거 버튼 */}
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      
      {/* 오른쪽 - 로그인 & 회원가입 */}
      <div className={`absolute top-14 right-0 bg-red-500 p-4 flex flex-col gap-5 text-center transition-all duration-300 md:static md:flex-row md:gap-4 md:flex rounded-md ${menuOpen ? "flex" : "hidden"}`}>
        <Link to="/test" className="nav-link">TEST START!</Link>
        <Link to="/results" className="nav-link">Borad</Link>
        <Link to="/my-results" className="nav-link">My MBTI</Link>
        <Link to="/profile" className="nav-link">My Profile</Link>

        {user ? (
          <button onClick={handleLogout} className="nav-link">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
