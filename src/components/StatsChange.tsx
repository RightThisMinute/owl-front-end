
import * as React from 'react'

// Typescript wont let us just grab individual lodash modules using a
// normal `import first from 'lodash/first'` statement, but this works
// to avoid bloat.
import first = require('lodash/first')
import find = require('lodash/find')
import last = require('lodash/last')

const { createFragmentContainer, graphql } = require('react-relay')



export interface StatsChangeProps {
	snapshots: {
		views: string,
		likes: string,
		dislikes: string,
		favorites: string,
		comments: string,
	}[]
}

class StatsChange extends React.Component<StatsChangeProps, any> {

	render() {
		const start = first(this.props.snapshots)
		const end  = last(this.props.snapshots)

		const startCount = start != null
			? [start.views, start.likes, start.dislikes, start.favorites,
				 start.comments]
				.map(Number).reduce((sum, num) => sum + num, 0)
			: 0
		const endCount = end != null
			? [end.views, end.likes, end.dislikes, end.favorites, end.comments]
				.map(Number).reduce((sum, num) => sum + num, 0)
			: 0

		const change  = endCount - startCount
		const percent = Math.round((endCount / startCount * 100) - 100) || 0
		const diff    = Math.abs(change)
		const sign = change > 0 ? '+' : change < 0 ? '-' : ''
		const signClass = change > 0 ? 'positive' : change < 0 ? 'negative' : 'none'

		const s = suffixNumber
		const f = formatNumber
		const className = `stats-change ${signClass}`

		return (
			<div className={className}>
				<span className="start-end">
					<span className="start">{s(startCount as number)}</span>
					<span className="separator">►</span>
					<span className="end">{s(endCount as number)}</span>
				</span>
				<span className="diff">
					<span className="sign">{sign}</span>
					<span className="count">{s(diff)}</span>
					<span className="separator">/</span>
					<span className="percent"><em>{f(percent)}</em>%</span>
				</span>
			</div>
		)
	}
}

function formatNumber(number: number): string {
	if (Math.abs(number) >= 10)
		return Math.round(number)
			.toString().split('').reverse()
			.map((num, nx) => (nx+1) % 3 === 0 ? ','+num : num)
			.reverse().join('').replace(/^,/, '')

	const [whole, partial=null] = number.toString().split('.')

	if (partial === null)
		return whole

	const decimal = Math.floor(
		Number(partial) / (10 ** (partial.length - 1))
	).toString()

	return whole + '.' + decimal
}

function suffixNumber(number: number): string {
	const suffixes = [
		['K', 1000], ['M', 1000000], ['B', 1000000000], ['T', 1000000000000]
	].reverse()

	const [suffix='', divisor=1] = find(suffixes, ([_, divisor]) => {
		return (number / (divisor as number)) >= 1
	}) as [string, number]

	const reduced = number / divisor
	return `${formatNumber(reduced)}${suffix}`
}


export default createFragmentContainer(StatsChange, graphql`
	fragment StatsChange_snapshots on VideoStats @relay(plural: true) {
		views
		likes
		dislikes
		favorites
		comments
	}
`)
