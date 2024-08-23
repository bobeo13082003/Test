import axios from "axios";
import store from "../redux/store";
import { refreshToken } from "./ApiService";
import { doLogin } from "../redux/action/SignInAction";


const instance = axios.create(
    {
        baseURL: 'https://api-test-web.agiletech.vn/',
    }
)

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = store?.getState()?.SignInReducer?.account?.token;
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refresToken = store.getState().SignInReducer.account.refreshToken;
        const res = await refreshToken(refresToken);
        const token = res.data.accessToken;
        const refreshtoken = res.data.refreshToken;
        store.dispatch(doLogin(token, refreshtoken))
        originalRequest.headers['Authorization'] = `Bearer ${token}`
    }
    return Promise.reject(error);
});
export default instance;