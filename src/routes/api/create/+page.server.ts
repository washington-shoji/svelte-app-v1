import { Api, BaseAPIUrl } from '../../../endpoints/api_endpoint';

export const actions = {
	addDynamicData: async ({ request }: any) => {
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
		return {
			success: true,
			result
		};
	}
};
