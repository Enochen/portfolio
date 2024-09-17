<script lang="ts">
	import MainPage from '$lib/components/MainPage/MainPage.svelte';
	import ProjectsPage from '$lib/components/ProjectsPage/ProjectsPage.svelte';
	import Analytics from '$lib/misc/Analytics.svelte';
	import Seo from '$lib/misc/SEO.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { splash } from '$lib/stores';

	export let data: PageData;
	$: splash.set(data.splash);
</script>

<Seo
	title="Enoch Chen"
	description="Hey! I'm Enoch, a software engineer based in NYC. I do cool things sometimes." />
<Analytics />

<MainPage />
<ProjectsPage />

<div class="absolute right-4 top-4 mx-auto">
	<LightSwitch />
</div>
