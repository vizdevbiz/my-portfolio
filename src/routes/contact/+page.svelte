<svelte:head>
	<title>Contact</title>
</svelte:head>
<h1>Contact</h1>
    <form action="mailto:foo@example.com" method="get">
      <label for="email"
        >Email:
        <input type="email" name="email" value="foo@example.com" />
      </label>
      <label for="subject"
        >Subject:<input name="subject" value="Hello"
      /></label>
      <label for="message"
        >Message:<textarea name="message">Sup?</textarea>
      </label>
      <button>Submit</button>
    </form>