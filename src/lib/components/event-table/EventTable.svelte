<script lang="ts">
	import { TableActionHeader, TableData, TableDataBold, TableDataButton } from '$lib';
	import type { EventData } from '$lib/types/event-type';
	import { createEventDispatcher } from 'svelte';
	import TableDataTime from '../table/TableDataTime.svelte';

	export let tableData: EventData[] = [];

	const dispatch = createEventDispatcher();

	function editAction(data?: EventData) {
		dispatch('edit', data);
	}

	function deleteAction(id?: string) {
		dispatch('delete', id);
	}
</script>

<div class="sm:px-6 w-full">
	<!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->

	<div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
		<TableActionHeader addLabel={'Event'} navigatePath={'/event/create'} />

		<div class="mt-7 overflow-x-auto">
			<table class="w-full whitespace-nowrap">
				<thead class=" bg-black rounded-md mb-4 font-semibold text-sm text-white">
					<tr>
						<th>Image</th>
						<th>Title</th>
						<th>Short Description</th>
						<th>Date</th>
						<th>Registration</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{#each tableData as item}
						<tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
							<div class=" flex justify-center items-center h-[120px] w-[120px]">
								<img src={item.imageUrl} alt={item.title} />
							</div>
							<TableDataBold data={item.title} />
							<TableData
								extClass={'py-3 px-3 text-sm focus:outline-none bg-red-100 rounded'}
								data={item.description}
							/>

							<TableDataTime data={item.date} />
							<TableDataTime data={item.registration} />

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
