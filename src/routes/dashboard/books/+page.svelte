<script lang="ts">
	import { Api, BaseAPIUrl } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		getBooks();
	});

	type Book = {
		id: string;
		title: string;
		description: string;
	};

	const bookUrl = `${BaseAPIUrl.Local}/${Api.Book}`;
	let books: Book[] = [];

	async function getBooks() {
		const response = await fetch(bookUrl);
		const data = await response.json();
		books = data;
	}
</script>

<div>
	{#each books as book, idx}
		<div>
			<p>{book.id}</p>
			<p>{book.title}</p>
			<p>{book.description}</p>
		</div>
	{:else}
		<div>
			<p>Loading...</p>
		</div>
	{/each}
</div>
