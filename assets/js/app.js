
const nameContainer = document.getElementById('name');
const blogContainer = document.getElementById('blog');
const locationConatiner = document.getElementById('location');

async function displayUser(event) {
  event.preventDefault();
  let username = document.getElementById('user').value;
  nameContainer.textContent = 'cargando...';
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    nameContainer.innerHTML = `<h1>${data.name}</h1>`;
    blogContainer.innerHTML = `<a href="https://github.com/${username}"><h2>${data.blog}</h2></a>`;
    locationConatiner.innerHTML = `<h3>${data.location}</h3>`;
  }
  catch (err) {
    handleError(err);  // No logre que funcionara para cachar errores. También falta que si ponene espacios antes no atrape error
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameContainer.textContent = `Algo salió mal: ${err}`
}

/* ('/* stolinski */
const form = document.querySelector('form');
form.addEventListener('submit', displayUser);