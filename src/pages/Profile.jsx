import { useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return alert("로그인이 필요합니다.");

      try {
        const response = await getUserProfile(token);
        console.log("회원정보:", response);
        setUser(response);
      } catch (error) {
        console.error("회원정보 조회 실패:", error.response?.data);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>프로필 페이지</h1>
      {user ? (
        <div>
          <p>아이디: {user.id}</p>
          <p>닉네임: {user.nickname}</p>
          {user.avatar && <img src={user.avatar} alt="프로필 이미지" />}
        </div>
      ) : (
        <p>회원 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

export default Profile;
