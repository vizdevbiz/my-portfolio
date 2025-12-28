<script>
  import * as d3 from 'd3';

  let { data = [], selectedIndex = $bindable(-1) } = $props();

  const sliceGenerator = d3.pie().value((d) => d.value);
  const arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

  const arcData = $derived(sliceGenerator(data));
  const arcs = $derived(arcData.map((d) => arcGenerator(d)));

  const colors = d3.scaleOrdinal(d3.schemePaired);

  function toggleWedge(i, e) {
    if (!e.key || e.key === 'Enter') {
      selectedIndex = selectedIndex === i ? -1 : i;
    }
  }
</script>

<div class="container">
  <svg viewBox="-50 -50 100 100">
    {#each arcs as arc, i}
      <path
        d={arc}
        fill={colors(i)}
        class:selected={selectedIndex === i}
        onclick={(e) => toggleWedge(i, e)}
        onkeyup={(e) => toggleWedge(i, e)}
        style="
	--start-angle: {arcData[i]?.startAngle}rad;
	--end-angle: {arcData[i]?.endAngle}rad;"
        tabindex="0"
        role="button"
        aria-label={data[i].label}
      />
    {/each}
  </svg>
  <ul class="legend">
    {#each data as d, i}
      <li style="--color: {colors(i)}">
        <span class="swatch" class:selected={selectedIndex === i}></span>
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
    margin: 2.5em;
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

  svg:has(path:hover, path:focus-visible) {
    path:not(:hover, :focus-visible) {
      opacity: 50%;
    }
  }

  path {
    transition: 300ms;
    cursor: pointer;
    outline: none;
    --angle: calc(var(--end-angle) - var(--start-angle));
    --mid-angle: calc(var(--start-angle) + var(--angle) / 2);
    transform: rotate(var(--mid-angle)) translateY(0)
      rotate(calc(-1 * var(--mid-angle)));

    &.selected {
      transform: rotate(var(--mid-angle)) translateY(-6px) scale(1.1)
        rotate(calc(-1 * var(--mid-angle)));
    }
  }

  .selected {
    --color: oklch(60% 45% 0) !important;

    &:is(path) {
      fill: var(--color);
    }
  }
</style>
