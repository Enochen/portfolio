<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import PantryPanicImage from '$lib/assets/pantry_panic.png?as=run';
	import HalfBotHalfBrainImage from '$lib/assets/hbhb.png?as=run';
	import AskPaletteImage from '$lib/assets/askpalette.png?as=run';
</script>

<div
	class="container mx-auto flex max-w-5xl flex-col items-center gap-12 p-12"
	id="projects">
	<h1 class="text-5xl/tight">Projects</h1>
	<div class="container flex flex-col gap-6 px-4">
		<ProjectCard
			title="Pantry Panic"
			imageHref="https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/pantrypanic/"
			imageSrc={PantryPanicImage}
			imageAlt="pantry panic"
			tags={['C++', 'CUGL', 'SDL2', 'OpenGL', 'WebRTC']}
			links={[
				{
					href: 'https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/pantrypanic/',
					label: 'Showcase Page',
				},
			]}>
			<div slot="description">
				A cross-platform real-time lobby-based multiplayer tower defense game
				that spawned from <a
					class="anchor"
					href="https://www.cs.cornell.edu/courses/cs5152/2023sp/"
					target="_blank">CS 5152: Advanced Game Development</a> at Cornell. I iterated
				on a lot of designs, made a lot of decisions, and wrote a lot of code. Coming
				soon to both iOS and Android!
			</div>
		</ProjectCard>
		<ProjectCard
			title="Ask Palette"
			imageHref="https://askpalette.appspot.com/"
			imageSrc={AskPaletteImage}
			imageAlt="ask palette"
			tags={['HTML/CSS', 'Python', 'Flask', 'Google Cloud Vision']}
			links={[
				{
					href: 'https://askpalette.appspot.com/',
					label: 'Demo',
				},
				{
					href: 'https://github.com/Enochen/askpalette',
					label: 'GitHub',
				},
			]}>
			<div slot="description">
				Generate color palettes from your search terms! Uses Google Cloud Vision
				to extract colors from search terms. Developed as a hackathon project at <a
					class="anchor"
					href="https://bigredhacks.com"
					target="_blank"
					>BigRed//Hacks
				</a>.
			</div>
		</ProjectCard>
		<ProjectCard
			title="Half Bot Half Brain"
			imageHref="https://github.com/ageor0114/nyit-hackathon"
			imageSrc={HalfBotHalfBrainImage}
			imageAlt="half bot half brain"
			tags={['React', 'Python', 'spaCy']}
			links={[
				{
					href: 'https://github.com/ageor0114/nyit-hackathon',
					label: 'GitHub',
				},
			]}>
			<div slot="description">
				It's like Mad Libs, but better. Generates funny but sensible text from
				user-provided data. Developed as a hackathon project at <a
					class="anchor"
					href="https://teenhacksli.com/"
					target="_blank">TeenHacksLI</a
				>.
			</div>
		</ProjectCard>
	</div>
</div>
