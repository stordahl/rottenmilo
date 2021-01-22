<script>
  import Carousel from '@beyonk/svelte-carousel'
  import { urlFor } from './SanityClient'

  export let title
  export let description
  export let images = [];
  // export let location;
</script>

<div class="proj">
  <h1>{title}</h1>
  {#if images.length > 2}
    <Carousel perPage={3}>
      <span class="control" slot="left-control" >
        <img src="/left-arrow.png" alt="">
      </span>
      {#each images as i}
        <div class="slide-content">
          <img src={urlFor(i.image).url()} alt={i.alt}>
        </div>
      {/each}
      <span class="control" slot="right-control" >
        <img src="/right-arrow.png" alt="">
      </span>
    </Carousel>
  <!-- </div> -->
  {:else}
    <div style="width: max-content; margin: 0 auto">
    {#each images as i}
      <img src={urlFor(i.image).url()} alt={i.alt} style="margin-right:1rem;">
    {/each}
    </div>
  {/if}
  
  <p>{description}</p>
  <hr/>
</div>

<style>
  img {
    max-width: 300px;
  }
  h1 {
    margin-top:2rem;
    margin-bottom: 1rem;
  }
  p {
    margin: 1.5rem auto;
    font-size: 1.25rem;
  }

</style>