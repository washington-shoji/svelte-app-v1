<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import SampleForm from '$lib/components/form/SampleForm.svelte';
	import { page } from '$app/stores';
	import { Api, BaseAPIUrl } from '../../../endpoints/api_endpoint';

	type Data = {
		id: string;
		data: {
			address: string;
			city: string;
			name: string;
			plz: string;
		};
	};

	export let form: any;
	let id = $page.url.searchParams.get('id');
	const apiUrl = `${BaseAPIUrl.Local}/${Api.Dynamic}/${id}`;
	let response: any;
	$: dynamicData = <Data>{};

	onMount(() => {
		if (id) {
			fetchDynamicDataByID();
		}
	});

	afterUpdate(() => {
		if (form) {
			goto('/api');
		}
	});

	async function fetchDynamicDataByID() {
		response = await fetch(apiUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());
		dynamicData = response;
	}
</script>

{#if id && dynamicData}
	<SampleForm
		formAction={'?/updateData'}
		formMethod={'POST'}
		navigatePath={'/api'}
		formData={dynamicData.data}
		id={dynamicData.id}
	/>
{:else}
	<SampleForm formAction={'?/createData'} formMethod={'POST'} navigatePath={'/api'} />
{/if}
