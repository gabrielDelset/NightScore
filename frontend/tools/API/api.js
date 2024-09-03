// MyReactNativeApp/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.26:3000/api',
});
 //ajout d'un com azeazeaze
export const getMessage = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
