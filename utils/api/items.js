import { axios } from 'core'

export default {
    get: (path, params) => axios.get('/' + path + (params ? '?' + params : '')),
    remove: (path, id) => axios.delete('/' + path + '/' + id),
    add: (path, data) => axios.post('/' + path, data),
    up: (path, id, data) => axios.put('/' + path + '/' + id, data)
}