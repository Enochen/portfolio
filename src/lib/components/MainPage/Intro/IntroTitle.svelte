<script lang="ts">
	import { hidingDesc } from '$lib/stores';
</script>

<button
	class="hover-active-colors flex cursor-pointer flex-col items-center gap-2"
	on:click={() => hidingDesc.update((v) => !v)}>
	<h1
		class="{$hidingDesc
			? 'text-5xl md:text-8xl'
			: 'text-4xl md:text-6xl'} transition-font-size duration-500 ease-out">
		Enoch Chen
	</h1>
	<h2
		class="{$hidingDesc
			? 'text-2xl md:text-3xl'
			: 'text-xl md:text-2xl'} transition-font-size duration-500 ease-out">
		cs @ cornell
	</h2>
</button>
