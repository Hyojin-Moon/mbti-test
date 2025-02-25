import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import useToastStore from "../../store/toastStore";


const Navbar = () => {

  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const { showToast } = useToastStore();

  const handleLogout = () => {
    logout();
    showToast("로그아웃");
    navigate("/");
  };

  return (
    <nav className=" text-black p-4 flex justify-between items-center border-b border-gray-300">
      {/* 왼쪽 - 홈 링크 */}
      <Link to="/" className="nav-link">
        MBTI TEST
      </Link>

            {/* 모바일 전용 햄버거 메뉴 */}
            <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-12 w-12 flex items-center justify-center">
              <Menu className="h-10 w-10" />
            </Button>
          </DropdownMenuTrigger>

          {/* 토글 메뉴 */}
          <DropdownMenuContent align="end" side="bottom" className="w-44 mt-3 p-2 shadow-lg border border-border rounded-md">
            <DropdownMenuItem>
              <Link to="/test" className="w-full">TEST START!</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/results" className="w-full">Board</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/my-results" className="w-full">My MBTI</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/profile" className="w-full">My Profile</Link>
            </DropdownMenuItem>

            <div className="border-t my-2"></div> {/* 구분선 */}

            {user ? (
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            ) : (
              <>
                <DropdownMenuItem>
                  <Link to="/login" className="w-full">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/signup" className="w-full">Signup</Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 데스크톱 전용 메뉴 */}
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/test" className="nav-link">TEST START!</Link>
        <Link to="/results" className="nav-link">Board</Link>
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
