<script lang="ts">
	import { page } from '$app/stores';
	import { EventForm } from '$lib';
	import type { EventDataReq } from '$lib/types/event-type';
	import { Api, BaseAPIUrl } from '../../../endpoints/api_endpoint';

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
				navigatePath={'/event'}
				formData={response}
				{id}
			/>
		{:else}
			<EventForm formAction={'?/createData'} formMethod={'POST'} navigatePath={'/event'} />
		{/if}
	{/await}
</div>
