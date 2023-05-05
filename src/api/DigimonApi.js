import axios from 'axios'

export default axios.create({
    baseURL: "https://www.digi-api.com/api/v1/digimon"
})