
import * as React from 'react'
import { ChartData, ChartDataSets, ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'

const { createFragmentContainer, graphql } = require('react-relay')


interface StatsChartProps {
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
	// elements: { point: { radius: 0 } },
	scales: {
		xAxes: [{
			gridLines: { display: false },
		}],
		yAxes: [{
			stacked: true,
			ticks: { display: false },
			gridLines: { display: false },
		}],
		gridLines: { display: false },
	},
}

class StatsChart extends React.Component<StatsChartProps, any> {

	render() { return (
		<div className="chart-box">
			<Line data={this.data} options={CHART_OPTS} />
		</div>
	)}

	private get data(): ChartData {
		let datasets: ChartDataSets[] = [
			{
				label: 'views',
				borderColor: 'rgb(214, 214, 214)',
			  backgroundColor: 'rgb(214, 214, 214)',
				data: [],
			},
			{
				label: 'dislikes',
				borderColor: 'rgb(255, 126, 121)',
				backgroundColor: 'rgb(255, 126, 121)',
				data: [],
			},
			{
				label: 'likes',
				borderColor: 'rgb(212, 251, 121)',
				backgroundColor: 'rgb(212, 251, 121)',
				data: [],
			},
			{
				label: 'favorites',
				borderColor: 'rgb(215, 131, 255)',
				backgroundColor: 'rgb(215, 131, 255)',
				data: [],
			},
			{
				label: 'comments',
				borderColor: 'rgb(118, 214, 255)',
				backgroundColor: 'rgb(118, 214, 255)',
				data: [],
			},
		]

		this.props.snapshots.forEach(snapshot => {
			datasets.forEach(({ label='[ERROR]', data=[] }) => {
				(data as number[]).push(Number(snapshot[label]))
			})
		})

		return { datasets }
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
