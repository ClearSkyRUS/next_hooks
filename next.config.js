const path = require('path')
const withLess = require('@zeit/next-less')
const withPlugins = require('next-compose-plugins')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanCss = require('clean-css')

const nextConfig = {
	webpack(config) {
		config.resolve.modules.push(path.resolve('./'))
		config.resolve.alias['../../theme.config$'] = path.join(config.context, '/styles/theme.config')
		config.module.rules.push({
			test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 8192,
					publicPath: '/_next/static/',
					outputPath: 'static/',
					name: '[name].[ext]',
					esModule: false
				}
			}
		})
		config.plugins.push(
			new OptimizeCssAssetsPlugin({
				assetNameRegExp: /\.css$/g,
				cssProcessor: CleanCss,
				cssProcessorOptions: {
					sourceMap: true
				},
				canPrint: true
			})
		)
		return config
	},
	publicRuntimeConfig: {
		API_PATH: process.env.API_PATH,
		AD_SENSE_CODE: process.env.AD_SENSE_CODE,
	}
};

const plugins = [withLess]
module.exports = withPlugins(plugins, nextConfig)