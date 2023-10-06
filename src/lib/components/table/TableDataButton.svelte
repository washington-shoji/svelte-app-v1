<script lang="ts">
	export let title: string;
	export let icon: string;
	export let extClass = '';
</script>

<td class="pl-4">
	<button
		class="flex gap-2 items-center hover:ring-2 hover:ring-offset-2 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded focus:outline-none {extClass}"
	>
		<span class="material-symbols-outlined">{icon}</span>
		{title}
	</button>
</td>
