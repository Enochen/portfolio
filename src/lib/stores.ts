import { writable } from "svelte/store";
import { splashTexts } from "./misc/splashes";

export const showDesc = writable(false);
export const splash = writable(
	splashTexts[0] || "refresh for something funny...",
);
