import useToastStore from "../store/toastStore";
import { updateProfile } from "../api/auth";
import AuthForm from "../components/AuthForm";
import useAuthStore from "../store/authStore";
import { useTestResults, useUpdateProfileTestUser } from "../hooks/querys";
const Profile = () => {

  const { user, setUser } = useAuthStore();
  const { showToast } = useToastStore();
  const { data: testResults } = useTestResults();
  const updateProfileTestUser = useUpdateProfileTestUser();

  const handleUpdateProfile = async (formData) => {
    try {

      const updatedUser = await updateProfile(formData.nickname, formData.avatar, user.token);
      setUser({ ...user, ...updatedUser });
      showToast("정보수정완료");

      updateProfileTestUser.mutate({
        userId: user.id,
        nickname: formData.nickname,
        testResults,
      });
      console.log(updateProfileTestUser)

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user && (
        <AuthForm mode="profile" onSubmit={handleUpdateProfile} initialData={user} />
      )}
    </div>
  );
};

export default Profile;
