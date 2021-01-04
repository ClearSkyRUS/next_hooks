export const getInitialLocale = locals => {
	if (typeof window !== 'undefined') {
		const localSetting = localStorage?.getItem('locale')
		if (localSetting && locals?.find(obj => obj.sign === localSetting))
			return localSetting
		const [browserSetting] = navigator?.language?.split('-')
		if (browserSetting && locals?.find(obj => obj.sign === browserSetting))
			return browserSetting
	}
	const defaultLocale = locals?.find(obj => obj.default === true)?.sign

	return defaultLocale || 'en'
}
