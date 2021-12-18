import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    header: {
        'Content Type': "application/json",
        Accept: " application/json",
    }
})

export const sendOtp = (data) => api.post('/api/send-otp', data)
export const verifyOtp = (data) => api.post('/api/verify-otp', data)
export const activate = (data) => api.post('/api/activate', data)
export const logout = () => api.post('/api/logout')
export const createRoom = (data) => api.post('/api/create-room', data)
export const getRooms = () => api.get('/api/getRoom')


api.interceptors.response.use((config) => { return config; }, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        try {
            await axios.get('http://localhost:5000/api/refresh', {
                withCredentials: true,
            });
            return api.request(originalRequest)
        } catch (error) {
            console.log(error.message);
        }
    }
    throw error;
})
export default api