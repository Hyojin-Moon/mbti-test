import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import useToastStore from "@/store/toastStore";

const Signup = () => {
  const navigate = useNavigate();
  const { showToast } = useToastStore();

  //통신
  const handleSignup = async (userData) => {

    try {
      await register(userData);

      //이미지 업로드는 여기서 ? 
      showToast("회원가입 완료! 로그인 페이지로 이동합니다.");
      navigate("/login");

    } catch (error) {
      console.error(error);
      showToast("입력내용을 확인해주세요. ");
    }
  };

  return <AuthForm mode="signup" onSubmit={handleSignup} />;
};

export default Signup;
