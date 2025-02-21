import useAuthStore from "../store/authStore";

const Profile = () => {

  const { user } = useAuthStore();

  //닉네임, 이미지 변경 로직

  return (
    <div>
      <h1>프로필 페이지</h1>
      {user ? (
        <div>
          <p>아이디: {user.id}</p>
          <p>닉네임: {user.nickname}</p>
        </div>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default Profile;
