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

	<div class="grid grid-cols-1 md:grid-cols-2 my-4">
		<div class="bg-red-300">
			<h5>1</h5>
		</div>

		<div class="bg-blue-300">
			<h5>2</h5>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 my-4">
		<div class="bg-red-300">
			<h5>1</h5>
		</div>

		<div class="bg-blue-300">
			<h5>2</h5>
		</div>
	</div>
</div>

<!-- Grid wrapper -->
<div class="grid grid-cols-1 md:grid-cols-2">
	<!-- Columns -->
	<!-- <div class="bg-red-300">
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

	<div class="bg-teal-300">
		<h5>5</h5>
	</div>

	<div class="bg-yellow-300">
		<h5>6</h5>
	</div>

	<div class="bg-slate-300">
		<h5>7</h5>
	</div>

	<div class="bg-pink-300">
		<h5>8</h5>
	</div>

	<div class="bg-violet-300">
		<h5>9</h5>
	</div>

	<div class="bg-amber-300">
		<h5>10</h5>
	</div>

	<div class="bg-cyan-300">
		<h5>11</h5>
	</div>

	<div class="bg-fuchsia-300">
		<h5>12</h5>
	</div> -->
	<!-- Columns -->
</div>
<!-- Grid wrapper -->
