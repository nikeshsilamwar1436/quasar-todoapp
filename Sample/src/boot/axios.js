import axios from 'axios'

const JWTToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYWRAZ21haWwuY29tIiwianRpIjoiM2Q5OTQ3ZjYtMjUyMi00YTNmLTlhOGUtZGI4OTZhODY4MzQ0IiwiZXhwIjoxNTgyNjc2NTk1LCJpc3MiOiJTZXJ2ZXItTksiLCJhdWQiOiJjbGllbnQifQ.SQOD0Bi-s01nfz8teBLVPEfR4c7Mdpn-a_XC8DuOb64'
const axiosInstance = axios.create({
  baseURL: 'https://localhost:5001/api',
  headers: {
    Authorization: `Bearer ${JWTToken}`,
    'Content-Type': 'application/json'
  }
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
