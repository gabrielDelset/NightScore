// MyReactNativeApp/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.26:3000',
});




export const getMessage = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



/********************************HOME SCREEN ********************************************************** */

export const getlist = async () => {
  try {
    console.log('on est dans le back');
    const response = await api.get('/homescreen/getlist');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};