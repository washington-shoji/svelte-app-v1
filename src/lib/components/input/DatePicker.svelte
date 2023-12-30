<script lang="ts">
	export let impPlaceholder = 'Placeholder';
	export let formName = 'formName';
	export let inputValue = '';
	export let minDate = '';
	export let maxDate = '2099-01-14T00:00';
</script>

<input
	type="datetime-local"
	placeholder={impPlaceholder}
	name={formName}
	bind:value={inputValue}
	min={minDate}
	max={maxDate}
	class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:outline-none focus:shadow-outline focus:ring-1 ring-offset-current ring-offset-2 ring-black"
/>
