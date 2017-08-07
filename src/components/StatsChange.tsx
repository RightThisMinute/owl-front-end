
import * as React from 'react'

// Typescript wont let use just grab individual lodash modules using a
// normal `import first from 'lodash/first'` statement, but this works
// to avoid bloat.
import first = require('lodash/first')
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
		const percent = Math.round((endCount / startCount * 100) - 100)
		const diff    = Math.abs(change)
		const sign = change > 0 ? '+' : change < 0 ? '-' : ''
		const signClass = change > 0 ? 'positive' : change < 0 ? 'negative' : 'none'

		const f = formatNumber
		const className = `stats-change ${signClass}`

		return (
			<div className={className}>
				<span className="start-end">
					<span className="start">{f(startCount as number)}</span>
					<span className="separator">►</span>
					<span className="end">{f(endCount as number)}</span>
				</span>
				<span className="diff">
					<span className="sign">{sign}</span>
					<span className="count">{f(diff)}</span>
					<span className="separator">/</span>
					<span className="percent"><em>{f(percent)}</em>%</span>
				</span>
			</div>
		)
	}
}

function formatNumber(number: number): string {
	return Math.round(number)
		.toString().split('').reverse()
		.map((num, nx) => (nx+1) % 3 === 0 ? ','+num : num)
		.reverse().join('').replace(/^,/, '')
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
