<script lang="ts">
	import { onMount } from 'svelte';
	import { BaseAPIUrl, Api } from '../../endpoints/api_endpoint';
	import Table from '$lib/components/table/Table.svelte';
	import { goto } from '$app/navigation';

	const apiUrl = `${BaseAPIUrl.Local}/${Api.Dynamic}`;
	onMount(() => {
		fetchDynamicData();
	});

	let response: any;
	$: dynamicData = [];

	async function fetchDynamicData() {
		response = await fetch(apiUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());
		dynamicData = response;
	}

	async function deleteDynamicData(id: string) {
		await fetch(`${apiUrl}/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(() => {
			fetchDynamicData();
		});
	}

	function editData(event: any): void {
		goto(`/api/create/?id=${event.detail.id}`);
	}

	function deleteData(event: any): void {
		const id = event.detail;
		deleteDynamicData(id);
	}
</script>

<Table tableData={dynamicData} on:edit={editData} on:delete={deleteData} />
