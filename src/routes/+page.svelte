<script lang="ts">
	import { onMount } from 'svelte';
	import type { Product } from '../types/product';
	import Table from '$lib/components/table/Table.svelte';

	onMount(() => {
		getProducts();
	});
	const productUrl = 'https://dummyjson.com/products?limit=10';
	let products: Product[] = [];
	async function getProducts() {
		const response = await fetch(productUrl);
		const data = await response.json();
		products = data.products;
	}
</script>

<div>Page</div>

<Table />
