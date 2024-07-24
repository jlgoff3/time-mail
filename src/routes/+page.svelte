<script lang="ts">
	import Email from '$lib/Email.svelte';
	import Gauge from '$lib/Gauge.svelte';
	import List from '$lib/List.svelte';
	import { filteredEmails } from '$lib/store/emails';
	import {
		addTime,
		countdown,
		DEBUG_FLAG,
		emailTimer,
		fastForward,
		resetAll
	} from '$lib/store/timer';
	import Window from '$lib/Window.svelte';

	const ADD_TIME_KEY = 'a';
	const RESET_ALL_KEY = 'r';

	const onKeyDown = (e) => {
		switch (e.key) {
			case ADD_TIME_KEY:
				addTime();
				break;
			case RESET_ALL_KEY:
				DEBUG_FLAG ? fastForward() : resetAll();
				break;
		}
	};
</script>

<main class="grid grid-cols-2 grid-rows-2 h-screen gap-4 p-4">
	<section class="row-span-2">
		<Window title="Message"><Email></Email></Window>
	</section>
	<section>
		<Window title={DEBUG_FLAG ? 'Oxygen: ' + $countdown : 'Oxygen'}>
			<Gauge></Gauge>
		</Window>
	</section>
	<section>
		<Window title={DEBUG_FLAG ? 'Emails: ' + $emailTimer : 'Oxygen'}>
			<List items={$filteredEmails}></List>
		</Window>
	</section>
</main>

<svelte:window on:keydown|preventDefault={onKeyDown} />
