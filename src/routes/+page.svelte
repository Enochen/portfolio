<script lang="ts">
	import MainPage from '$lib/components/MainPage/MainPage.svelte';
	import ProjectsPage from '$lib/components/ProjectsPage/ProjectsPage.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<MainPage />
<ProjectsPage />
<div class="absolute right-4 top-4 mx-auto">
	<LightSwitch />
</div>
