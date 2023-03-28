export const loginUser = (state, {user, idToken, refreshToken}) => {

// Las mutaciones deben ser sincronas, no pueden ser asincronas

    if(idToken){
        localStorage.setItem('idToken', idToken)
        state.idToken = idToken
    }

    if(refreshToken){
        localStorage.setItem('refreshToken', refreshToken)
        state.refreshToken = refreshToken
    }

    state.user = user
    state.status = 'authenticated'

}