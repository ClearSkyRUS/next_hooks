import { useEffect, useState } from 'react'

const useWindow = () => {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if (progress >= 100) {
			setProgress(0)
		}
	}, [progress])

	return { progress, setProgress }
}

export default useWindow
