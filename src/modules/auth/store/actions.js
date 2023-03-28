import authApi from "@/api/authApi";

export const createUser = async({commit}, user) => {
    const { name, email, password } = user

    try {
        const {data} = await authApi.post(':signUp',{
            email,
            password,
            returnSecureToken: true
        })

        const {idToken, refreshToken } = data

        const res = await authApi.post(':update', {displayName : name, idToken})
        console.log(res);

        return {ok: true, message: 'sape'}
    } catch (error) {
        console.log(error);
        return {ok: false, message: error.response.data.error.message}
    }
}