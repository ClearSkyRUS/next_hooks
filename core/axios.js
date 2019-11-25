import axios from 'axios'
import { apiPath } from 'public/config'

axios.defaults.baseURL = apiPath

export default axios