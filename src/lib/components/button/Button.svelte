<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function toggle() {
		dispatch('toggle');
	}

	type ButtonType = 'button' | 'submit' | 'reset' | null | undefined;
	export let buttonType: ButtonType = 'button';
	export let title = 'Button';
	export let icon = 'buttons_alt';
	export let background = 'bg-black';
	export let colour = 'text-black';
	export let bgHover = 'hover:bg-black';
	export let textHover = 'hover:text-white';
</script>

<button
	type={buttonType}
	on:click={toggle}
	class="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide
	capitalize rounded-md hover:fill-current focus:outline-none transition duration-300 transform active:scale-95 ease-in-out {background} {colour} {bgHover} {textHover}"
>
	<span class="material-symbols-outlined">{icon}</span>
	<span class="pl-2 mx-1">{title}</span>
</button>
