export const getToken = ():string | null =>{
    return localStorage.getItem('tokenName')
}

export const setToken = (token:string) =>{
    localStorage.setItem('tokenName', token)
}                  