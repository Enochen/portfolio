import { join } from 'path';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(
			require.resolve('@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}',
		),
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			transitionProperty: {
				'font-size': 'font-size',
				spacing: 'margin, padding',
				'max-height': 'max-height',
				fade: 'visibility, opacity, font-size',
			},
		},
	},
	plugins: [...skeleton()],
};
