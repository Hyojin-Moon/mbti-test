import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* 왼쪽 - 홈 링크 */}
      <Link to="/" className="text-lg font-bold">
        MBTI TEST
      </Link>

      {/* 오른쪽 - 로그인 & 회원가입 */}
      <div>
        <Link to="/profile" className="mr-4">
          프로필
        </Link>
        <Link to="/login" className="mr-4">
          로그인
        </Link>
        <Link to="/signup">
          회원가입
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
