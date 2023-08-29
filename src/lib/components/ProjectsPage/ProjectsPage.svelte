<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import PantryPanicImage from '$lib/assets/pantry_panic.png?as=run';
	import MoonbridgeImage from '$lib/assets/moonbridge.png?as=run';
	import EsferaImage from '$lib/assets/esfera.png?as=run';
	import CUAptsImage from '$lib/assets/cuapts.png?as=run';
	import ClubHubImage from '$lib/assets/clubhub.png?as=run';
	import MoodyImage from '$lib/assets/moody.jpg?as=run';
	import OutbreakImage from '$lib/assets/outbreak.png?as=run';
	import EveImage from '$lib/assets/eve-alt.png?as=run';
	import AskPaletteImage from '$lib/assets/askpalette.png?as=run';
	import HalfBotHalfBrainImage from '$lib/assets/hbhb.png?as=run';
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
			title="Moonbridge"
			imageHref="https://github.com/Enochen/moonbridge"
			imageSrc={MoonbridgeImage}
			imageAlt="moonbridge"
			tags={['Unity', 'C#', 'Signal Processing']}
			links={[
				{
					href: 'https://github.com/Enochen/moonbridge',
					label: 'GitHub',
				},
				{
					href: 'https://play-moonbridge.netlify.app/',
					label: 'Play',
				},
			]}>
			<div slot="description">
				An aesthetic-focused 3D rhythm game with automatic beatmap generation
				powered by an ensemble of beat detection algorithms. I made this as a
				final project while studying abroad in Copenhagen. Warning: the WebGL
				build is quite fragile.
			</div>
		</ProjectCard>
		<ProjectCard
			title="Esfera"
			imageHref="https://github.com/Enochen/esfera"
			imageSrc={EsferaImage}
			imageAlt="esfera"
			tags={['Unity', 'C#']}
			links={[
				{
					href: 'https://github.com/Enochen/esfera',
					label: 'GitHub',
				},
				{
					href: 'https://play-esfera.netlify.app/',
					label: 'Play',
				},
			]}>
			<div slot="description">
				An endless action combat platformer with an innovative monster spawn
				system. I made this as a midterm project while studying abroad in
				Copenhagen. The music is self produced!
			</div>
		</ProjectCard>
		<ProjectCard
			title="CU Apartments"
			imageHref="https://github.com/cornell-dti/cu-apts"
			imageSrc={CUAptsImage}
			imageAlt="cuapts"
			tags={['TypeScript', 'React', 'Firebase', 'Express']}
			links={[
				{
					href: 'https://github.com/cornell-dti/cu-apts',
					label: 'GitHub',
				},
			]}>
			<div slot="description">
				Finding information on student housing at Cornell is unnecessarily
				painful. CU Apts was created to empower the student body by aggregating
				knowledge and reviews for both Cornell and off-campus housing options. A
				<a class="anchor" href="https://cornelldti.org/" target="_blank"
					>Cornell DTI</a> project. Launching soon!
			</div>
		</ProjectCard>
		<ProjectCard
			title="ClubHub"
			imageHref="https://github.com/cornell-dti/clubhub"
			imageSrc={ClubHubImage}
			imageAlt="clubhub"
			tags={['TypeScript', 'React', 'Firebase', 'Firebase Functions']}
			links={[
				{
					href: 'https://github.com/Enochen/hoc20-mobile',
					label: 'GitHub',
				},
			]}>
			<div slot="description">
				A resource for campus organization discovery for Cornell. We validated
				an MVP on "competitive" business clubs and eventually rolled out to the
				rest of the. A <a
					class="anchor"
					href="https://cornelldti.org/"
					target="_blank">Cornell DTI</a> project.
			</div>
		</ProjectCard>
		<ProjectCard
			title="Moody"
			imageHref="https://github.com/Enochen/hoc20-mobile"
			imageSrc={MoodyImage}
			imageAlt="moody"
			tags={['TypeScript', 'React Native', 'Google Cloud DialogFlow']}
			links={[
				{
					href: 'https://github.com/Enochen/hoc20-mobile',
					label: 'GitHub',
				},
			]}>
			<div slot="description">
				Mood-tracking app with a chatbot that sends you memes! A personal dive
				into both cross-platform mobile and chatbot tech. It would be cool to
				revisit this concept in the context of LLMs 👀. Hackathon Finalist at
				<a class="anchor" href="https://hackourcampus.com/" target="_blank"
					>HackOurCampus</a
				>.
			</div>
		</ProjectCard>
		<ProjectCard
			title="#outbreak;;"
			imageHref="https://github.com/ptwu/outbreak"
			imageSrc={OutbreakImage}
			imageAlt="outbreak"
			tags={['OCaml', 'React', 'JavaScript']}
			links={[
				{
					href: 'https://github.com/ptwu/outbreak',
					label: 'GitHub',
				},
			]}>
			<div slot="description">
				Pick a disease, pick a starting country, and buy upgrades to infect the
				whole world before a vaccine is found! Game inspired by Plague Inc. and
				the early pandemic. This was an exploration into the practical
				applications of functional OCaml as part of a CS 3110 final project.
			</div>
		</ProjectCard>
		<ProjectCard
			title="Events"
			imageHref="https://github.com/cornell-dti/events-backend-2.0"
			imageSrc={EveImage}
			imageAlt="eve"
			tags={['TypeScript', 'React', 'Firebase', 'Express']}
			links={[
				{
					href: 'https://github.com/cornell-dti/events-backend-2.0',
					label: 'GitHub',
				},
			]}>
			<div slot="description">
				An event-discovery app for Cornell students which saw its sunset as the
				pandemic hit. My very first project within <a
					class="anchor"
					href="https://cornelldti.org/"
					target="_blank">Cornell DTI</a
				>! I owned the authentication system during my very first semester at
				Cornell and became very familiar with modern protocols and security
				concerns.
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
					href: 'https://github.com/Enochen/askpalette',
					label: 'GitHub',
				},
				{
					href: 'https://askpalette.appspot.com/',
					label: 'Demo',
				},
			]}>
			<div slot="description">
				Generate color palettes from your search terms! Uses Google Cloud Vision
				to extract colors from search terms. Developed as a hackathon project at <a
					class="anchor"
					href="https://bigredhacks.com"
					target="_blank">BigRed//Hacks</a
				>.
			</div>
		</ProjectCard>
		<ProjectCard
			title="Half Bot Half Brain"
			imageHref="https://github.com/ageor0114/nyit-hackathon"
			imageSrc={HalfBotHalfBrainImage}
			imageAlt="half bot half brain"
			tags={['React', 'Flask', 'spaCy']}
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
