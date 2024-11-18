import {createBrowserRouter} from 'react-router-dom';
import PublicComponent from '../core/layouts/public/public.component';
import HomeComponent from '../pages/home/home.componnet';
import { Routes } from './router';
import AuthComponent from '../core/layouts/auth/auth.component';
import SignUpComponent from '../pages/sign-up/signup.component';
import NotFoundComponent from '../pages/not-found/not-found.component';
import AuthProtectedComponent from './protected/auth-protected.component';
import SignInComponent from '../pages/sign-in/signin.component';

const router = createBrowserRouter([
    {
        element: <AuthProtectedComponent layout='public'><PublicComponent/></AuthProtectedComponent>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>
            },
        ],
    },
    {
        element: <AuthProtectedComponent layout='auth' ><AuthComponent/></AuthProtectedComponent>,
        path: Routes.auth,
        children: [
            {
                path: Routes.signup,
                element: <SignUpComponent/>
            },
            {
                path: Routes.signin,
                element: <SignInComponent/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundComponent/>
    }
])

export default router