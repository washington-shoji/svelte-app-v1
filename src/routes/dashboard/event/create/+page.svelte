<script lang="ts">
	import { page } from '$app/stores';
	import { Api, BaseAPIUrl, EventForm } from '$lib';
	import type { EventDataReq } from '$lib/types/event-type';

	let id = $page.url.searchParams.get('id');
	const url = `${BaseAPIUrl.Local}/${Api.Event}`;

	async function fetchEventDataByID(): Promise<EventDataReq> {
		const response: EventDataReq = await fetch(`${url}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());
		return response;
	}
</script>

<div class="flex flex-col md:flex-row justify-center gap-4 mx-1 md:m-auto md:max-w-5xl">
	{#await fetchEventDataByID()}
		<span>Loading...</span>
	{:then response}
		{#if id && response}
			<EventForm
				formAction={'?/updateData'}
				formMethod={'PATCH'}
				navigatePath={'/dashboard/event'}
				formData={response}
				{id}
			/>
		{:else}
			<EventForm
				formAction={'?/createData'}
				formMethod={'POST'}
				navigatePath={'/dashboard/event'}
			/>
		{/if}
	{/await}
</div>
