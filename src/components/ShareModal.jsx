

const ShareModal = ({ shareUrl, onClose }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("링크가 복사되었습니다! 친구들에게 공유해보세요.");
    }).catch(err => {
      console.error("URL 복사 실패:", err);
    });
  };

  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "내 MBTI 테스트 결과",
          description: "MBTI 테스트 결과를 확인해보세요!",
          imageUrl: "https://your-image-url.com/default-image.jpg",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl
          }
        }
      });
    } else {
      alert("카카오톡 공유 기능이 로드되지 않았습니다.");
    }
  };

  const handleInstagramShare = () => {
    window.open(`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-lg font-bold mb-4">공유하기</h2>
        <button onClick={handleCopyLink} className="w-full bg-gray-300 py-2 rounded-md mb-2">🔗 링크 복사</button>
        <button onClick={handleKakaoShare} className="w-full bg-yellow-400 py-2 rounded-md mb-2">💬 카카오톡 공유</button>
        <button onClick={handleInstagramShare} className="w-full bg-pink-500 text-white py-2 rounded-md mb-2">📸 인스타그램 공유</button>
        <button onClick={onClose} className="w-full bg-red-500 text-white py-2 rounded-md">닫기</button>
      </div>
    </div>
  );
};

export default ShareModal;
