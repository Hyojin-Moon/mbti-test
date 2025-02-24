import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import useAuthStore from "../store/authStore";
import useToastStore from "../store/toastStore";

const Login = () => {

  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const { showToast } = useToastStore();

  // 통신
  const handleLogin = async (userData) => {

    try {
      const response = await login(userData);

      // user 객체를 직접 생성하여 setUser에 전달
      const userDataToStore = {
        id: response.userId,
        nickname: response.nickname,
        avatar: response.avatar, // 나중에 프로필 이미지 만들자
        token: response.accessToken
      };

      setUser(userDataToStore);

      showToast("로그인 성공!");
      navigate("/");
    } catch (error) {
      console.error(error);
      showToast("아이디와 비밀번호를 확인해 주세요.");
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
};

export default Login;
