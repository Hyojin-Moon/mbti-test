import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Navbar = () => {

  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert("로그아웃");
    navigate("/");
  };

  return (
    <nav className="bg-red-500 text-white p-4 flex justify-between items-center">
      {/* 왼쪽 - 홈 링크 */}
      <Link to="/" className="text-lg font-bold">
        MBTI TEST
      </Link>

      {/* 오른쪽 - 로그인 & 회원가입 */}
      <div>
        <Link to="/test" className="mr-4 font-bold px-4 py-2 border-2 border-white rounded-md hover:bg-red-400 transition">테스트하기</Link>
        <Link to="/results" className="mr-4 font-bold px-4 py-2 border-2 border-white rounded-md hover:bg-red-400 transition">결과 보기</Link>
        <Link to="/profile" className="mr-4 font-bold px-4 py-2 border-2 border-white rounded-md hover:bg-red-400 transition">프로필</Link>

        {user ? (
          <button onClick={handleLogout} className="mr-4 font-bold px-4 py-2 border-2 border-white rounded-md hover:bg-red-400 transition">
            로그아웃
          </button>
        ) : (
          <>
            <Link to="/login" className="mr-4 font-bold px-4 py-2 border-2 border-white rounded-md hover:bg-red-400 transition">로그인</Link>
            <Link to="/signup" className="mr-4 font-bold px-4 py-2 border-2 border-white rounded-md hover:bg-red-400 transition">회원가입</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
