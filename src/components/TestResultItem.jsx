import { useDeleteTestResult, useUpdateTestVisibility } from "../hooks/querys";
import defaultAvatar from '../assets/default-avatar.jpg'

function TestResultItem({ result, isOwner }) {

  const visibilityMutation = useUpdateTestVisibility();
  const deleteMutation = useDeleteTestResult();

  return (
    <div className="border-b py-4">
      {/* 닉네임 & 프로필 이미지 */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={result.avatar || defaultAvatar} 
          alt="프로필 이미지"
          className="w-10 h-10 rounded-full border"
        />
        <h3 className="text-lg font-bold">{result.nickname}</h3>
      </div>
      <h3 className="text-lg font-bold">{result.mbtiType}</h3>
      <p className="text-gray-600">{result.description}</p>
      <div className="flex justify-end gap-2 mt-2">
        {isOwner && (
          <>

            <button onClick={() => visibilityMutation.mutate({ id: result.id, visibility: !result.visibility })}
              className="px-3 py-1 bg-blue-500 text-black rounded-md hover:bg-blue-600">
              {result.visibility ? "비공개로 전환" : "공개로 전환"}
            </button>

            <button onClick={() => deleteMutation.mutate(result.id)}
              className="px-3 py-1 bg-red-500 text-black rounded-md hover:bg-red-600">
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TestResultItem;