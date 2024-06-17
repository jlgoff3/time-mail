<script lang="ts">
	import { currentEmail } from './store/currentEmail';

	export let item: Email;
	export let i;

	const MAX_SUBJECT_LENGTH = 24;
	const MAX_MESSAGE_LENGTH = 80;

	const { from, subject, message } = item;

	const openEmail = () => ($currentEmail = i);

	const trim = (str: string, length: number) =>
		str.length > MAX_MESSAGE_LENGTH ? str.substring(0, MAX_MESSAGE_LENGTH) + '...' : str;

	const trimmed_subject = trim(subject, MAX_SUBJECT_LENGTH);
	const trimmed_message = trim(message, MAX_MESSAGE_LENGTH);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article
	on:click={openEmail}
	class={'grid grid-cols-6 border-b-4 border-black p-2 ' +
		($currentEmail == i ? 'bg-blue-400' : 'hover:bg-slate-400 ')}
>
	<h3>{from}</h3>
	<h4>{trimmed_subject}</h4>
	<p class="col-span-4">{trimmed_message}</p>
</article>

<style>
</style>
