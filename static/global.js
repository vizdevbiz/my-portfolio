console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

let pages = [
  { url: '.', title: 'Home' },
  { url: 'projects', title: 'Projects' },
  { url: 'contact', title: 'Contact' },
  { url: 'https://github.com/vizdevbiz', title: 'GitHub' },
];

let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;
  let title = p.title;

  // nav.insertAdjacentHTML("beforeend", /*html*/`<a href="${ url }">${ title }</a>` );
  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;

  // a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
  if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add('current');
  }

  if (a.host !== location.host) {
    a.target = '_blank';
  }

  nav.append(a);
}

document.body.insertAdjacentHTML(
  'afterbegin',
  /*html*/ `
	<label class="color-scheme">
      Theme:
      <select>
          <option value="light dark">Automatic</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
      </select>
    </label>`
);

const select = document.querySelector('select');

if (localStorage.colorScheme) {
  document.documentElement.style.setProperty(
    'color-scheme',
    localStorage.colorScheme
  );
  select.value = localStorage.colorScheme;
}

select.addEventListener('input', function (event) {
  const value = event.target.value;
  // console.log("color scheme changed to", value);
  document.documentElement.style.setProperty('color-scheme', value);
  localStorage.colorScheme = value;
});

const form = document.querySelector('form');

form?.addEventListener('submit', function (event) {
  event.preventDefault();

  const data = new FormData(form);
  // console.log(data)
  // const dataObj = Object.fromEntries(data.entries());
  // console.log(dataObj);

  // let mailtoURL = "mailto:foo@example.com?";
  // for (let [name, value] of data) {
  //   // console.log(name, encodeURIComponent(value));
  //   mailtoURL += `${name}=${encodeURIComponent(value)}&`;

  // }

  // mailtoURL = mailtoURL.slice(0, -1);

  let params = [];
  for (let [name, value] of data) {
    // console.log(name, encodeURIComponent(value));
    params.push(`${name}=${encodeURIComponent(value)}`);
  }
  const mailtoURL = `mailto:foo@example.com?${params.join('&')}`;
  console.log(mailtoURL);

  location.href = mailtoURL;
});
