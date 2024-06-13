<script lang="ts">
	export let item: Email;
	export let i;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const MAX_MESSAGE_LENGTH = 64;

	const { from, subject, message } = item;

	const openEmail = () => dispatch('message', { i });

	const trimmed_message =
		message.length > MAX_MESSAGE_LENGTH
			? message.substring(0, MAX_MESSAGE_LENGTH) + '...'
			: message;
</script>

<article on:click={openEmail} class="border-b-4 border-black">
	<h3 class="text-xl font-bold">{from}</h3>
	<h4 class="text-sm font-bold">{subject}</h4>
	<p class="text-xs">{trimmed_message}</p>
</article>

<style>
</style>
