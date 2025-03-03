import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div className="flex items-center justify-center flex-col min-h-[calc(100vh-480px)] gap-5">
      <h1 className="heading">
        무료 성격 테스트
      </h1>
      <p className="text-2xl">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <Link to="/test"
        className="btn btn-primary text-xl">
        테스트 시작
      </Link>
    </div>
  );
};

export default Home;