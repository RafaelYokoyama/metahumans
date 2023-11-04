import axios from 'axios'

const baseUrl = 'http://homologacao3.azapfy.com.br/api/ps/metahumans' || process.env.NEXT_PUBLIC_API_BASE_URL

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json"
  }
})

api.interceptors.request.use(request => {
  return request
})

api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)
