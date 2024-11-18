import { API } from "../../../core/configs/api.config"
import axiosInstance from "../../../core/configs/axios.config"

export const getUsers = () =>{
    return axiosInstance.get(API.users).then(res => {
        return res.data;
    })
}