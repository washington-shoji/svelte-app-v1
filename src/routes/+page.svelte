<script lang="ts">
	import { onMount } from 'svelte';
	import type { Product, SimpleCardType } from '../types/product';
	import SimpleCard from '$lib/components/card/SimpleCard.svelte';
	import SimpleNotification from '$lib/components/notification/SimpleNotification.svelte';
	import SampleBarChart from '$lib/components/charts/SampleBarChart.svelte';
	import SamplePieChart from '$lib/components/charts/SamplePieChart.svelte';

	onMount(() => {
		//getProducts();
	});
	const productUrl = 'https://dummyjson.com/products?limit=10';
	let products: Product[] = [];
	async function getProducts() {
		const response = await fetch(productUrl);
		const data = await response.json();
		products = data.products;
	}

	const cards: SimpleCardType[] = [
		{ title: 'Card 1', info: '1000', icon: 'info', colour: 'bg-black' },
		{ title: 'Card 2', info: '10', icon: 'schema', colour: 'bg-green-300' },
		{ title: 'Card 3', info: '3000', icon: 'settings_accessibility', colour: 'bg-blue-300' },
		{ title: 'Card 4', info: '1', icon: 'troubleshoot', colour: 'bg-red-500' }
	];
</script>

<div>
	<SimpleNotification />

	<div class="grid grid-cols-1 gap-2 sm:grid-cols-4 my-4">
		{#each cards as card}
			<SimpleCard title={card.title} info={card.info} icon={card.icon} cardColour={card.colour} />
		{/each}
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 my-4">
		<div class="sm:col-span-3 md:col-span-4">
			<SampleBarChart />
		</div>

		<div class=" sm:col-span-2 md:col-span-2 rounded-md shadow-md bg-black">
			<h5 class=" text-white">2</h5>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 my-4">
		<div class=" sm:col-span-3 md:col-span-2">
			<SamplePieChart />
		</div>

		<div class="sm:col-span-2 md:col-span-4 rounded-md shadow-md bg-black">
			<h5 class=" text-white">2</h5>
		</div>
	</div>
</div>
