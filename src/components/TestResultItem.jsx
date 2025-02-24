import { useDeleteTestResult, useUpdateTestVisibility } from "../hooks/querys";
import defaultAvatar from '../assets/default-avatar.jpg';
import useAlertStore from "../store/alertStore";
import useToastStore from "../store/toastStore";


function TestResultItem({ result, isOwner }) {

  const visibilityMutation = useUpdateTestVisibility();
  const deleteMutation = useDeleteTestResult();
  const { showAlert } = useAlertStore();
  const { showToast } = useToastStore();
  //공유하기 함수
  const handleShare = () => {
    const shareUrl = `${window.location.origin}/result/${result.id}`;

    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast("링크가 복사되었습니다! 친구들에게 공유해보세요.");
    }).catch(err => {
      console.error("URL 복사 실패:", err);
    });
  };


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
            <button onClick={() => handleShare()}
              className="btn">
              🔗
            </button>

            <button onClick={() => visibilityMutation.mutate({ id: result.id, visibility: !result.visibility })}
              className="btn bg-blue-500 text-white rounded-md hover:bg-blue-400">
              {result.visibility ? "비공개로 전환" : "공개로 전환"}
            </button>

            <button onClick={() => showAlert({
                title: "정말 삭제하시겠습니까?",
                onConfirm: () => deleteMutation.mutate(result.id)
              })}
              className="btn btn-primary">
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TestResultItem;