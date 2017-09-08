
const fs = require('fs')
const path = require('path')
const yamlConfig = require('config-yaml')

const dataPath = path.resolve(__dirname, '../data')

symlinkDataDir()

function symlinkDataDir() {
	if (fs.existsSync(dataPath))
		return;

	const config = yamlConfig(path.resolve(__dirname, '../config.yaml'))
	if (!config)
		throw Error('Could not load config.')

	if (!config.dataSourcePath)
		throw Error('`config.dataSourcePath` not defined.')

	const sourcePath = path.resolve(__dirname, '..', config.dataSourcePath)
	if (!fs.existsSync(sourcePath))
		throw Error(`Could not find source data directory at [${sourcePath}].`)

	fs.symlinkSync(sourcePath, dataPath)
}

