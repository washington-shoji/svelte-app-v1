<script lang="ts">
	export let title = 'Card title';
	export let info = 'Card info';
	export let icon = 'info';
</script>

<div class="rounded-md shadow-md bg-black max-w-[180px]">
	<div class=" flex items-center gap-3 p-3">
		<span class="material-symbols-outlined p-2 bg-white rounded-md">{icon}</span>
		<div class=" text-white">
			<p class=" text-xs">{title}</p>
			<p class=" text-2xl">{info}</p>
		</div>
	</div>
</div>
