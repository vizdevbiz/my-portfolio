<script>
  import Projects from '$lib/Projects.svelte';
  import projects from '$lib/projects.json';
</script>

<h1>Hi! It's VizDev Biz.</h1>
<p>
  This is my test portfolio site. This is my test portfolio site. This is my
  test portfolio site. This is my test portfolio site. This is my test portfolio
  site. This is my test portfolio site.
</p>
<img src="images/golden-retriever.png" alt="A Golden Retriever puppy" />

<h2>LatestProjects</h2>
<Projects data={projects.slice(0, 3)} hLevel={3} />
