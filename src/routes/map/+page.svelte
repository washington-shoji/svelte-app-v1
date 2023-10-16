<script lang="ts">
	import { onMount } from 'svelte';
	import { Deck } from '@deck.gl/core/typed';
	import MapStylePicker from '$lib/components/map/MapStylePicker.svelte';
	import mapboxgl from 'mapbox-gl';

	let mapElement: HTMLDivElement;
	let map: mapboxgl.Map;
	let canvasElement: HTMLCanvasElement;
	let deck: Deck;
	const accessToken = import.meta.env.VITE_MAPBOX_API_ACCESS_TOKEN;
	let mapStyle = 'mapbox://styles/mapbox/dark-v9';
	let viewState = {
		longitude: 151.2093,
		latitude: -33.8688,
		zoom: 10,
		pitch: 0,
		bearing: 0
	};

	onMount(async () => {
		createMap();
		createDeck();
	});

	function createMap() {
		map = new mapboxgl.Map({
			accessToken: accessToken,
			container: mapElement,
			interactive: true,
			style: mapStyle,
			center: [viewState.longitude, viewState.latitude],
			zoom: viewState.zoom,
			pitch: viewState.pitch,
			bearing: viewState.bearing
		});
	}

	function handleStyleChange(event: Event) {
		const target = event.target as HTMLButtonElement;
		map.setStyle(target.value);
	}

	// Create the deck.gl instance.
	async function createDeck() {
		// https://github.com/sveltejs/kit/discussions/10423
		const { ScatterplotLayer } = await import('@deck.gl/layers/typed');
		deck = new Deck({
			canvas: canvasElement,
			layers: [
				new ScatterplotLayer({
					data: [{ position: [151.2093, -33.8688], color: [255, 0, 0], radius: 100 }],
					getFillColor: (d: any) => d.color,
					getRadius: (d: any) => d.radius
				})
			],
			width: '100%',
			height: '100%',
			initialViewState: viewState,
			controller: true,
			// Change the map's viewState whenever the view state of deck.gl changes.
			onViewStateChange: ({ viewState }) => {
				map.jumpTo({
					center: [viewState.longitude, viewState.latitude],
					zoom: viewState.zoom,
					bearing: viewState.bearing,
					pitch: viewState.pitch
				});
			}
		});
	}
</script>

<MapStylePicker currentStyle={mapStyle} on:change={handleStyleChange} />
<div>
	<div
		class=" absolute top-0 left-0 w-full h-full bg-slate-300 overflow-hidden"
		bind:this={mapElement}
	/>
	<canvas class=" absolute top-0 left-0 w-full h-full" bind:this={canvasElement} />
</div>
