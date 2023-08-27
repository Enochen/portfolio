<script lang="ts">
	type LinkData = {
		href: string;
		label: string;
	};

	export let title: string;
	export let imageHref: string = '';
	export let imageSrc: string = '';
	export let imageAlt: string;
	export let tags: string[] = [];
	export let links: LinkData[] = [];
</script>

<div class="flex flex-col transition-colors hover:card sm:flex-row-reverse">
	{#if imageSrc}
		<a
			class="flex object-cover py-0.5 md:w-2/3"
			href={imageHref || null}
			target="_blank">
			<img src={imageSrc} alt={imageAlt} class="object-cover" />
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
						class="btn-sm variant-outline-primary hover:variant-filled-primary">
						{label}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
