import { Link } from "react-router-dom";

const Login = () => {


  return (
    <div>
      <div>
        <h1>로그인</h1>
        {/* <AuthForm mode="login" onSubmit={handleLogin} /> */}
        <div>
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signup">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;