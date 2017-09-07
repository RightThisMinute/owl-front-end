
const yamlConfig = require('config-yaml')
import * as path from 'path'

import * as createDebug from 'debug'
const debug = createDebug('config')

export interface Config {

	server: {
		graphqlURL: string
	}

	client: {
		graphqlURL: string
	}

}

const config: Config = yamlConfig(path.resolve(__dirname, '../config.yaml'))

export default config
