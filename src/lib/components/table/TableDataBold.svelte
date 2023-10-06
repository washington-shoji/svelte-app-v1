<script lang="ts">
	export let data: string;
	export let extClass = '';
</script>

<td>
	<div class="flex items-center pl-5">
		<p class="text-base font-medium leading-none text-gray-700 mr-2 {extClass}">
			{data}
		</p>
	</div>
</td>
