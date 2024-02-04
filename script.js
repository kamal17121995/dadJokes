const jokeDisplay = document.getElementById('joke');
const jokebtn = document.getElementById('jokebtn');

jokebtn.addEventListener('click', getJokes);

getJokes();

async function getJokes() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  jokeDisplay.innerHTML = data.joke;

  //   fetch('https://icanhazdadjoke.com/', config)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       jokeDisplay.innerHTML = data.joke;
  //     });
}
