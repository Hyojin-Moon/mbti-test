import TestResultItem from "../components/TestResultItem";
import { useTestResults } from "../hooks/querys";
import useAuthStore from "../store/authStore";

const MyTestResults = () => {
  const { data: testResults, isLoading } = useTestResults();
  const { user } = useAuthStore(); 

  if (isLoading) return <p>로딩 중...</p>;

  const myResults = testResults.filter(result => result.userId === user.id);

  return (
    <div className="card-container">
      <h2 className="card">내 테스트 결과</h2>
      {myResults.length > 0 ? (
        myResults.map(result => (
          <TestResultItem key={result.id} result={result} isOwner={true} />
        ))
      ) : (
        <p className="text-center text-gray-500">아직 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default MyTestResults;
