<script lang="ts">
	import Email from '$lib/Email.svelte';
	import Gauge from '$lib/Gauge.svelte';
	import List from '$lib/List.svelte';
	import { filteredEmails } from '$lib/store/emails';
	import { addTime, countdown } from '$lib/store/timer';
	import Window from '$lib/Window.svelte';

	const A_KEY = 'a';

	const onKeyDown = (e) => e.key == A_KEY && addTime();
</script>

<main class="grid grid-cols-2 grid-rows-2 h-screen gap-4 p-4">
	<section class="row-span-2">
		<Window title="Message"><Email></Email></Window>
	</section>
	<section>
		<Window title={"Oxygen: " + $countdown}>
			<Gauge></Gauge>
		</Window>
	</section>
	<section>
		<Window title="Emails">
			<List items={$filteredEmails}></List>
		</Window>
	</section>
</main>

<svelte:window on:keydown|preventDefault={onKeyDown} />
