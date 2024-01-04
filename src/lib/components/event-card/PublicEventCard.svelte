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

<div class=" flex flex-col justify-between gap-4 rounded-sm shadow-md">
	<div class=" flex flex-col gap-4">
		<div class=" flex flex-col">
			<img class=" rounded-t-sm" src={eventData.imageUrl} alt="" />
		</div>
		<div class=" flex flex-col gap-4 p-2">
			<div class=" flex flex-col gap-4">
				<h3 class=" font-semibold">{eventData.title}</h3>
				<div class=" flex flex-col gap-2">
					<div class=" flex items-center gap-2">
						<span class="material-symbols-outlined">calendar_month</span>
						<span class=" font-medium">{formatDate(eventData.date)}</span>
					</div>
					<div class=" flex items-center gap-2">
						<span class="material-symbols-outlined">schedule</span>
						<span class=" font-medium">{formatTime(eventData.date)}</span>
					</div>
				</div>
			</div>
			<div class=" flex flex-col gap-4">
				<div class=" flex flex-col gap-2">
					<p class=" text-black/80">{eventData.shortDescription}</p>
					<button class=" rounded-sm p-2 bg-black text-white" on:click={toggleShowMore}>
						{!showMore ? 'Show description' : 'Hide description'}
					</button>
					{#if showMore}
						<p>{eventData.description}</p>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div class=" flex flex-col p-2">
		<button class=" w-full rounded-sm p-2 bg-black text-white"> Register </button>
	</div>
</div>
