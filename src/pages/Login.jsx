import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";

const Login = () => {

  const navigate = useNavigate();

  // 통신
  const handleLogin = async (userData) => {

    try {

      const response = await login(userData);
      localStorage.setItem("token", response.accessToken);
      alert("로그인 성공!");
      navigate("/");

    } catch (error) {
      console.error(error)
      alert("로그인 실패: " + error.message || "알 수 없는 오류");
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
};

export default Login;
