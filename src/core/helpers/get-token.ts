import { enviroment } from '../configs/app.config'

export const getToken = ():string | null =>{
    return localStorage.getItem(`${enviroment.applicationName}`)
}

export const setToken = (token:string) =>{
    localStorage.setItem(`${enviroment.applicationName}`, token)
}                   