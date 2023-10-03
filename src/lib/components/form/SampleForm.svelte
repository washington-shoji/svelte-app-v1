<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '../button/Button.svelte';
	import Input from '../input/Input.svelte';

	let showForm = false;

	function toggleShowForm(): void {
		showForm = !showForm;
	}
</script>

<div class="m-auto md:max-w-3xl">
	<div>
		<Button
			on:toggle={toggleShowForm}
			icon={'add'}
			title={'Added data'}
			colour={'text-white'}
			buttonType={'button'}
		/>

		{#if showForm}
			<form action="?/contactUs" method="POST" use:enhance>
				<div class="mt-5 bg-white rounded-lg shadow">
					<div class="flex">
						<div class="flex-1 flex align-middle py-5 pl-5 overflow-hidden">
							<span class="material-symbols-outlined text-4xl">dataset</span>
							<h1 class="inline text-[26px] font-semibold">Data</h1>
						</div>
					</div>
					<div class="px-5 pb-5">
						<Input impPlaceholder={'Name'} formName={'name'} />
						<Input impPlaceholder={'Address'} formName={'address'} />
						<div class="flex flex-col md:flex-row">
							<div class="flex-grow md:w-1/4 md:pr-2">
								<Input impPlaceholder={'PLZ'} formName={'plz'} />
							</div>
							<div class="flex-grow">
								<Input impPlaceholder={'City'} formName={'city'} />
							</div>
						</div>
					</div>

					<hr class="mt-4" />
					<div class="flex flex-col-reverse gap-2 md:flex-row-reverse p-3">
						<div class="flex-initial md:pl-3">
							<Button buttonType={'submit'} icon={'save'} colour={'text-white'} />
						</div>
						<div class="flex-initial">
							<Button
								on:toggle={toggleShowForm}
								icon={'delete'}
								title={'delete'}
								background={'bg-transparent'}
								bgHover={'hover:bg-red-200'}
								textHover={'hover:text-red-700'}
							/>
						</div>
					</div>
				</div>
			</form>
		{/if}
	</div>
</div>
