<script lang="ts">
	export let items;
	import ListItem from './ListItem.svelte';
</script>

<div class="flex flex-col">
	{#if items}
		{#each items as item, i}
			<ListItem on:message {item} {i} />
		{/each}
	{/if}
</div>
