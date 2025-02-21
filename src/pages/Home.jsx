import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>
        무료 성격 테스트
      </h1>
      <p>
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <Link to='/login'>
        <button>로그인하기</button>
      </Link>
    </div>
  );
};

export default Home;