<script lang="ts">
	import AccountFilledIcon from '~icons/mdi/account';
	import AccountOutlineIcon from '~icons/mdi/account-outline';
	import FlaskIcon from '~icons/mdi/flask';
	import GitHubIcon from '~icons/mdi/github';
	import LinkedInIcon from '~icons/mdi/linkedin';
	import { showDesc } from '$lib/stores';
	import IconControl from './IconControl.svelte';
	import { scrollToAnchor } from '$lib/misc/util';

	$: ProfileIcon = $showDesc ? AccountFilledIcon : AccountOutlineIcon;
</script>

<div
	class="mx-24 flex w-full max-w-3xl flex-row flex-wrap items-center justify-center pb-6 md:justify-evenly md:pb-16">
	<!-- Using svelte:component instead of <ProfileIcon /> for reactivity reasons -->
	<button type="button" on:click={() => showDesc.update((v) => !v)}>
		<IconControl label="About">
			<svelte:component this={ProfileIcon} slot="icon" />
		</IconControl></button>
	<a href="#projects" on:click|preventDefault={scrollToAnchor}>
		<IconControl label="Projects"><FlaskIcon slot="icon" /></IconControl>
	</a>
	<a href="https://github.com/Enochen" target="_blank">
		<IconControl label="GitHub"><GitHubIcon slot="icon" /></IconControl>
	</a>
	<a href="https://www.linkedin.com/in/noche/" target="_blank">
		<IconControl label="LinkedIn"><LinkedInIcon slot="icon" /></IconControl>
	</a>
</div>
