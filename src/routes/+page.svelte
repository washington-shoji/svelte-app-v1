<script lang="ts">
	import { Api, BaseAPIUrl, type EventData } from '$lib';
	import PublicEventCard from '$lib/components/event-card/PublicEventCard.svelte';
	import { onMount } from 'svelte';

	const apiUrl = `${BaseAPIUrl.Local}/${Api.Event}`;
	onMount(() => {
		fetchEventData();
	});

	let response: EventData[];
	$: eventData = [] as EventData[];

	async function fetchEventData() {
		response = await fetch(apiUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());
		eventData = response;
	}
</script>

<main class="flex flex-col items-center justify-center lg:w-4/5 min-h-screen m-auto">
	<div class=" flex flex-col gap-4 items-center justify-center p-8">
		<h1 class=" text-center text-3xl font-bold tracking-tight">
			Welcome to Event Now - Where Your Event Dreams Come Alive!
		</h1>
		<p class=" text-center tracking-tight">
			Our passion is to bring your vision to life, transforming your ideas into unforgettable
			experiences. From intimate gatherings to grand-scale celebrations, we are your partners in
			crafting events that are not just events, but lifetime memories.
		</p>
	</div>
	<div class=" flex flex-col gap-4 items-center justify-center p-8">
		<h2 class=" text-center text-lg font-semibold">All the latest events</h2>
		<div class=" grid sm:grid-cols-2 gap-4">
			{#each eventData as event}
				<PublicEventCard eventData={event} />
			{/each}
		</div>
	</div>
</main>
