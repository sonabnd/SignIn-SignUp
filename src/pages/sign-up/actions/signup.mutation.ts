import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { ISignUpFormValues } from '../signup';
import { signUpService } from './signup.service';
import { Routes } from '../../../router/router';

export const useSignUp = () =>{
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: ISignUpFormValues) => {
            return signUpService(credentials)
        },
        onSuccess: () => {
            navigate(Routes.home)
            queryClient.invalidateQueries('user');
        }
    })
}