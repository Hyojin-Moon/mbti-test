import { updateProfile } from "../api/auth";
import AuthForm from "../components/AuthForm";
import useAuthStore from "../store/authStore";
import { useTestResults, useUpdateProfileTestUser } from "../hooks/querys";
import useToastStore from "@/store/toastStore";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "/src/contansts/queryKeys";

const Profile = () => {

  const { user, setUser, fetchUser } = useAuthStore();
  const { showToast } = useToastStore();
  const { data: testResults } = useTestResults();
  const updateProfileTestUser = useUpdateProfileTestUser();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user, fetchUser]);

  const handleUpdateProfile = async (formData) => {
    try {
      const updatedUser = await updateProfile(formData.nickname, formData.avatar, user.token);

      const newUser = {
        id: user.id,
        token: user.token,
        nickname: updatedUser.nickname,
        avatar: updatedUser.avatar || user.avatar,
      };

      setUser(newUser);
      showToast("정보수정완료");

      localStorage.setItem("auth-storage", JSON.stringify({ state: { user: newUser } }));

      updateProfileTestUser.mutate({
        userId: user.id,
        nickname: formData.nickname,
        avatar: formData.avatar,
        testResults,
      });

      queryClient.invalidateQueries([QUERY_KEYS.TEST_RESULTS]);
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
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
