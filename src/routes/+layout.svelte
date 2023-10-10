<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
</script>

<div class=" max-h-screen h-screen flex flex-no-wrap">
	<Navbar />

	<div class=" w-full overflow-y-scroll py-10 px-0 sm:px-6">
		<slot />
	</div>
</div>
