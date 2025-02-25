import axios from "axios";

const API_URL = import.meta.env.VITE_TEST_API_URL;

export const getTestResults = async () => {
  const response = await axios.get(`${API_URL}/testResults`);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(`${API_URL}/testResults`, resultData);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_URL}/testResults/${id}`, { visibility });
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/testResults/${id}`);
  return response.data;
};

export const updateProfileTestUser = async ({ id, nickname }) => {
  const response = await axios.patch(`${API_URL}/testResults/${id}`, { nickname: nickname });
  return response.data;
};