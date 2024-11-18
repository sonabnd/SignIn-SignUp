import { useStore } from '../../store/store.config';
import { Navigate } from 'react-router-dom';
import { IAuthProtectedRouteProps } from './auth.protected';
import { Routes } from '../router';


const ClaimProtectedComponent = ({children}:IAuthProtectedRouteProps) => {
    const user = useStore('user')
    if(!user) {
        return <Navigate to={Routes.auth} replace/>
    }
    
    return children ;
}

export default ClaimProtectedComponent;