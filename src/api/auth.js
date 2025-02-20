import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {

};

export const getUserProfile = async (token) => {

};

export const updateProfile = async (formData) => {

};