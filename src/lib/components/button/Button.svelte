<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function action() {
		dispatch('action');
	}

	type ButtonType = 'button' | 'submit' | 'reset' | null | undefined;
	export let buttonType: ButtonType = 'button';
	export let title = 'Button';
	export let icon = 'buttons_alt';
	export let background = 'bg-black';
	export let colour = 'text-black';
	export let bgHover = 'hover:bg-black';
	export let textHover = 'hover:text-white';
	export let extClass = '';
</script>

<button
	type={buttonType}
	on:click={action}
	class="relative flex justify-center items-center px-5 py-2.5 font-medium tracking-wide
	capitalize rounded-md hover:fill-current focus:outline-none transition duration-300 transform active:scale-95 ease-in-out {background} {colour} {bgHover} {textHover} {extClass}"
>
	<span class="material-symbols-outlined">{icon}</span>
	<span class="pl-2 mx-1">{title}</span>
</button>
