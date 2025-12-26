<script>
  import projects from '$lib/projects.json';
  import Project from '$lib/Project.svelte';
</script>

<h1>Hi! It's VizDev Biz.</h1>
<p>
  This is my test portfolio site. This is my test portfolio site. This is my
  test portfolio site. This is my test portfolio site. This is my test portfolio
  site. This is my test portfolio site.
</p>
<img src="images/golden-retriever.png" alt="A Golden Retriever puppy" />

<h2>LatestProjects</h2>
<div class="projects highlights">
  {#each projects.slice(0, 3) as p}
    <Project data={p} hLevel={3} />
  {/each}
</div>
