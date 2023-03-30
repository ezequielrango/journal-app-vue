<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img src="../../../assets/logo.svg"
                alt="vue-logo"
                class="d-inline-block align-text-top mx-2"
                height="24">
                {{username}}
        </a>

        <div class="d-flez">
            <button class="btn btn-outline-info mx-2"
            @click="onLogout"
            >
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>
<script>
import useAuth from '../../auth/composables/useAuth'
import { useRouter } from 'vue-router';


export default {
    setup(){
        
        const router = useRouter()
        const { username, logout} = useAuth()
    
        return {
            username,
            logout,
            onLogout : () => {
                router.push({name : 'login'})
                logout()
            }
        }

    }
}
</script>

