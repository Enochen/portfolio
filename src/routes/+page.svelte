<script lang="ts">
	import IconControl from '$lib/components/IconControl.svelte';
	import AccountFilledIcon from '~icons/mdi/account';
	import AccountOutlineIcon from '~icons/mdi/account-outline';
	import FlaskIcon from '~icons/mdi/flask';
	import GitHubIcon from '~icons/mdi/github';
	import LinkedInIcon from '~icons/mdi/linkedin';
	import FileIcon from '~icons/mdi/file-account';
	import { LightSwitch, popup, type PopupSettings } from '@skeletonlabs/skeleton';

	let hidingDesc = true;
	$: ProfileIcon = hidingDesc ? AccountOutlineIcon : AccountFilledIcon;

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top',
	};

	const toggleDesc = () => (hidingDesc = !hidingDesc);
</script>

<div class="absolute right-4 top-4 mx-auto"><LightSwitch /></div>

<div class="container mx-auto flex h-full flex-col items-center">
	<div class="my-auto flex flex-col items-center justify-center gap-12 transition-all">
		<button
			class="flex cursor-pointer flex-col items-center hover:text-secondary-500-400-token {hidingDesc
				? 'gap-2'
				: 'gap-3'}"
			on:click={toggleDesc}>
			<h1
				class="{hidingDesc
					? 'text-5xl sm:text-6xl lg:text-8xl'
					: 'text-3xl sm:text-4xl lg:text-6xl'} transition-font-size duration-500 ease-out">
				Enoch Chen
			</h1>
			<h2
				class="{hidingDesc
					? 'text-xl sm:text-2xl lg:text-3xl'
					: 'text-lg sm:text-xl lg:text-2xl'} transition-font-size duration-500 ease-out">
				cs @ cornell
			</h2>
		</button>
		<div class="{hidingDesc ? 'max-h-0' : 'max-h-64'} transition-max-height duration-500 ease-out">
			<div
				class="{hidingDesc
					? 'invisible opacity-0 duration-200'
					: 'visible opacity-100 duration-500'} text-md mx-8 max-w-lg transition-[fade,font-size] ease-out md:max-w-xl md:text-lg lg:text-xl">
				<p>
					Currently working on my M.Eng. in Computer Science at Cornell University. I am passionate
					about designing efficient and reliable systems that bring joy to others!
				</p>
				<br />
				<p>
					In my free time, you can find me juggling, tinkering with keyboards, or just thinking
					about life.
				</p>
				<br />
				<p>Check out some of my stuff here.</p>
			</div>
		</div>
	</div>
	<div
		class="mx-24 flex w-full max-w-3xl flex-row flex-wrap items-center justify-around pb-12 md:pb-24">
		<!-- Using svelte:component instead of <ProfileIcon /> for reactivity reasons -->
		<button type="button" on:click={toggleDesc}>
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
</div>

<div class="card variant-ghost-secondary px-3 py-2" data-popup="popupHover">
	<p>Coming soon!</p>
	<!-- <div class="arrow variant-filled-secondary" /> -->
</div>
