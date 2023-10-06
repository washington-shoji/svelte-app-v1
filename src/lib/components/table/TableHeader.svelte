<script>
	import Button from '../button/Button.svelte';
</script>

<div class="sm:flex items-center justify-between">
	<div class="flex items-center">
		<a
			class="rounded-md focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-black"
			href="/#"
		>
			<div class="py-2 px-8 bg-gray-100 text-black rounded-md">
				<p>All</p>
			</div>
		</a>
	</div>
	<Button
		title={'Add Task'}
		icon={'add'}
		colour={'text-white'}
		extClass={'inline-flex items-start justify-start'}
	/>
</div>
