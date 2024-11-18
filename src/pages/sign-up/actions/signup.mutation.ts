import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { ISignUpFormValues } from "../signup";
import { signUp } from "./signup.service";
import { Routes } from "../../../router/router";

export const useSignUp = () =>{
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: ISignUpFormValues) => {
            return signUp(credentials)
        },
        onSuccess: (data: any) => {
            console.log(data);
            navigate(Routes.home)
            queryClient.invalidateQueries('user');
        }
    })
}