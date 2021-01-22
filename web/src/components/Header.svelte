<script>
  // import { setContext, getContext } from 'svelte'
  import Logo from './Logo.svelte'
  // import Toggle from './Toggle.svelte'
</script>

<header>
  <Logo />
  <!-- <Toggle /> -->
  <h2>portfolio</h2>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    margin: 2rem;
    margin-bottom: 2.5rem;
  }
</style>