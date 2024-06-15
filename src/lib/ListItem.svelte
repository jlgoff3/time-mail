<script lang="ts">
	import { currentEmail } from './store/currentEmail';

	export let item: Email;
	export let i;

	const MAX_MESSAGE_LENGTH = 64;

	const { from, subject, message } = item;

	const openEmail = () => ($currentEmail = i);

	const trimmed_message =
		message.length > MAX_MESSAGE_LENGTH
			? message.substring(0, MAX_MESSAGE_LENGTH) + '...'
			: message;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article
	on:click={openEmail}
	class={'border-b-4 border-black p-2 ' +
		($currentEmail == i ? 'bg-blue-400' : 'hover:bg-slate-400 ')}
>
	<h3 class="text-xl font-bold">{from}</h3>
	<h4 class="text-sm font-bold">{subject}</h4>
	<p class="text-xs">{trimmed_message}</p>
</article>

<style>
</style>
