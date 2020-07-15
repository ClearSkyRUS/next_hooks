import fetch from 'isomorphic-unfetch'

import { apiPath } from 'config'

const get = async (params) => {
	try {
		const res = await fetch(apiPath + params)
		const data = await res.json()
		return data
	} catch (ex) {
		return []
	}
}


export default get
