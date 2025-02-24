import { useParams } from "react-router-dom";
import { useTestResults } from "../hooks/querys";
import defaultAvatar from '../assets/default-avatar.jpg';

const ResultPage = () => {
  const { id } = useParams();
  const { data: testResults, isLoading } = useTestResults();

  if (isLoading) return <p>로딩 중...</p>;

  const result = testResults.find(r => String(r.id) === String(id));

  if (!result) return <p className="text-center text-gray-500">결과를 찾을 수 없습니다.</p>;

  return (
    <div className="container">
      <h2 className="card text-red-900">{result.mbtiType}</h2>
      <img
        src={result.avatar || defaultAvatar}
        alt="프로필 이미지"
        className="w-10 h-10 rounded-full border mx-auto mb-4"
      />
      <h3 className="text-lg font-bold mx-auto mb-4 text-center">{result.nickname}</h3>
      <p className="text-gray-600">{result.description}</p>
    </div>
  );
};

export default ResultPage;
