<script lang="ts">
	export let label: string;
</script>

<div
	class="mx-8 my-3 flex cursor-pointer flex-col items-center gap-2 hover:text-secondary-500-400-token md:m-0">
	<div class="text-xl md:text-5xl"><slot name="icon" /></div>
	<span class="text-md select-none md:text-lg">{label}</span>
</div>
