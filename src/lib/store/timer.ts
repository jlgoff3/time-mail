import { derived, writable, get, readable } from 'svelte/store';

export const ESCAPE_ROOM_DURATION = 35 /* Minutes */ * 60; /* Seconds */
export const ADD_TIME = 10 /* Minutes */ * 60; /* Seconds */

const lastTime = writable(new Date());
const lastEmailTime = writable(new Date());

export const timer = writable(0, (set) => {
	const update = () => {
		const currentTime = new Date();
		const delta_seconds = Math.floor((currentTime.getTime() - get(lastTime).getTime()) / 1000);
		lastTime.set(currentTime)
		set(get(timer) + delta_seconds);
	};

	const interval = setInterval(update, 1000);

	return () => clearInterval(interval);
});

export const emailTimer = readable(0, (set) => {
	const update = () => {
		const currentTime = new Date();
		const delta_seconds = Math.floor((currentTime.getTime() - get(lastEmailTime).getTime()) / 1000);
		lastTime.set(currentTime)
		set(get(emailTimer) + delta_seconds);
	};

	const interval = setInterval(update, 1000);

	return () => clearInterval(interval);
});

export const addTime = () => timer.update(time => time - ADD_TIME)

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
