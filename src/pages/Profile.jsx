import { updateProfile } from "../api/auth";
import AuthForm from "../components/AuthForm";
import useAuthStore from "../store/authStore";

const Profile = () => {

  const { user, setUser } = useAuthStore();

  const handleUpdateProfile = async (formData) => {
    try {

      console.log(user.token);
      const updatedUser = await updateProfile(formData.nickname, user.token);
      setUser({ ...user, nickname: updatedUser.nickname });
      alert("정보수정완료")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      {user ? (
        <AuthForm mode="profile" onSubmit={handleUpdateProfile} initialData={user} />
      ) : (
        <p className="text-lg text-red-500">로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default Profile;
