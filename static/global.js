console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

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
