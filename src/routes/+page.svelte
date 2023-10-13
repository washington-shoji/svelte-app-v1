<script lang="ts">
	import { onMount } from 'svelte';
	import type { Product, SimpleCardType } from '../types/product';
	import SimpleCard from '$lib/components/card/SimpleCard.svelte';

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
	<div class="bg-red-300">
		<h5>1</h5>
	</div>

	<div class="grid grid-cols-1 gap-2 md:grid-cols-4 my-4">
		{#each cards as card}
			<SimpleCard title={card.title} info={card.info} icon={card.icon} cardColour={card.colour} />
		{/each}
	</div>

	<div class="grid grid-cols-1 md:grid-cols-5 my-4">
		<div class="bg-red-300 col-span-4">
			<h5>1</h5>
		</div>

		<div class="bg-blue-300 col-span-1">
			<h5>2</h5>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-5 my-4">
		<div class="bg-red-300 col-span-1">
			<h5>1</h5>
		</div>

		<div class="bg-blue-300 col-span-4">
			<h5>2</h5>
		</div>
	</div>
</div>
