import { useQuery } from "react-query";
import { getTestResults } from "../api/testResults";
import TestResultItem from "./TestResultItem";

function TestResultList({ user }) {

  const { data: testResults=[], refetch } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  const filteredResults = testResults.filter(
    (result) => result.visibility || result.userId === user.id
  );


  return (
    <div className="max-w-2x1 mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="test-2xl font-bold mb-4">테스트 결과 리스트</h2>
      {filteredResults.length > 0 ? (
        filteredResults.map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            isOwner={result.userId === user?.id}
            refetch={refetch}
          />
        ))
      ) : (
        <p className="text-gray-600">테스트 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default TestResultList;