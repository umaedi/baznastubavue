//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://localhost:8000/api'
    // baseURL: 'https://baznastuba.tulangbawangkab.go.id/api'
})

export default Api