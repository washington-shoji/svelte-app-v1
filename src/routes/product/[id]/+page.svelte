<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Product } from '../../../types/prduct';

	onMount(() => {
		getProduct($page.params.id);
	});

	let product: Product | null = null;

	async function getProduct(id: string) {
		const url = `https://dummyjson.com/products/${id}`;
		const response = await fetch(url);
		product = await response.json();
	}
</script>

<div class=" flex items-center justify-center">
	{#if product}
		<p>{product?.title}</p>
	{:else}
		<div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute" />
	{/if}
</div>
