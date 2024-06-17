<script lang="ts">
	import Email from '$lib/Email.svelte';
	import List from '$lib/List.svelte';
	import { emails } from '$lib/store/emails';
	import { currentEmail } from '$lib/store/currentEmail';
	import Window from '$lib/Window.svelte';
</script>

<main class="grid grid-cols-2 grid-rows-2 h-screen gap-4 p-4">
	<section class="row-span-2">
		<Window title="Message"><Email email={$emails[$currentEmail]}></Email></Window>
	</section>
	<section class="border-r-4 border-black">
		<Window title="Oxygen">
			<p>Low Oxygen :(</p>
		</Window>
	</section>
	<section class="border-r-4 border-black">
		<Window title="Emails">
			<List items={$emails}></List>
		</Window>
	</section>
</main>
