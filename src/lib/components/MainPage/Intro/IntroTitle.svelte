<script lang="ts">
	import { showDesc, splash } from '$lib/stores';
</script>

<button
	class="hover-active-colors flex cursor-pointer flex-col items-center gap-2"
	on:click={() => showDesc.update((v) => !v)}>
	<h1
		class="{$showDesc
			? 'text-4xl md:text-6xl'
			: 'text-5xl md:text-8xl'} transition-font-size duration-500 ease-out">
		Enoch Chen
	</h1>
	<h2
		class="{$showDesc
			? 'text-xl md:text-2xl'
			: 'text-2xl md:text-3xl'} transition-font-size duration-500 ease-out">
		{$splash}
	</h2>
</button>
