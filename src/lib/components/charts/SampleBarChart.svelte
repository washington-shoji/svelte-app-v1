<script lang="ts">
	import {
		Chart,
		Colors,
		BarController,
		CategoryScale,
		LinearScale,
		BarElement,
		Legend,
		Tooltip,
		type ChartItem
	} from 'chart.js';
	import { onMount } from 'svelte';
	import { CHART_COLORS } from '../../../utils/colours';

	Chart.register(Colors, BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);

	const data = [
		{ year: 2010, count: 10 },
		{ year: 2011, count: 20 },
		{ year: 2012, count: 15 },
		{ year: 2013, count: 25 },
		{ year: 2014, count: 22 },
		{ year: 2015, count: 30 },
		{ year: 2016, count: 28 }
	];

	let ctx: ChartItem;
	let canvas: HTMLCanvasElement;

	onMount(() => {
		ctx = canvas.getContext('2d') as ChartItem;
		const chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: data.map((row) => row.year),
				datasets: [
					{
						label: 'Acquisitions by year',
						data: data.map((row) => row.count),
						backgroundColor: CHART_COLORS.black,
						borderWidth: 2,
						borderRadius: 6,
						borderColor: 'white',
						borderSkipped: false
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: true,
						labels: {
							color: CHART_COLORS.black,
							font: {
								size: 14
							}
						}
					},
					title: {
						display: true,
						text: 'Chart.js Bar Chart'
					}
				},
				scales: {
					x: {
						grid: {
							display: false
						}
					},
					y: {
						grid: {
							display: false
						}
					}
				}
			}
		});
	});
</script>

<div
	class="h-[35vh] sm:h-[35vh] sm:w-[40vw] md:h-[40vh] md:w-[50vw] lg:h-[60vh] lg:w-[55vw] rounded-md shadow-md bg-black/[0.05] flex items-center"
>
	<canvas bind:this={canvas} />
</div>

<style>
	canvas {
		/* width: 100%;
		height: 100%; */
		background-color: transparent;
	}
</style>
