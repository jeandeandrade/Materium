import axios from "axios";

const api = axios.create({
  baseURL: "https://materium-api.vercel.app/api", 
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);




export const getUserData = async (token: string) => {
  const response = await api.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('userdata: ', response)
  return response.data;
};

export default api;
