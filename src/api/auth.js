import axios from 'axios';

const API_URL = 'https://www.nbcamp-react-auth.link';

export const register = async (id, password, nickname) => {

  const formData = new FormData();
  formData.append("id", id);
  formData.append("password", password);
  formData.append("nickname", nickname);

  const response = await axios.post(`${API_URL}/register`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
};

export const updateProfile = async (nickname, avatar, token) => {

  const formData = new FormData();
  formData.append("nickname", nickname);
  if (avatar) formData.append("avatar", avatar);

  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};