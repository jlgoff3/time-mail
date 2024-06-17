<script lang="ts">
	import Avatar from './Avatar.svelte';
	import { currentEmail } from './store/currentEmail';
	import { emails } from './store/emails';

	$: email = $emails[$currentEmail];
</script>

<article class="container p-6">
	{#if email}
		<h2 class="font-bold text-4xl">{email.subject}</h2>
		<div class="flex py-3">
			<Avatar from={email.from}></Avatar>
			<div class="ml-4">
				<h3 class="text-xl">{email.from}</h3>
				<h5>To: {email.to}</h5>
			</div>
		</div>
		<p class="whitespace-pre-line">{email.message}</p>
	{:else}
		<h2>Click on an email to open.</h2>
	{/if}
</article>
