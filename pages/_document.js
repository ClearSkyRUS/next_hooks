import parse from 'html-react-parser'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getInitialLocale } from 'translations/getInitialLocale'

const getResultLang = (lang, locals) => {
	if (lang && locals?.find(obj => obj.sign === lang))
		return lang
	return getInitialLocale(locals)
}
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const { lang } = ctx.query
		const locals = ctx.res.locals
		const initialProps = await Document.getInitialProps(ctx)

		const additionalProps = {
			lang: getResultLang(lang, locals),
			config: ctx.res.config,
		}
		return { ...initialProps, ...additionalProps }
	}

	render() {
		const { lang, config } = this.props

		return (
			<Html lang={lang}>
				<Head>
					{ config?.text_htmlHead ? parse(config.text_htmlHead) : null }
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument