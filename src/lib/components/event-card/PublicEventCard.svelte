<script lang="ts">
	import type { EventData } from '$lib/types/event-type';

	export let eventData: EventData;

	let showMore = false;

	function toggleShowMore(): void {
		showMore = !showMore;
	}

	function formatDate(date: string): string {
		return new Date(date).toDateString();
	}
	function formatTime(date: string): string {
		return new Date(date).toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit'
		});
	}
</script>

<div
	class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
	<img class="rounded-t-lg" src={eventData.imageUrl} alt="" />
	<div class="p-5 flex flex-col justify-center items-center sm:items-start">
		<h5
			class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-left"
		>
			{eventData.title}
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center sm:text-left">
			{eventData.shortDescription}
		</p>
		<div
			class=" flex flex-col items-center sm:items-start gap-2 mb-3 text-gray-900 dark:text-white"
		>
			<div class=" flex items-center gap-2">
				<span class="material-symbols-outlined">calendar_month</span>
				<span class=" font-medium">{formatDate(eventData.date)}</span>
			</div>
			<div class=" flex items-center gap-2">
				<span class="material-symbols-outlined">schedule</span>
				<span class=" font-medium">{formatTime(eventData.date)}</span>
			</div>
		</div>
		{#if showMore}
			<p class="font-normal text-gray-700 dark:text-gray-400 text-center sm:text-left">
				{eventData.description}
			</p>
		{/if}
		<div class=" flex flex-col sm:items-center sm:justify-center sm:flex-row gap-4 w-full mt-8">
			<button
				class="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				on:click={toggleShowMore}
			>
				{!showMore ? 'Show description' : 'Hide description'}
				<span class="material-symbols-outlined">{showMore ? 'expand_less' : 'expand_more'}</span>
			</button>
			<button
				class="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Register
				<span class="material-symbols-outlined">how_to_reg</span>
			</button>
		</div>
	</div>
</div>
