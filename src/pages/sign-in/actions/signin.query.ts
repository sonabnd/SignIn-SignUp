import { useQuery } from 'react-query';
import { getUsers } from './signin.service'

export const useUsers = () => {
    return useQuery<any> ('user', () => {
        return getUsers();
    })
}