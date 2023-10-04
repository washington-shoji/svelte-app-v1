<script lang="ts">
	import SampleForm from '$lib/components/form/SampleForm.svelte';

	export let form: any;
</script>

<SampleForm />

{#if form?.success}
	<div class="mt-5 bg-white shadow cursor-pointer rounded-xl m-auto md:max-w-3xl">
		<div class="flex">
			<div class="flex-1 py-5 pl-5 overflow-hidden">
				<ul>
					<li class="text-xs text-gray-600 uppercase">Receiver</li>
					<li>Name: {form?.formData.name}</li>
					<li>Address: {form?.formData.address}</li>
				</ul>
			</div>
			<div class="flex-1 py-5 pl-1 overflow-hidden">
				<ul>
					<li class="text-xs text-gray-600 uppercase">Sender</li>
					<li>Plz: {form?.formData.plz}</li>
					<li>City: {form?.formData.city}</li>
				</ul>
			</div>
			<div class="flex-none pt-2.5 pr-2.5 pl-1">
				<button
					type="button"
					class="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
				>
					<span class="material-symbols-outlined">edit</span>
				</button>
			</div>
		</div>
	</div>
{/if}
