<script lang="ts">
	import Email from '$lib/Email.svelte';
	import List from '$lib/List.svelte';
	import emails from '$lib/emails.json';
	import { currentEmail } from '$lib/store/currentEmail';
</script>

<main class="grid grid-cols-4 h-screen">
	<section class="border-r-4 border-black">
		<h5 class="border-b-4 border-black p-2 uppercase font-bold text-lg text-center">Messages</h5>
		<List items={emails}></List>
	</section>
	<section class="col-span-3"><Email email={emails[$currentEmail]}></Email></section>
</main>
