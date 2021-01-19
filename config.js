import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const apiPath = publicRuntimeConfig.API_PATH