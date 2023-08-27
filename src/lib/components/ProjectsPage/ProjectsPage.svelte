<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
</script>

<div class="container mx-auto flex max-w-5xl flex-col items-center gap-12 p-12" id="projects">
	<h1 class="text-5xl/tight">Projects</h1>
	<div class="container flex flex-col gap-6 px-4">
		<ProjectCard
			title="Pantry Panic"
			imageHref="https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/pantrypanic/"
			imageSrc="/pp_banner.png"
			imageAlt="pantry panic banner"
			tags={['C++', 'CUGL', 'SDL2', 'OpenGL', 'WebRTC']}
			links={[
				{
					href: 'https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/pantrypanic/',
					label: 'Showcase Page',
				},
			]}>
			<div slot="description">
				A cross-platform real-time lobby-based multiplayer tower defense game
				that spawned from <a class="anchor"
				href="https://www.cs.cornell.edu/courses/cs5152/2023sp/"
				target="_blank">CS 5152: Advanced Game Development</a> at Cornell. I
				iterated on a lot of designs, made a lot of decisions, and wrote a lot
				of code. Coming soon to both iOS and Android!
			</div>
		</ProjectCard>
	</div>
</div>
