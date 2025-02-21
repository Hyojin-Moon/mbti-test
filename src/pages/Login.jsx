import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (userData) => {
    try {
      const response = await login(userData);
      console.log(response)
      localStorage.setItem("token", response.accessToken);
      alert("로그인 성공!");
      navigate("/profile"); // 로그인 후 프로필 페이지로 이동
    } catch (error) {
      console.error(error.response?.data)
      alert("로그인 실패: " + error.response?.data?.message || "알 수 없는 오류");
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
};

export default Login;
