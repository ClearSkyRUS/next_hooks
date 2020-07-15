import { axios } from 'core'

export default {
	get: (params) => axios.get('/model' + params),
	//post: (params, data) => axios.post('/model' + params, data ),
	put: (params, data) => axios.put('/model' + params, data),
	// delete: (params) => axios.delete('/model' + params)
}