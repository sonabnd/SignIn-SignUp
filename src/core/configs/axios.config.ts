import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import { enviroment } from './app.config';

const axiosInstance = axios.create({
    baseURL: enviroment.apiMain,
})

export default axiosInstance;