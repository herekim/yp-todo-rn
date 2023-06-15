import axios from 'axios'
import { API_ROOT } from './api'

const axiosClient = axios.create({
  baseURL: API_ROOT,
})

export default axiosClient
