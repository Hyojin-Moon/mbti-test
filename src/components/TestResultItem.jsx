import { useDeleteTestResult, useUpdateTestVisibility } from "../hooks/querys";

function TestResultItem({ result, isOwner }) {

  const visibilityMutation = useUpdateTestVisibility();
  const deleteMutation = useDeleteTestResult();

  return (
    <div className="border-b py-4">
      <h3 className="text-lg font-bold">{result.mbtiType}</h3>
      <p className="text-gray-600">{result.description}</p>
      <div className="flex justify-end gap-2 mt-2">
        {isOwner && (
          <>
            <button
              onClick={() => visibilityMutation.mutate(result.id)}
              className="px-3 py-1 bg-blue-500 text-black rounded-md hover:bg-blue-600"
            >
              {result.visibility ? "비공개" : "공개"}
            </button>
            <button
              onClick={() => deleteMutation.mutate(result.id)}
              className="px-3 py-1 bg-red-500 text-black rounded-md hover:bg-red-600"
            >
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TestResultItem;