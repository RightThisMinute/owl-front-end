
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

class StatsChart extends React.Component<StatsChartProps, any> {

	render() {
		const { data } = this

		const totals  = data.datasets!.reduce((accl: number[], { data }) => {
			(data as number[]).forEach((value, index) => {
				accl[index] = (accl[index] || 0) + value
			})
			return accl
		}, [])

		const min = Math.min(...totals)
		  let max = Math.max(...totals)

		// Prevent small changes appearing the same as big changes.
		if (max < 2*min)
			max = (2*min)

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
		const labels: string[] = []

		let datasets: ChartDataSets[] = [
			{ label: 'views',     borderColor: '#bbb', },
			{ label: 'dislikes',  borderColor: '#999', },
			{ label: 'likes',     borderColor: '#777', },
			{ label: 'comments',  borderColor: '#555', },
			{ label: 'favorites', borderColor: '#333', },
		]

		datasets = datasets.map(dataset => {
			dataset.backgroundColor = dataset.borderColor
			dataset.data = []
			dataset.pointRadius = 0

			return dataset
		})

		let count = 0

		this.props.snapshots.forEach(snapshot => {
			labels.push(`${count++}`)
			
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
