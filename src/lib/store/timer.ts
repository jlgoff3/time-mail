import { derived, readable } from 'svelte/store';

export const ESCAPE_ROOM_DURATION = 45 /* Minutes */ * 60; /* Seconds */
const initialTime = new Date();

export const timer = readable(0, (set) => {
	const update = () => {
		const currentTime = new Date();
		const seconds = Math.floor((currentTime.getTime() - initialTime.getTime()) / 1000);
		set(seconds);
	};

	const interval = setInterval(update, 1000);

	return () => clearInterval(interval);
});

export const currentMinutes = derived(timer, ($timer) => {
	return Math.floor($timer / 60);
});

export const currentSeconds = derived(timer, ($timer) => {
	return $timer % 60;
});

export const remainingTime = derived(timer, ($timer) => {
	const time = ESCAPE_ROOM_DURATION - $timer;
	return time >= 0 ? time : 0;
});

export const remainingMinutes = derived(remainingTime, ($remainingTime) => {
	return Math.floor($remainingTime / 60);
});

export const remainingSeconds = derived(remainingTime, ($remainingTime) => {
	return $remainingTime % 60;
});

export const countdown = derived(
	[remainingMinutes, remainingSeconds],
	([$remainingMinutes, $remainingSeconds]) => {
		return `${$remainingMinutes}:${$remainingSeconds.toString().padStart(2, '0')}`;
	}
);
