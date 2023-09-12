<script lang="ts">
	import { onMount } from 'svelte';
	import type { Product } from '../types/prduct';

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

<div class=" grid justify-items-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-4 h-full">
	{#each products as product}
		<div class=" flex-col flex gap-10 w-full rounded-md bg-slate-100 shadow-md p-10 m-10">
			<img class=" shadow-sm rounded-md" src={product.thumbnail} alt="" />
			<div>
				<h1 class=" text-4xl">{product.title}</h1>
				<p class=" text-sm">{product.description}</p>

				<div class=" flex items-center gap-5 mt-5">
					<p class=" text-xl font-bold">${product.price}</p>
					<a
						class=" w-full rounded-md p-1 bg-blue-400 hover:bg-blue-500 active:bg-blue-700"
						href={`/product/${product.id}`}
						>View {product.title}
					</a>
				</div>
				<div class=" flex items-center gap-5 mt-1">
					<p class=" flex gap-1 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-yellow-500"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>{product.rating}
					</p>
					<p>{product.stock}</p>
					<p class=" w-full uppercase rounded-md p-1 bg-slate-200 shadow-sm">
						{product.category}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>
