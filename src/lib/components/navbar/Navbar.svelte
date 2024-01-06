<script lang="ts">
	import { page } from '$app/stores';

	type MenuItem = {
		title: string;
		icon: string;
		link: string;
	};

	const menuItems: MenuItem[] = [
		{ title: 'Dashboard', icon: 'space_dashboard', link: '/dashboard' },
		{ title: 'Event', icon: 'calendar_clock', link: '/dashboard/event' },
		{ title: 'API', icon: 'graphic_eq', link: '/dashboard/api' },
		{ title: 'Book', icon: 'auto_stories', link: '/dashboard/books' },
		{ title: 'Author', icon: 'contact_page', link: '/dashboard/posts' },
		{ title: 'Map', icon: 'route', link: '/dashboard/map' }
	];

	let isOpen = false;

	function toggleIsOpen(): void {
		isOpen = !isOpen;
	}
</script>

<button
	class="{isOpen
		? ' bg-red-600 left-28'
		: ''} inline-flex p-1 m-1 fixed top-4 left-0 bg-black text-white rounded-md shadow-md z-30"
	on:click={toggleIsOpen}
>
	<span class="material-symbols-outlined">{isOpen ? 'cancel' : 'left_panel_open'}</span>
</button>

<div class={isOpen ? 'flex flex-col px-2 bg-black text-zinc-50 z-20' : 'hidden'}>
	<h2 class=" mt-6 text-lg uppercase shadow-2xl">Proto App</h2>
	<div class=" flex flex-col justify-between h-full shadow-2xl">
		<div class=" mt-6">
			{#each menuItems as item, idx}
				<a
					class="{item.link === $page.route.id
						? 'bg-slate-50 text-black'
						: 'bg-slate-50 bg-opacity-10'} flex gap-1 p-1 rounded-sm my-2 hover:bg-slate-50 hover:text-black"
					href={item.link}
				>
					<span class="material-symbols-outlined">{item.icon}</span>
					<span>{item.title}</span>
				</a>
			{/each}
		</div>
		<div class=" mt-6 shadow-2xl">
			<a
				class=" flex gap-1 p-1 rounded-sm mb-5 bg-slate-50 bg-opacity-10 hover:bg-slate-50 hover:text-black"
				href="/"
			>
				<span class="material-symbols-outlined">tune</span>
				<span>Settings</span>
			</a>
			<a
				class=" flex gap-1 p-1 rounded-sm my-1 bg-red-600 bg-opacity-20 hover:bg-red-600 hover:text-black"
				href="/"
			>
				<span class="material-symbols-outlined">logout</span>
				<span>Logout</span>
			</a>
		</div>
	</div>
</div>
