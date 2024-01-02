<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Input, InputFile } from '$lib';
	import DatePicker from '$lib/components/input/DatePicker.svelte';
	import TextArea from '$lib/components/input/TextArea.svelte';
	import { Api, BaseAPIUrl } from '../../../endpoints/api_endpoint';

	let title = '';
	let shortDescription = '';
	let description = '';
	let imageUrl = '';
	let publicId = '';
	let date = '';
	let registration = '';
	let imageHeader: HTMLInputElement;

	$: value = {
		eventDetails: {
			title: title,
			shortDescription: shortDescription,
			description: description,
			imageUrl: imageUrl,
			publicId: publicId,
			date: date,
			registration: registration
		},
		imageHeader: imageHeader
	};

	export let id: string = '';
	export let navigatePath: string = '';
	export let formAction: string;
	export let formMethod: string;
	export let formData: any = value;

	if (formData) {
		title = formData.title;
		shortDescription = formData.shortDescription;
		description = formData.description;
		imageUrl = formData.imageUrl;
		publicId = formData.publicId;
		date = new Date(formData.date).toISOString().substring(0, 16);
		registration = new Date(formData.registration).toISOString().substring(0, 16);
	}

	const today = new Date().toISOString().substring(0, 16);

	function navigate(): void {
		goto(navigatePath);
	}

	const url = `${BaseAPIUrl.Local}/${Api.Event}`;

	async function createEvent(): Promise<void> {
		const body = new FormData();
		body.set('eventDetails', JSON.stringify(value.eventDetails));
		if (value.imageHeader.files) {
			body.set('imageHeader', value.imageHeader.files[0]);
		}

		await fetch(url, {
			method: 'POST',
			body: body,
			headers: {}
		})
			.then((response) => {
				console.warn('create response', response);
				navigate();
			})
			.catch((error: any) => {
				console.warn('create error', error);
			});
	}

	async function updateEvent(): Promise<void> {
		const body = new FormData();
		body.set('eventDetails', JSON.stringify(value.eventDetails));
		if (value.imageHeader.files) {
			body.set('imageHeader', value.imageHeader.files[0]);
		}

		await fetch(`${url}/${id}`, {
			method: 'PATCH',
			body: body,
			headers: {}
		})
			.then((response) => {
				console.warn('update response', response);
				navigate();
			})
			.catch((error: any) => {
				console.warn('update error', error);
			});
	}
</script>

<div>
	<form action={formAction} method={formMethod} enctype="multipart/form-data">
		<input type="hidden" name="id" value={id} />
		<div class="mt-5 bg-white rounded-lg shadow">
			<div class="flex">
				<div class="flex-1 flex align-middle py-5 pl-5 overflow-hidden">
					<span class="material-symbols-outlined text-4xl">dataset</span>
					<h1 class="inline text-[26px] font-semibold">Data</h1>
				</div>
			</div>
			<div class="px-5 pb-5">
				<Input impPlaceholder={'Title'} formName={'title'} bind:inputValue={title} />
				<Input
					impPlaceholder={'Short Description'}
					formName={'shortDescription'}
					bind:inputValue={shortDescription}
				/>
				<TextArea
					impPlaceholder={'Description'}
					formName={'description'}
					bind:inputValue={description}
				/>
				<div class="flex flex-col md:flex-row">
					<div class="flex-grow md:w-1/4 md:pr-2">
						<label for="Date" class="font-bold mb-1 block"> Event Date </label>
						<DatePicker
							impPlaceholder={'Event date'}
							minDate={today}
							formName={'date'}
							bind:inputValue={date}
						/>
					</div>

					<div class="flex-grow md:w-1/4 md:pr-2">
						<label for="registration" class="font-bold mb-1 block"> Registration Date </label>
						<DatePicker
							impPlaceholder={'Event registration'}
							minDate={today}
							formName={'registration'}
							bind:inputValue={registration}
						/>
					</div>
				</div>
				<div class="mb-6 pt-4">
					<label for="imageHeader" class="font-bold mb-1 block"> Upload File </label>
					<InputFile
						impPlaceholder={'Image file'}
						formName={'imageHeader'}
						inputImageUrl={imageUrl}
						bind:inputValue={imageHeader}
					/>
				</div>
			</div>

			<hr class="mt-4" />
			<div class="flex flex-col-reverse gap-2 sm:flex-row-reverse p-3">
				<div class="flex-initial md:pl-3">
					{#if id && formData}
						<Button
							buttonType={'button'}
							title={'Update Event'}
							icon={'save'}
							colour={'text-white'}
							on:action={updateEvent}
						/>
					{:else}
						<Button
							buttonType={'button'}
							title={'Save Event'}
							icon={'save'}
							colour={'text-white'}
							on:action={createEvent}
						/>
					{/if}
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
