import TestResultItem from "./TestResultItem";
import useAuthStore from "../store/authStore";
import { useTestResults } from "../hooks/querys";

function TestResultList() {

  const { user } = useAuthStore();
  const { data: testResults = [], isPending, isError, refetch } = useTestResults();

  if (isPending) return <p>로딩 중..</p>;
  if (isError) return <p>에러발생: {isError.message}</p>;

  // 비공개 결과는 작성자만 볼 수 있도록 필터링
  const filteredResults = testResults.filter(
    (result) => result.visibility || result.userId === user?.id
  );

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">테스트 결과 리스트</h2>
      {filteredResults.length > 0 ? (
        filteredResults.map((result) => {
          const isOwner = user?.id === result.userId;

          return (
            <TestResultItem
              key={result.id}
              result={result}
              isOwner={isOwner}
              refetch={refetch}
            />
          );
        })
      ) : (
        <p className="text-gray-600">테스트 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default TestResultList;
