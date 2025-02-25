import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_USER_API_URL,
});

//응답에 자동으로 토큰 추가
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

// 모든 응답의 에러를 한 곳에서 처리
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 토큰 만료 시 자동 로그아웃
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;