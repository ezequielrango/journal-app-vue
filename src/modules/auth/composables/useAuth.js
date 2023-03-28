import { useStore } from "vuex"
import { computed } from "vue"

const useAuth = () => {

    const store = useStore()

    const createUser = async(user) => {
        const res = await store.dispatch('auth/createUser', user)
        return res
    }

    const loginUser = async(user) => {
        const res = await store.dispatch('auth/signInUser', user)
        return res
    }
    const checkAuthStatus = async() => {
        const res = await store.dispatch('auth/checkAuthentication')
        return res
    }
    return{
        createUser,
        loginUser,
        checkAuthStatus,
        authStatus : computed(() => store.getters['auth/currentState'])
    }
}
export default useAuth;