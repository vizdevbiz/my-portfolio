<script>
  import Projects from '$lib/Projects.svelte';
  import projects from '$lib/projects.json';
  import Pie from '$lib/Pie.svelte';

  import * as d3 from 'd3';

  let rolledData = d3.rollups(
    projects,
    (v) => v.length,
    (d) => d.year
  );

  let pieData = rolledData.map(([year, count]) => ({
    label: year,
    value: count,
  }));
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>
<h1>{projects.length} Projects</h1>
<Pie data={pieData} />
<Projects data={projects} />
