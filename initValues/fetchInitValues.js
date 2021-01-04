import fetch from 'isomorphic-unfetch'

import { apiPath } from 'config'

const get = async (params) => {
	try {
		const res = await fetch(apiPath + params)
		const data = await res.json()
		if (data.err) {
			return null
		}
		return data
	} catch (ex) {
		console.log(ex)
		return null
	}
}


export default get
