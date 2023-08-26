<script lang="ts">
	import { hidingDesc } from '$lib/stores';
</script>

<div
	class="{$hidingDesc
		? 'max-h-0'
		: 'max-h-64'} transition-max-height duration-500 ease-out">
	<div
		class="{$hidingDesc
			? 'invisible opacity-0 duration-200'
			: 'visible opacity-100 duration-500'} text-md mx-8 max-w-md transition-[fade,font-size] ease-out md:max-w-lg md:text-lg">
		<p>
			Currently working on my M.Eng. in Computer Science at Cornell University.
			I am passionate about designing efficient and reliable systems that bring
			joy to others!
		</p>
		<br />
		<p>Check back later for more content coming soon! 👀</p>
	</div>
</div>
