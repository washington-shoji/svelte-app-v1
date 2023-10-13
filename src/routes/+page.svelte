<script lang="ts">
	import { onMount } from 'svelte';
	import type { Product } from '../types/product';

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
</script>

<div>
	<div class="bg-red-300">
		<h5>1</h5>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-4 my-4">
		<div class="bg-red-300">
			<h5>1</h5>
		</div>

		<div class="bg-blue-300">
			<h5>2</h5>
		</div>

		<div class="bg-green-300">
			<h5>3</h5>
		</div>

		<div class="bg-orange-300">
			<h5>4</h5>
		</div>
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
