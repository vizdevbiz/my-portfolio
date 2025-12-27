<script>
  let { data = {}, hLevel = 2 } = $props();
</script>

<article>
  <svelte:element this={'h' + hLevel}>{data.title}</svelte:element>
  <img src={data.image} alt="" />
  <div>
    <p>{data.description}</p>
    <p class="year">{'c. ' + data.year}</p>
  </div>
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

  .year {
    font-variant-numeric: oldstyle-nums;
  }
</style>
