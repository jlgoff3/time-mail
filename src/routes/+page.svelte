<script lang="ts">
	import List from '$lib/List.svelte';
	import emails from '$lib/emails.json';

	let currentEmail = null;

	const openEmail = (event) => {
		currentEmail = emails[event.detail.i];
	};
</script>

<main class="grid grid-cols-4">
	<section>
		<List on:message={openEmail} items={emails}></List>
	</section>
	<section class="col-span-3">{currentEmail?.message}</section>
</main>
