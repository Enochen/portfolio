import type { MouseEventHandler } from "svelte/elements";

export const scrollToAnchor: MouseEventHandler<HTMLAnchorElement> = (event) => {
	const link = event.currentTarget;
	const anchorId = new URL(link.href).hash.replace("#", "");
	const anchor = document.getElementById(anchorId);
	if (!anchor) return;
	window.scrollTo({
		top: anchor.offsetTop,
		behavior: "smooth",
	});
};

export const getRandomIndex = (length: number, lastChosen?: number) => {
	let randomIndex: number | undefined;
	do {
		randomIndex = Math.floor(Math.random() * length);
	} while (randomIndex === lastChosen && length > 1);
	return randomIndex;
};
