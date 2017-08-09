
import * as React from 'react'
import { ChartData, ChartDataSets, ChartOptions } from 'chart.js'
import first = require('lodash/first')
import last = require('lodash/last')
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

		const { min, max }  = data.datasets!.reduce((accl, { data }) => {
			accl.min += first(data as number[]) || 0
			accl.max += last(data as number[]) || 0
			return accl
		}, { min: 0, max: 0 })

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
			{
				label: 'views',
				borderColor: 'rgb(214, 214, 214)',
			},
			{
				label: 'dislikes',
				borderColor: 'rgb(255, 126, 121)',
			},
			{
				label: 'likes',
				borderColor: 'rgb(212, 251, 121)',
			},
			{
				label: 'favorites',
				borderColor: 'rgb(215, 131, 255)',
			},
			{
				label: 'comments',
				borderColor: 'rgb(118, 214, 255)',
			},
		]

		datasets = datasets.map(dataset => {
			dataset.backgroundColor = dataset.borderColor
			dataset.data = []
			dataset.pointRadius = 0
			// dataset.fill = false

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
