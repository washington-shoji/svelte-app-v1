export type EventData = {
	id?: string;
	title: string;
	shortDescription: string;
	description: string;
	imageUrl?: string;
	publicId?: string;
	date: string;
	registration: string;
};

export type EventDataReq = {
	eventDetails: {
		id?: string;
		title: string;
		shortDescription: string;
		description: string;
		imageUrl?: string;
		publicId?: string;
		date: string;
		registration: string;
	};
	imageHeader?: HTMLInputElement;
};
