<script lang="ts">
	import Email from '$lib/Email.svelte';
	import List from '$lib/List.svelte';
	import { emails } from '$lib/store/emails';
	import { countdown } from '$lib/store/timer';
	import Window from '$lib/Window.svelte';
</script>

<main class="grid grid-cols-2 grid-rows-2 h-screen gap-4 p-4">
	<section class="row-span-2">
		<Window title="Message"><Email></Email></Window>
	</section>
	<section>
		<Window title="Oxygen">
			<p>{$countdown}</p>
		</Window>
	</section>
	<section>
		<Window title="Emails">
			<List items={$emails}></List>
		</Window>
	</section>
</main>
