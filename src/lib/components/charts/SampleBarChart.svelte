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
						backgroundColor: '#000000',
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
							color: '#000000',
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

<div class="h-[30vh] w-[100vw] sm:h-[50vh] sm:w-[60vw]">
	<canvas bind:this={canvas} />
</div>

<style>
	canvas {
		/* width: 100%;
		height: 100%; */
		background-color: transparent;
	}
</style>
