import { fetchItems } from 'initValues'

const pages = {
	'[lang]': {
		priority: '1.00',
		lastmod: true,
	},
	'[lang]/posts': {
		priority: '0.80'
	},
	'[lang]/post/[alias]': {
		priority: '0.80'
	}
}

const variables = {
	host: null,
	'[lang]': {
		model: 'lang',
		alias: 'sign',
		image: 'sitemap',
		loaded: null
	},
	'[alias]': {
		model: 'post',
		alias: 'alias',
		image: 'sitemap',
		loaded: null
	},
}

const sitemapXML = async () => {
	toInit()
	for (let path in pages) {
		const dinamics = path.match(/\[(\w+)\]/g)
		
		for (const dinamic of dinamics) {
			if (variables[dinamic]?.loaded === null) {
				await fetchVariables(variables[dinamic])
			}
		}

		buildLink(dinamics, path)
	}

	return `${xmlHead}
						${xmlBody}
					${xmlBootom}`;
}

sitemapXML.getInitialProps = async ({ ctx }) => {

	const { res } = ctx
	const { config } = res
	variables.host = config.host
	if (!res) return
	res.setHeader("Content-Type", "text/xml");
	res.write(await sitemapXML());
	res.end();
}

const toInit = () => {
	xmlBody = ''
	for (const key in variables) {
		if (variables[key]?.loaded) {
			variables[key].loaded = null
		}
	}
}

const fetchVariables = async variable => {
	variable.loaded = await fetchItems(`model?model=${variable.model}&image=${variable.image}`)
}

const buildLink = (
	dinamics, 
	link, 
	path = link, 
	altPath = link,
	iteration = 0
) => {
	if (dinamics.length === iteration) {
		return addUrl(path, pages[link], altPath)
	}
	const dinamic = dinamics[iteration]
	const alias = variables[dinamic]?.alias
	variables[dinamic]?.loaded?.forEach(variable => {
		const part = variable[alias]
		const newPath = path.replace(dinamic, part)
		const newAltPath = dinamic !== '[lang]' 
			? altPath.replace(dinamic, part) 
			: altPath
		buildLink(dinamics, link, newPath, newAltPath, ++iteration)
		iteration = 0
	})
}

const addUrl = (path, page, altPath) => {
	xmlBody += `<url>`
	xmlBody += `<loc>${variables.host}/${path}</loc>`
	addParams(page)
	addAlternates(altPath)
	xmlBody += `</url>`
}

const addAlternates = altPath => {
	const langs = variables['[lang]'].loaded
	if (langs < 2) return

	langs.forEach(lang => {
		const path = altPath.replace('[lang]', lang.sign)
		xmlBody += `<link`
			xmlBody += ` rel="alternate"`
			xmlBody += ` hreflang="${lang.sign}"`
			xmlBody += ` href="${variables.host}/${path}"`
		xmlBody += ` />`
	})
}

const addParams = page => {
	xmlBody += page.lastmod ? `<lastmod></lastmod>` : ``
	xmlBody += page.priority ? `<priority>${page.priority}</priority>` : ``
}

const xmlHead = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

let xmlBody = ``

const xmlBootom = `</urlset>`

export default sitemapXML


