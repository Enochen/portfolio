<script lang="ts">
	import { scrollToAnchor } from '$lib/misc/util';
	import { showDesc } from '$lib/stores';
</script>

<div
	class="{$showDesc
		? 'max-h-64'
		: 'max-h-0'} transition-max-height duration-500 ease-out">
	<div
		class="{$showDesc
			? 'visible opacity-100 duration-500'
			: 'invisible opacity-0 duration-200'} text-md mx-8 max-w-md transition-[fade,font-size] ease-out md:max-w-lg md:text-lg">
		<p>
			Currently writing emails @ <a class="anchor" href="https://braze.com/"
				>Braze</a> in NYC.
		</p>
		<br />
		<p>
			I did my undergrad and master's in Computer Science in <a
				class="anchor"
				href="https://cornell.edu/">Ithaca</a
			>. I love building things that are efficient, reliable, and which get
			people to ask "<span
				class="underline decoration-secondary-400 decoration-dotted decoration-1 underline-offset-4"
				title="way too much time">wow how much time did you spend on this?</span
			>"
		</p>
		<br />
		<p>
			Check out some of my projects <a
				class="anchor"
				href="#projects"
				on:click|preventDefault={scrollToAnchor}>here</a
			>.
		</p>
	</div>
</div>
