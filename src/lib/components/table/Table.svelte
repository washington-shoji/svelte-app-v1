<script lang="ts">
	import TableDataBold from './TableDataBold.svelte';
	import TableData from './TableData.svelte';
	import TableHeader from './TableHeader.svelte';
	import TableDataButton from './TableDataButton.svelte';
</script>

<div class="sm:px-6 w-full">
	<!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->

	<div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
		<TableHeader />

		<div class="mt-7 overflow-x-auto">
			<table class="w-full whitespace-nowrap">
				<tbody>
					<tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
						<TableDataBold data={'Marketing Keynote Presentation'} />
						<TableData data={'Urgent'} />
						<TableData
							extClass={'py-3 px-3 text-sm focus:outline-none bg-red-100 rounded'}
							data={'Due today at 18:00'}
						/>
						<TableDataButton
							icon={'edit'}
							title={'Edit'}
							extClass={'hover:ring-black hover:text-black hover:bg-gray-200'}
						/>
						<TableDataButton
							icon={'delete'}
							title={'Delete'}
							extClass={'hover:ring-red-600 hover:text-red-600 hover:bg-gray-200 hover:bg-red-200'}
						/>
					</tr>
					<tr class="h-3" />
				</tbody>
			</table>
		</div>
	</div>
</div>
