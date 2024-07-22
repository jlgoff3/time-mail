<script lang="ts">
	import { currentEmail } from './store/currentEmail';
	import { filteredEmails, emails, readEmails } from './store/emails';

	export let i;

	const MAX_SUBJECT_LENGTH = 24;
	const MAX_MESSAGE_LENGTH = 40;

	$: realIndex = $emails.findIndex((e) => e.uuid == $filteredEmails[i].uuid);

	$: email = $filteredEmails[i];

	const openEmail = () => {
		$currentEmail = i;
		$readEmails[realIndex] = true;
	};

	const trim = (str: string, length: number) =>
		str.length > MAX_MESSAGE_LENGTH ? str.substring(0, MAX_MESSAGE_LENGTH) + '...' : str;

	$: from = email.from;
	$: trimmed_subject = trim(email.subject, MAX_SUBJECT_LENGTH);
	$: trimmed_message = trim(email.message, MAX_MESSAGE_LENGTH);

	$: item_class = [
		'grid grid-cols-12 border-b-4 border-black py-2 px-1',
		$currentEmail == i ? 'bg-blue-400' : 'hover:bg-slate-400',
		$readEmails[realIndex] ? 'font-thin' : 'font-bold italic'
	].join(' ');
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article on:click={openEmail} class={item_class}>
	<h3 class="col-span-3">{from} {email.time}</h3>
	<h4 class="col-span-2">{trimmed_subject}</h4>
	<p class="col-span-7">{trimmed_message}</p>
</article>

<style>
</style>
