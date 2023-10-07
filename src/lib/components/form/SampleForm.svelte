<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import Button from '../button/Button.svelte';
	import Input from '../input/Input.svelte';

	export let navigatePath: string = '';
	export let formAction: string;
	export let formMethod: string;
	export let id: string = '';
	export let formData: any | null;

	function navigate(): void {
		goto(navigatePath);
	}
</script>

<div class="m-auto md:max-w-3xl">
	<div>
		<form action={formAction} method={formMethod}>
			<input type="hidden" name="id" value={id} />
			<div class="mt-5 bg-white rounded-lg shadow">
				<div class="flex">
					<div class="flex-1 flex align-middle py-5 pl-5 overflow-hidden">
						<span class="material-symbols-outlined text-4xl">dataset</span>
						<h1 class="inline text-[26px] font-semibold">Data</h1>
					</div>
				</div>
				<div class="px-5 pb-5">
					<Input impPlaceholder={'Name'} formName={'name'} inputValue={formData?.name} />
					<Input impPlaceholder={'Address'} formName={'address'} inputValue={formData?.address} />
					<div class="flex flex-col md:flex-row">
						<div class="flex-grow md:w-1/4 md:pr-2">
							<Input impPlaceholder={'PLZ'} formName={'plz'} inputValue={formData?.plz} />
						</div>
						<div class="flex-grow">
							<Input impPlaceholder={'City'} formName={'city'} inputValue={formData?.city} />
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
							on:action={navigate}
							icon={'tab_close'}
							title={'cancel'}
							background={'bg-transparent'}
							bgHover={'hover:bg-red-200'}
							textHover={'hover:text-red-700'}
						/>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
