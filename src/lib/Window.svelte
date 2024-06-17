<script lang="ts">
	export let title: string;
</script>

<div class="flex flex-col border-4 border-black h-full overflow-auto">
	<h5 class="border-b-4 border-black p-2 uppercase font-bold text-sm text-center">{title}</h5>
	<slot />
</div>
