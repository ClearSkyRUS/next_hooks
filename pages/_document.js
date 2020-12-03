import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getInitialLocale } from 'translations/getInitialLocale'
import { adSenseCode } from "config"

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
			lang: getResultLang(lang, locals)
		}
		return { ...initialProps, ...additionalProps }
	}

	render() {
		const { lang } = this.props;

		return (
			<Html lang={lang}>
				<Head>
					{adSenseCode ? (
						<script
							data-ad-client={adSenseCode}
							async
							src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
						/>
					) : null}
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