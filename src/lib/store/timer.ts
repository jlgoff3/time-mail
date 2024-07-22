import { derived, writable, get, readable } from 'svelte/store';

export const ESCAPE_ROOM_DURATION = 35 /* Minutes */ * 60; /* Seconds */
export const ADD_TIME = 10 /* Minutes */ * 60; /* Seconds */

const lastTime = writable(new Date());
const lastEmailTime = writable(new Date());

export const timer = writable(0, (_set, update) => {
	const updateTime = () => {
		const currentTime = new Date();
		const delta_seconds = ((currentTime.getTime() - get(lastTime).getTime()) / 1000);
		lastTime.set(currentTime)
		update(t => t + delta_seconds);
	};

	const interval = setInterval(updateTime, 1000);

	return () => clearInterval(interval);
});

export const emailTimer = writable(0, (_set, update) => {
	const updateTime = () => {
		const currentTime = new Date();
		const delta_seconds = ((currentTime.getTime() - get(lastEmailTime).getTime()) / 1000);
		lastEmailTime.set(currentTime)
		update(t => t + delta_seconds);
	};

	const interval = setInterval(updateTime, 1000);

	return () => clearInterval(interval);
});

export const addTime = () => timer.update(time => time - ADD_TIME)

export const resetAllTime = () => {
	timer.update(_t => 0)
	emailTimer.update(_t => 0)
}

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
	return Math.round($remainingTime % 60);
});

export const countdown = derived(
	[remainingMinutes, remainingSeconds],
	([$remainingMinutes, $remainingSeconds]) => {
		return `${$remainingMinutes}:${$remainingSeconds.toString().padStart(2, '0')}`;
	}
);
