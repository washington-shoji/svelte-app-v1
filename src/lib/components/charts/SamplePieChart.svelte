<script lang="ts">
	import {
		Chart,
		Colors,
		PieController,
		CategoryScale,
		LinearScale,
		ArcElement,
		Legend,
		Tooltip,
		type ChartItem
	} from 'chart.js';
	import { onMount } from 'svelte';
	import { CHART_COLORS } from '../../../utils/colours';

	Chart.register(Colors, PieController, ArcElement, CategoryScale, LinearScale, Legend, Tooltip);

	const data = [
		{ year: 2014, count: 22, colour: CHART_COLORS.black },
		{ year: 2015, count: 30, colour: CHART_COLORS.green },
		{ year: 2016, count: 28, colour: CHART_COLORS.red }
	];

	let ctx: ChartItem;
	let canvas: HTMLCanvasElement;

	onMount(() => {
		ctx = canvas.getContext('2d') as ChartItem;
		const chart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: data.map((row) => row.year),
				datasets: [
					{
						label: 'Acquisitions by year',
						data: data.map((row) => row.count),
						backgroundColor: data.map((row) => row.colour),
						borderWidth: 2,
						borderRadius: 6,
						borderColor: CHART_COLORS.white
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
	class=" h-[45vh] sm:h-[40vh] sm:w-[40vw] md:w-[25vw] lg:w-[25vw] rounded-md shadow-md bg-black/[0.05]"
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
