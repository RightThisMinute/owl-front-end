
import * as React from 'react'
import { ChartData, ChartDataSets, ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'

const { createFragmentContainer, graphql } = require('react-relay')


export interface StatsChartProps {
	snapshots: {
		views: string,
		likes: string,
		dislikes: string,
		favorites: string,
		comments: string,
	}[]
}

interface Props extends StatsChartProps {
	scale: number,
	dataPointCount: number,
}

const CHART_OPTS: ChartOptions = {
	responsive: true,
	legend: { display: false },
	scales: {
		xAxes: [{
			display: false,
			gridLines: { display: false },
		}],
		yAxes: [{
			display: false,
			stacked: true,
			ticks: { display: false },
			gridLines: { display: false },
		}],
		gridLines: { display: false },
	},
}

const MAX_POINTS = 100

class StatsChart extends React.Component<Props, any> {

	render() {
		const { data } = this

		const totals  = data.datasets!.reduce((accl: number[], { data }) => {
			(data as number[]).forEach((value, index) => {
				accl[index] = (accl[index] || 0) + value
			})
			return accl
		}, [])

		const min = totals.length > 0 ? Math.min(...totals) : 0
		  let max = totals.length > 0 ? Math.max(...totals) : 1

		// Prevent small changes appearing the same as big changes.
		const { scale } = this.props
		if (max < scale*min)
			max = (scale*min)

		const yAxes = CHART_OPTS.scales!.yAxes!.map(axis => {
			return Object.assign({}, axis, {
				ticks: {
					min, max,
					beginAtZero: false,
				},
			})
		})

		const scales = Object.assign({}, CHART_OPTS.scales, {
			yAxes,
		})

		const opts = Object.assign({}, CHART_OPTS, { scales })

		return (
			<div className="chart-box">
				<Line data={data} options={opts} />
			</div>
		)
	}

	private get data(): ChartData {
		let { snapshots } = this.props
		const { dataPointCount: trueDataPointCount } = this.props
		const dataPointCount = Math.min(MAX_POINTS, trueDataPointCount)

		const labels: string[] = (new Array(dataPointCount)
			.map((_, index) => `${index}`))

		let datasets: ChartDataSets[] = [
			{ label: 'views',     borderColor: '#777', },
			{ label: 'dislikes',  borderColor: '#999', },
			{ label: 'likes',     borderColor: '#bbb', },
			{ label: 'comments',  borderColor: '#555', },
			{ label: 'favorites', borderColor: '#333', },
		]

		datasets = datasets.map(dataset => {
			dataset.backgroundColor = dataset.backgroundColor || dataset.borderColor
			dataset.data = []
			dataset.pointRadius = 1

			return dataset
		})

		if (MAX_POINTS < trueDataPointCount) {
			const ratio = trueDataPointCount / (MAX_POINTS - 1)

			snapshots = snapshots.filter((_, index) => {
				if (index === 0 || index === snapshots.length - 1)
					return true

				const remainder = index % ratio

				if (remainder < 1)
					return true

				return false
			})
		}

		snapshots.forEach(snapshot => {
			datasets.forEach(({ label='[ERROR]', data=[] }) => {
				(data as number[]).push(Number(snapshot[label]))
			})
		})

		const maxCount = 1

		return { labels, datasets }
	}
}


export default createFragmentContainer(StatsChart, graphql`
	fragment StatsChart_snapshots on VideoStats @relay(plural: true) {
		views
		likes
		dislikes
		favorites
		comments
	}
`)
