<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TableDataBold from './TableDataBold.svelte';
	import TableData from './TableData.svelte';
	import TableActionHeader from './TableActionHeader.svelte';
	import TableDataButton from './TableDataButton.svelte';

	export let tableData: any[] = [];

	const dispatch = createEventDispatcher();

	function editAction(data: any) {
		dispatch('edit', data);
	}

	function deleteAction(id: string) {
		dispatch('delete', id);
	}
</script>

<div class="sm:px-6 w-full">
	<!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->

	<div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
		<TableActionHeader navigatePath={'/api/create'} />

		<div class="mt-7 overflow-x-auto">
			<table class="w-full whitespace-nowrap">
				<thead class=" bg-black rounded-md mb-4 font-semibold text-sm text-white">
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Street</th>
						<th>City</th>
						<th>Code</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{#each tableData as item}
						<tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
							<TableDataBold data={item.id} />
							<TableData
								extClass={'py-3 px-3 text-sm focus:outline-none bg-red-100 rounded'}
								data={item.data.name}
							/>

							<TableData data={item.data.address} />
							<TableData data={item.data.city} />
							<TableData data={item.data.plz} />
							<TableDataButton
								on:click={() => editAction(item)}
								icon={'edit'}
								title={'Edit'}
								extClass={'hover:ring-black hover:text-black hover:bg-gray-200'}
							/>
							<TableDataButton
								on:click={() => deleteAction(item.id)}
								icon={'delete'}
								title={'Delete'}
								extClass={'hover:ring-red-600 hover:text-red-600 hover:bg-gray-200 hover:bg-red-200'}
							/>
						</tr>
						<tr class="h-3" />
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
