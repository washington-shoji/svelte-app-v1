<script lang="ts">
	type MenuItem = {
		title: string;
		// Icon: any;
		link: string;
	};
	const menuItems: MenuItem[] = [
		{ title: 'Dashboard', link: '/' },
		{ title: 'Book', link: '/books' },
		{ title: 'Author', link: '/posts' }
	];

	let intSelected = 0;

	function changeComponent(index: number) {
		intSelected = index;
	}
</script>

<div class=" flex flex-col px-2 bg-black text-zinc-50">
	<h2 class=" mt-6 text-lg uppercase">Proto App</h2>
	<div class=" flex flex-col justify-between h-full">
		<div class=" mt-6">
			{#each menuItems as Item, idx}
				<a
					class="{intSelected == idx
						? 'bg-slate-50 text-black'
						: 'bg-slate-50 bg-opacity-10'} flex gap-1 p-1 rounded-sm my-2 hover:bg-slate-50 hover:text-black"
					href={Item.link}
					on:click={() => changeComponent(idx)}
				>
					<!-- <Item.Icon /> -->
					<span>{Item.title}</span>
				</a>
			{/each}
		</div>
		<div class=" mt-6">
			<a
				class=" flex gap-1 p-1 rounded-sm mb-5 bg-slate-50 bg-opacity-10 hover:bg-slate-50 hover:text-black"
				href="/"
			>
				<!-- <IconSettings2 /> -->
				<span>Settings</span>
			</a>
			<a
				class=" flex gap-1 p-1 rounded-sm my-1 bg-red-600 bg-opacity-20 hover:bg-red-600 hover:text-black"
				href="/"
			>
				<!-- <IconLogout /> -->
				<span>Logout</span>
			</a>
		</div>
	</div>
</div>
