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
	footer > div > a {
		padding: .65rem;
		border: 2px solid black;
		margin: 1rem;
	} 
</style>

<Header />
<main>
	<slot></slot>
</main>

<footer>
	<div style="margin: 1.5rem 0; margin-bottom:2.2rem">
		<a href="/MiloStordahl-Resume.pdf" target="_blank" download>Resume</a>
		<a href="/MiloStordahl-CoverLetter.pdf" target="_blank" download>Cover Letter</a>
	</div>
	© 2021 Milo Stordahl | built by <a href="https://stordahl.dev">Jacob Stordahl</a>
</footer>
