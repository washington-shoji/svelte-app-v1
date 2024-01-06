<script lang="ts">
	export let data: string;
	export let extClass = '';

	const date = new Date(data);
</script>

<td class="pl-5">
	<div class="flex items-center">
		<p class="text-sm leading-none text-gray-600 ml-2 {extClass}">{date.toLocaleDateString()}</p>
	</div>
</td>
