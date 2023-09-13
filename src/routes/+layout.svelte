<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
	export const navOptions = [
		{ page: 'Home', path: '/' },
		{ page: 'Posts', path: '/posts' }
	];

	let intSelected = 0;

	function changeComponent(event: number) {
		intSelected = event;
	}
</script>

<div class=" max-h-screen flex flex-no-wrap">
	<Navbar />

	<div class=" container overflow-scroll mx-auto py-10 md:w-4/5 w-11/12 px-6">
		<!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
		<div class="w-full rounded border-dashed border-2 border-gray-300">
			<!-- Place your content here -->
			<slot />
		</div>
	</div>
</div>

<!-- <nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						{#each navOptions as navLink, index}
							<a
								href={navLink.path}
								on:click={() => changeComponent(index)}
								class="{intSelected === index
									? 'bg-gray-900'
									: 'text-gray-300'}  text-white rounded-md px-3 py-2 text-sm font-medium"
								aria-current="page">{navLink.page}</a
							>
						{/each}
					</div>
				</div>
			</div>

			<div class="-mr-2 flex md:hidden"> -->
<!-- Mobile menu button -->
<!-- <button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="absolute -inset-0.5" />
					<span class="sr-only">Open main menu</span> -->
<!-- Menu open: "hidden", Menu closed: "block" -->
<!-- <svg
						class="block h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg> -->
<!-- Menu open: "block", Menu closed: "hidden" -->
<!-- <svg
						class="hidden h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div> -->

<!-- Mobile menu, show/hide based on menu state. -->
<!-- <div class="md:hidden" id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
			{#each navOptions as navLink, index}
				<a
					href={navLink.path}
					on:click={() => changeComponent(index)}
					class={intSelected === index
						? 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
						: 'hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}
					aria-current="page">{navLink.page}</a
				>
			{/each}
		</div>
	</div>
</nav> -->
