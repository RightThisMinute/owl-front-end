
const yamlConfig = require('config-yaml')
import * as path from 'path'

import * as createDebug from 'debug'
const debug = createDebug('config')

export interface Config {

	dataSourcePath: string

	server: {
		port: number
		graphqlURL: string
	}

	client: {
		graphqlURL: string
		graphqlRequestHeaders?: { [key: string]: string }
	}

}

const config: Config = yamlConfig(path.resolve(__dirname, '../config.yaml'))

export default config
