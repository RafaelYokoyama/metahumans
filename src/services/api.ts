import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

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
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)
