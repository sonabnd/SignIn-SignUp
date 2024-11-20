import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';
import { ISignUpFormValues } from '../signup';

export const  signUpService = (credentials: ISignUpFormValues) => {
    return axiosInstance.post(API.users,credentials).then((res) => res.data)
}