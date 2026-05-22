import axios from "axios";

//define o portal da api
const apiPort = "3000"

// define a URL base para API local, usando a porta definida
const localApi = `http://localhost:${apiPort}`

//define a variável para API externa
const externalApi = null

const api = axios.create({
    baseURL: localApi
})

export default api