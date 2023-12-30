import type { Actions } from './$types';
import { BaseAPIUrl, Api } from '../../../endpoints/api_endpoint';
import type { EventDataReq } from '$lib/types/event-type';

const url = `${BaseAPIUrl.Local}/${Api.Event}`;
export const actions = {
	createData: async ({ request }: { request: Request }) => {
		const formData = Object.fromEntries(await request.formData());

		const reqData = {
			eventDetails: {
				title: formData['title'],
				shortDescription: formData['shortDescription'],
				description: formData['description'],
				date: formData['date'],
				registration: formData['registration']
			},
			imageHeader: formData['imageHeader']
		};

		const body = new FormData();
		body.set('eventDetails', JSON.stringify(reqData.eventDetails));
		body.set('imageHeader', formData['imageHeader']);

		console.warn('body', body);

		await fetch(url, {
			method: 'POST',
			body: body,
			headers: {}
		})
			.then((response) => {
				console.warn('response', response);
			})
			.catch((error: any) => {
				console.warn('error', error);
			});
	},
	updateData: async ({ request }: { request: Request }) => {
		const formData = Object.fromEntries(await request.formData());
		const data = {
			address: formData.address,
			city: formData.city,
			name: formData.name,
			plz: formData.plz
		};
		const response = await fetch(`${url}/${formData.id}`, {
			method: 'PATCH',
			body: JSON.stringify({ data: data }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const result = await response.json();
		if (result) {
			return {
				success: true
			};
		}
	}
} satisfies Actions;
