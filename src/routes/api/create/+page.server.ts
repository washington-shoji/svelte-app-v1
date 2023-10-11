import type { Actions } from './$types';
import { BaseAPIUrl, Api } from '../../../endpoints/api_endpoint';

export const actions = {
	createData: async ({ request }: { request: Request }) => {
		const data = Object.fromEntries(await request.formData());
		const url = `${BaseAPIUrl.Local}/${Api.Dynamic}`;
		const response = await fetch(url, {
			method: 'POST',
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
	},
	updateData: async ({ request }: { request: Request }) => {
		const formData = Object.fromEntries(await request.formData());
		const url = `${BaseAPIUrl.Local}/${Api.Dynamic}/${formData.id}`;
		const data = {
			address: formData.address,
			city: formData.city,
			name: formData.name,
			plz: formData.plz
		};
		const response = await fetch(url, {
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
