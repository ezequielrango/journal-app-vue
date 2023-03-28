
import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 'AIzaSyAoelautkImpT7z9jPnYtdskAKcBNJJdq4'
    }
})
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
export default authApi