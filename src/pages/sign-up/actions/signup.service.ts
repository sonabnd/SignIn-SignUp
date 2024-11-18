import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import { ISignUpFormValues } from "../signup";

export const signUp = (credentials: ISignUpFormValues) => {
    console.log(credentials);
    
    return axiosInstance.post(API.users,credentials).then((res) => res.data)
}