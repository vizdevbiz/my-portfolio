<script>
  import * as d3 from 'd3';

  let { data = [] } = $props();

  let sliceGenerator = d3.pie().value((d) => d.value);
  let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

  let arcData = sliceGenerator(data);
  let arcs = arcData.map((d) => arcGenerator(d));

  let colors = d3.scaleOrdinal(d3.schemePaired);
</script>

<div class="container">
  <svg viewBox="-50 -50 100 100">
    {#each arcs as arc, i}
      <path d={arc} fill={colors(i)} />
    {/each}
  </svg>

  <ul class="legend">
    {#each data as d, index}
      <li style="--color: {colors(index)}">
        <span class="swatch"></span>
        {d.label} <em>({d.value})</em>
      </li>
    {/each}
  </ul>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
  }

  svg {
    max-width: 20em;
    margin-block: 2em;
    overflow: visible;
  }

  .legend {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
    flex: 1;
    border: 1px solid #ccc;
    padding: 0.75em;
    margin: 2em;
    gap: 1em;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.3em;
  }

  .swatch {
    width: 1em;
    height: 1em;
    background-color: var(--color);
    border-radius: 50%;
  }
</style>
