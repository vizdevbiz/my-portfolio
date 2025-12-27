<script>
  import Projects from '$lib/Projects.svelte';
  import projects from '$lib/projects.json';

  // let profileData = {
  //   ok: true,
  //   json: async () => ({
  //     followers: 100,
  //     following: 100,
  //     public_repos: 100,
  //     public_gists: 100,
  //   }),
  // };
</script>

<h1>Hi! It's VizDev Biz.</h1>
<p>
  This is my test portfolio site. This is my test portfolio site. This is my
  test portfolio site. This is my test portfolio site. This is my test portfolio
  site. This is my test portfolio site.
</p>
<img src="images/golden-retriever.png" alt="A Golden Retriever puppy" />
<section>
  <h2>My GitHub Stats</h2>
  {#await fetch('https://api.github.com/users/vizdevbiz')}
    <!-- {#await profileData} -->
    <p>Loading...</p>
  {:then response}
    {#await response.json()}
      <p>Decoding...</p>
    {:then data}
      <dl>
        <dt>Followers</dt>
        <dd>{data.followers}</dd>
        <dt>Following</dt>
        <dd>{data.following}</dd>
        <dt>Public Repos</dt>
        <dd>{data.public_repos}</dd>
        <dt>Public Gists</dt>
        <dd>{data.public_gists}</dd>
      </dl>
    {:catch error}
      <p class="error">
        Something went wrong: {error.message}
      </p>
    {/await}
  {:catch error}
    <p class="error">
      Something went wrong: {error.message}
    </p>
  {/await}
</section>

<h2>LatestProjects</h2>
<Projects data={projects.slice(0, 3)} hLevel={3} />

<style>
  dl {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  dt {
    grid-row: 1;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: oklch(50% 10% 200);
  }

  dd {
    grid-row: 2;
    font-size: 1.5rem;
    margin: 0;
  }
</style>
