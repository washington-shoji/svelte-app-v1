<script lang="ts">
	export let impPlaceholder = 'Placeholder';
	export let formName = 'formName';
	export let inputValue: HTMLInputElement;

	let container;
	let image: HTMLImageElement;
	let showImage = false;

	function onChange(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		if (event.currentTarget.files) {
			const inputValue = event.currentTarget.files[0];

			if (inputValue) {
				showImage = true;
				const reader = new FileReader();
				reader.addEventListener('load', function () {
					return image.setAttribute('src', reader.result as string);
				});
				reader.readAsDataURL(inputValue);
				return;
			}
			showImage = false;
		}
	}
</script>

<div class="mb-8">
	<input
		placeholder={impPlaceholder}
		type="file"
		name={formName}
		id={formName}
		class="sr-only"
		accept=".jpg, .jpeg, .png"
		bind:this={inputValue}
		on:change={(event) => onChange(event)}
	/>
	<label
		for="imageHeader"
		class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
	>
		<div>
			<span class="mb-2 block text-xl font-semibold"> Drop files here </span>
			<span class="mb-2 block text-base font-medium text-[#6B7280]"> Or </span>
			<span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium">
				Browse
			</span>
		</div>
	</label>
	<div bind:this={container}>
		{#if showImage}
			<div
				class=" flex justify-center items-center rounded-md max-w-[400px] max-h-[400px] m-auto p-4"
			>
				<img bind:this={image} src="" alt="Preview" />
			</div>
		{:else}
			<div class=" flex justify-center items-center m-4 rounded-md">
				<span class="material-symbols-outlined">image</span>
			</div>
		{/if}
	</div>
</div>
