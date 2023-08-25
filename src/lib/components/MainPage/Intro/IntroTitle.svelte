<script lang="ts">
	import { hidingDesc } from '$lib/stores';
</script>

<button
	class="flex cursor-pointer flex-col items-center hover:text-secondary-500-400-token {$hidingDesc
		? 'gap-2'
		: 'gap-3'}"
	on:click={() => hidingDesc.update((v) => !v)}>
	<h1
		class="{$hidingDesc
			? 'text-5xl sm:text-6xl lg:text-8xl'
			: 'text-3xl sm:text-4xl lg:text-6xl'} transition-font-size duration-500 ease-out">
		Enoch Chen
	</h1>
	<h2
		class="{$hidingDesc
			? 'text-xl sm:text-2xl lg:text-3xl'
			: 'text-lg sm:text-xl lg:text-2xl'} transition-font-size duration-500 ease-out">
		cs @ cornell
	</h2>
</button>
