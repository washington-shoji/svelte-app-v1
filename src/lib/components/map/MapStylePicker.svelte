<script lang="ts">
	type Style = {
		label: string;
		value: string;
	};

	export let currentStyle: string;

	const MAPBOX_DEFAULT_MAPSTYLES: Style[] = [
		{ label: 'Streets V10', value: 'mapbox://styles/mapbox/streets-v10' },
		{ label: 'Outdoors V10', value: 'mapbox://styles/mapbox/outdoors-v10' },
		{ label: 'Light V9', value: 'mapbox://styles/mapbox/light-v9' },
		{ label: 'Dark V9', value: 'mapbox://styles/mapbox/dark-v9' },
		{ label: 'Satellite V9', value: 'mapbox://styles/mapbox/satellite-v9' },
		{
			label: 'Satellite Streets V10',
			value: 'mapbox://styles/mapbox/satellite-streets-v10'
		},
		{
			label: 'Navigation Preview Day V4',
			value: 'mapbox://styles/mapbox/navigation-preview-day-v4'
		},
		{
			label: 'Navitation Preview Night V4',
			value: 'mapbox://styles/mapbox/navigation-preview-night-v4'
		},
		{
			label: 'Navigation Guidance Day V4',
			value: 'mapbox://styles/mapbox/navigation-guidance-day-v4'
		},
		{
			label: 'Navigation Guidance Night V4',
			value: 'mapbox://styles/mapbox/navigation-guidance-night-v4'
		}
	];
</script>

<select
	class=" absolute bottom-[10px] left-[5px] z-10 bg-black text-white rounded-md p-2 shadow-md"
	bind:value={currentStyle}
	on:change
>
	{#each MAPBOX_DEFAULT_MAPSTYLES as style (style.value)}
		<option value={style.value}>
			{style.label}
		</option>
	{/each}
</select>
