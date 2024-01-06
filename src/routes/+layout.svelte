<script lang="ts">
	import { PublicNavbar } from '$lib';
	import '../app.css';
</script>

PublicNavbar

<div class=" max-h-screen h-screen flex flex-no-wrap">
	<PublicNavbar />

	<div class=" w-full overflow-y-scroll py-10 px-0 sm:px-6">
		<slot />
	</div>
</div>
