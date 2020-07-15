import axios from 'axios'
import { apiPath } from 'config'

axios.defaults.baseURL = apiPath

export default axios