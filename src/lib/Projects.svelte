<script>
  import Project from './Project.svelte';

  let { data = [], hLevel = 2 } = $props();
</script>

<div class="projects">
  {#each data as p}
    <Project data={p} {hLevel} />
  {/each}
</div>

<style>
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  }
</style>
