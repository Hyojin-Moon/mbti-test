import api from './api';

export const register = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await api.post("/login", userData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get("/user");
  return response.data;
};

export const updateProfile = async (nickname, avatar) => {

  const formData = new FormData();
  formData.append("nickname", nickname);
  if (avatar) formData.append("avatar", avatar);

  const response = await api.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};