export const actions = {
	contactUs: async ({ request }: any) => {
		const formData = Object.fromEntries(await request.formData());
		console.warn('formData', formData);
		return {
			success: true,
			formData
		};
	}
};
