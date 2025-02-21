import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";

const Signup = () => {
  const navigate = useNavigate();

  //통신
  const handleSignup = async (userData) => {

    try {
      const response = await register(userData);
      console.log(response)
      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/login");

    } catch (error) {
      console.error(error)
      alert("회원가입 실패: " + error.message || "알 수 없는 오류");
    }
  };

  return <AuthForm mode="signup" onSubmit={handleSignup} />;
};

export default Signup;
