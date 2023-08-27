<script lang="ts">
	export let label: string;
</script>

<div
	class="hover-active-colors mx-8 my-3 flex cursor-pointer flex-col items-center gap-2 md:m-0">
	<div class="text-xl transition-font-size md:text-5xl">
		<slot name="icon" />
	</div>
	<span class="text-md select-none transition-font-size md:text-lg"
		>{label}</span>
</div>
