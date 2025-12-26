<script>
  import { page } from '$app/state';
  import '../style.css';

  let { children } = $props();

  let pages = [
    { url: './', title: 'Home' },
    { url: './projects', title: 'Projects' },
    { url: './contact', title: 'Contact' },
    { url: 'https://github.com/vizdevbiz', title: 'GitHub' },
  ];
</script>

<nav>
  {#each pages as p}
    <a
      href={p.url}
      class:current={p.url === page.route.id}
      target={p.url.startsWith('http') ? '_blank' : null}>{p.title}</a
    >
  {/each}
</nav>

{@render children()}

<style>
  nav {
    --border-color: oklch(50% 10% 200 / 40%);
    display: flex;
    margin-top: 3em;
    margin-bottom: 3em;
    border-bottom: 1px solid var(--border-color);
  }

  nav a {
    flex: 1;
    padding: 0.5em;
    text-align: center;
    text-decoration: none;
    color: inherit;
    border-bottom: 0.4em solid transparent;
    padding-bottom: 0em;
  }

  a.current {
    border-bottom-color: var(--border-color);
  }

  a:hover {
    border-bottom-color: var(--color-accent);
    /* background-color: oklch(from var(--color-accent) 50% 25% h / 40%); */
    background-color: color-mix(in oklch, var(--color-accent), canvas 85%);
  }

  /* nav a {
  flex: 1;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

a.current {
  border-bottom: 0.4em solid oklch(80% 3% 200);
  padding-bottom: 0em;
}

a:hover {
  border-bottom: 0.4em solid var(--color-accent);
  padding-bottom: 0em;
} */
</style>
