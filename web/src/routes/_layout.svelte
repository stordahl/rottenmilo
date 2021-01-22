<script lang="ts">
	import Header from '../components/Header.svelte';

	// export let segment: string;
</script>

<style>
	main {
		position: relative;
		max-width: 65em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	footer {
		text-align: center;
		margin: 2rem auto;
	}
</style>

<Header />
<main>
	<slot></slot>
</main>
<footer>
	© 2021 Milo Stordahl | built by <a href="https://stordahl.dev">Jacob Stordahl</a>
</footer>
