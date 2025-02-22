import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-title text-5xl font-bold">
        무료 성격 테스트
      </h1>
      <p className="text-2xl">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <Link to="/test" className="px-3 py-1 bg-red-500 text-black rounded-md hover:bg-red-600">
      테스트 시작
      </Link>
    </div>
  );
};

export default Home;