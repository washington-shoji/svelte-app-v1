<script lang="ts">
	import { onMount } from 'svelte';

	type PostResponse = {
		posts: Posts[];
		total: number;
		skip: number;
		limit: number;
	};

	type Posts = {
		userId: Number;
		id: number;
		title: string;
		body: string;
		tags: string[];
		reactions: number;
	};
	const postUrl = 'https://dummyjson.com/posts?limit=10';
	onMount(() => {
		fetchBookData();
	});

	let response: PostResponse;
	let postData: Posts[] = [];

	async function fetchBookData() {
		response = await fetch(postUrl).then((response) => response.json());
		postData = response.posts;
	}
</script>

{#each postData as post (post.id)}
	<div
		class="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl my-10"
	>
		<div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
			<div class="w-full space-y-4 flex flex-col justify-center items-center">
				<div class="flex flex-col justify-center">
					<h1 class="text-center md:text-left text-2xl font-bold text-gray-900">
						{post.title}
					</h1>
					<p class="inline text-gray-700 font-normal leading-6 w-full text-base">
						{post.body}
					</p>
				</div>
				<ul class="space-x-4 flex flex-row w-full mb-4">
					<li class="text-sm">
						<i class="iconoir-pin-alt" />Post id:
						<strong>{post.id} </strong>
					</li>
					<li class="text-sm">
						<i class="iconoir-calendar" />User id:
						<strong> {post.userId}</strong>
					</li>
				</ul>
			</div>
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/each}
