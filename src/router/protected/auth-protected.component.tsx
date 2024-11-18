import { useEffect } from 'react'
import { IAuthProtectedRouteProps } from './auth.protected';
import { Routes } from '../router';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../core/helpers/get-token';



const AuthProtectedComponent = ({ children, layout = 'public' }: IAuthProtectedRouteProps) => {
  useEffect(()=>{
    const token = getToken();
    if(token){
      console.log(token);
    }
  }, [])
  

  switch (layout) {
    case 'auth':
      return  getToken() ? <Navigate to={Routes.home} replace /> : children;
    case 'public':
      return getToken()  ? children : <Navigate to={Routes.signin} replace />
    default:
      return children;
  }
}


export default AuthProtectedComponent