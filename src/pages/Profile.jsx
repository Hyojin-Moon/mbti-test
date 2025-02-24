import { updateProfile } from "../api/auth";
import AuthForm from "../components/AuthForm";
import useAuthStore from "../store/authStore";

const Profile = () => {

  const { user, setUser } = useAuthStore();

  const handleUpdateProfile = async (formData) => {
    try {

      const updatedUser = await updateProfile(formData.nickname, formData.avatar, user.token);
      setUser({ ...user, ...updatedUser });
      alert("정보수정완료")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {user && (
        <AuthForm mode="profile" onSubmit={handleUpdateProfile} initialData={user} />
      )}
    </div>
  );
};

export default Profile;
