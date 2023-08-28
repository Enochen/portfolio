<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	type LinkData = {
		href: string;
		label: string;
	};

	export let title: string;
	export let imageHref: string = '';
	export let imageSrc = {};
	export let imageAlt: string;
	export let tags: string[] = [];
	export let links: LinkData[] = [];
</script>

<div class="flex flex-col transition-colors hover:card md:flex-row-reverse">
	{#if imageSrc}
		<a
			class="flex max-h-64 md:relative md:max-h-none md:w-2/3"
			href={imageHref || null}
			target="_blank">
			<Img
				src={imageSrc}
				alt={imageAlt}
				class="bottom-0 top-0 h-full w-full object-cover md:absolute" />
		</a>
	{/if}
	<div class="flex w-full flex-col items-start gap-3 px-2 py-6 md:px-6">
		<div class="text-3xl">{title}</div>
		{#if tags.length}
			<div class="flex flex-row flex-wrap gap-3">
				{#each tags as tag}
					<span class="badge variant-glass-success">{tag}</span>
				{/each}
			</div>
		{/if}
		<div class="text-md">
			<slot name="description" />
		</div>
		{#if links.length}
			<div class="flex flex-row flex-wrap gap-3">
				{#each links as { href, label }}
					<a
						{href}
						target="_blank"
						class="btn-sm variant-outline-primary hover:variant-filled-primary">
						{label}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
