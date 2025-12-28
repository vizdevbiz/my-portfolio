<script>
  import Projects from '$lib/Projects.svelte';
  import projects from '$lib/projects.json';
  import Pie from '$lib/Pie.svelte';

  import * as d3 from 'd3';

  let query = $state('');

  const filteredProjects = $derived(
    projects.filter((p) => {
      if (query) {
        let values = Object.values(p).join('\n').toLowerCase();
        return values.includes(query.toLowerCase());
      }

      return true;
    })
  );

  const pieData = $derived.by(() => {
    const rolledData = d3.rollups(
      filteredProjects,
      (v) => v.length,
      (d) => d.year
    );

    return rolledData.map(([year, count]) => ({
      label: year,
      value: count,
    }));
  });

  let selectedYearIndex = $state(-1);

  const selectedYear = $derived(
    selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null
  );

  const filteredByYear = $derived(
    filteredProjects.filter((p) => {
      if (selectedYear) {
        return p.year === selectedYear;
      }
      return true;
    })
  );
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>
<h1>{projects.length} Projects</h1>
<Pie data={pieData} bind:selectedIndex={selectedYearIndex} />
<input
  type="search"
  bind:value={query}
  aria-label="Search projects"
  placeholder="🔍 Search projects..."
/>
<Projects data={filteredByYear} />
