
import axios from 'axios'


const journalApi = axios.create({
    baseURL: 'https://vue-demo-d43c0-default-rtdb.firebaseio.com'
})

export default journalApi