<script lang="ts">
	import { currentEmail } from './store/currentEmail';
	import { emails } from './store/emails';

	export let i;

	const MAX_SUBJECT_LENGTH = 24;
	const MAX_MESSAGE_LENGTH = 80;

	$: email = $emails[i];

	$: read = email.read;

	const openEmail = () => {
		$currentEmail = i;
		$read = true;
	};

	const trim = (str: string, length: number) =>
		str.length > MAX_MESSAGE_LENGTH ? str.substring(0, MAX_MESSAGE_LENGTH) + '...' : str;

	$: from = email.from;
	$: trimmed_subject = trim(email.subject, MAX_SUBJECT_LENGTH);
	$: trimmed_message = trim(email.message, MAX_MESSAGE_LENGTH);

	$: item_class = [
		'grid grid-cols-6 border-b-4 border-black p-2',
		$currentEmail == i ? 'bg-blue-400' : 'hover:bg-slate-400',
		$read ? '' : 'font-bold'
	].join(' ');
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article on:click={openEmail} class={item_class}>
	<h3>{from}</h3>
	<h4>{trimmed_subject}</h4>
	<p class="col-span-4">{trimmed_message}</p>
</article>

<style>
</style>
