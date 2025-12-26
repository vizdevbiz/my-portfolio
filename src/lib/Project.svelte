<script>
  let { data = {}, hLevel = 2 } = $props();
</script>

<article>
  <svelte:element this={'h' + hLevel}>{data.title}</svelte:element>
  <img src={data.image} alt="" />
  <p>{data.description}</p>
</article>

<style>
  article {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
  }

  img {
    max-width: 90%;
  }
</style>
