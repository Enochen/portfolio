import { splashTexts } from "$lib/misc/splashes";
import { getRandomIndex } from "$lib/misc/util";
import type { PageServerLoad } from "./$types";

let lastSplashIndex: number | undefined;

export const load: PageServerLoad = async () => {
	lastSplashIndex = getRandomIndex(splashTexts.length, lastSplashIndex);
	return {
		splash: splashTexts[lastSplashIndex],
	};
};
