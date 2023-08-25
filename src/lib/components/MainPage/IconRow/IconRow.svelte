<script lang="ts">
	import AccountFilledIcon from '~icons/mdi/account';
	import AccountOutlineIcon from '~icons/mdi/account-outline';
	import FlaskIcon from '~icons/mdi/flask';
	import GitHubIcon from '~icons/mdi/github';
	import LinkedInIcon from '~icons/mdi/linkedin';
	import FileIcon from '~icons/mdi/file-account';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { hidingDesc } from '$lib/stores';
	import IconControl from './IconControl.svelte';

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'soontm',
		placement: 'top',
	};

	$: ProfileIcon = $hidingDesc ? AccountOutlineIcon : AccountFilledIcon;
</script>

<div
	class="mx-24 flex w-full max-w-3xl flex-row flex-wrap items-center justify-evenly pb-6 md:pb-16">
	<!-- Using svelte:component instead of <ProfileIcon /> for reactivity reasons -->
	<button type="button" on:click={() => hidingDesc.update((v) => !v)}>
		<IconControl label="About">
			<svelte:component this={ProfileIcon} slot="icon" />
		</IconControl></button>
	<button
		type="button"
		use:popup={popupHover}
		class="hover:text-secondary-500-400-token [&>*]:pointer-events-none">
		<IconControl label="Projects"><FlaskIcon slot="icon" /></IconControl>
	</button>
	<a href="https://github.com/Enochen" target="_blank">
		<IconControl label="GitHub"><GitHubIcon slot="icon" /></IconControl>
	</a>
	<a href="https://www.linkedin.com/in/noche/" target="_blank">
		<IconControl label="LinkedIn"><LinkedInIcon slot="icon" /></IconControl>
	</a>
	<a href="/enoch_chen_resume.pdf" target="_blank">
		<IconControl label="Resume"><FileIcon slot="icon" /></IconControl>
	</a>
</div>

<div class="card variant-ghost-secondary px-3 py-2" data-popup="soontm">
	<p>Coming soon!</p>
	<div class="arrow variant-ghost-secondary" />
</div>
