<script lang="ts">
	import Button from '../button/Button.svelte';

	export let navigatePath: string = '';
	export let addLabel: string = '';
</script>

<div class="flex flex-col gap-2 sm:flex sm:flex-row items-center justify-between">
	<div class=" w-full sm:w-auto items-center">
		<a
			class="grow sm:grow-0 rounded-md focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-black shadow-sm"
			href="/#"
		>
			<div class=" text-center py-2 px-8 bg-gray-100 text-black rounded-md">
				<p>All</p>
			</div>
		</a>
	</div>
	<a class=" w-full sm:w-auto" href={navigatePath}>
		<Button
			title={`Add ${addLabel}`}
			icon={'add'}
			colour={'text-white'}
			extClass={'inline-flex items-start justify-start'}
		/>
	</a>
</div>
