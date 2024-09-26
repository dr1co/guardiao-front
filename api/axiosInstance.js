import axios from 'axios';

// http://localhost:4000
const url = process.env.EXPO_PUBLIC_API_ADDRESS;

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": 'application/json'
  },
  
});

const createUserRegister = async (data) => {
  try {
    const response = await api.post('/user/register', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const createChildRegister = async (data) => {
  try {
    const response = await api.post('/child/register', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const readUserLogin = async (data) => {
  try {
    const response = await api.post('/user/login', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const readForgotPassword = async (data) => {
  try {
    const response = await api.post('/user/forgot-password', data);
    return response.data;

  } catch (error) {
    throw error;
  }
}

export { createUserRegister, createChildRegister, readUserLogin, readForgotPassword };

/* 
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com',
});

const createResource = async (data) => {
  try {
    const response = await api.post('/endpoint', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getResource = async (id) => {
  try {
    const response = await api.get(`/endpoint/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateResource = async (id, data) => {
  try {
    const response = await api.put(`/endpoint/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteResource = async (id) => {
  try {
    const response = await api.delete(`/endpoint/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createResource, getResource, updateResource, deleteResource };

*/