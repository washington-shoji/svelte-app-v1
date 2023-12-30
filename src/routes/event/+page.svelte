<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { Api, BaseAPIUrl } from '../../endpoints/api_endpoint';
	import type { EventData } from '$lib/types/event-type';
	import EventTable from '$lib/components/event-table/EventTable.svelte';

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

	async function deleteEventData(id: string | undefined) {
		await fetch(`${apiUrl}/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(() => {
			fetchEventData();
		});
	}

	function editData(event: any): void {
		console.warn('event', event);
		goto(`/event/create/?id=${event.detail.id}`);
	}

	function deleteData(event: any): void {
		const id = event.detail.id;
		deleteEventData(id);
	}
</script>

<EventTable tableData={eventData} on:edit={editData} on:delete={deleteData} />
