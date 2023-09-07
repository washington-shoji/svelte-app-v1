<script lang="ts">
    import { onMount } from 'svelte'

    type Post = {
        userId: Number;
        id: number;
        title: string;
        body: string;
    }
    const postUrl = 'https://jsonplaceholder.typicode.com/posts'
    onMount(() => {
        fetchBookData()
    })

    let postData: Post[] = [];

    async function fetchBookData() {
        const response = await fetch(postUrl)
        postData = await response.json()
        console.warn('booksData', postData)
    }
</script>

{#each postData as post (post.id)}
    <div class="container">
        <h1>Title: {post.title}</h1>
        <p>Post id: {post.id}</p>
        <p>UserId id: {post.userId}</p>
        <p>Body: {post.body}</p>
    </div>
{:else}
    <p>Loading...</p>
{/each}
