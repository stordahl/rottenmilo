<script lang="ts">
	import { client } from '../components/SanityClient'
	import Project from '../components/Project.svelte'

	const query = "*[_type == 'project']"
	let arr = []

	client.fetch(query).then(items => arr = items);

	// $: console.log(arr)
</script>

{#each arr as proj}
	<Project {...proj}/>
{/each}

<style>
	
</style>