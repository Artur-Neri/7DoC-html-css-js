function renderMovie(movie) {
    // Renderizar toda a estrutura do filme na página
    const filme = document.createElement('div');
    filme.classList.add('filme');

    const container = document.createElement('div');
    container.classList.add('filme__container');

    const esquerda = document.createElement('div');
    esquerda.classList.add('filme__esquerda');

    const imagem_container = document.createElement('div');
    imagem_container.classList.add('imagem');

    esquerda.appendChild(imagem_container);

    const filme_imagem = document.createElement('img');
    filme_imagem.src = movie.image;

    imagem_container.appendChild(filme_imagem);

    const filme__info = document.createElement('div');
    filme__info.classList.add('filme__info');   

    esquerda.appendChild(filme__info);

    const nome_filme = document.createElement('h3');
    nome_filme.textContent = `${movie.title} (${movie.release_date})`;    

    filme__info.appendChild(nome_filme);

    const acoes__filme = document.createElement('div');
    acoes__filme.classList.add('filme__acoes');

    filme__info.appendChild(acoes__filme);

    const avaliacao__filme = document.createElement('div');
    avaliacao__filme.classList.add('filme__avaliacao');

    acoes__filme.appendChild(avaliacao__filme)

    const starImg = document.createElement('img');
    starImg.src = '/imagens/Star.png';

    const favoritar = document.createElement('span');
    favoritar.textContent = 'Favoritar';

    avaliacao__filme.appendChild(starImg);

    const avaliacao = document.createElement('span');
    avaliacao.textContent = movie.vote_average;

    avaliacao__filme.appendChild(avaliacao);

    const favoritarFilme = document.createElement('div');
    favoritarFilme.classList.add('filme__favoritar');

    acoes__filme.appendChild(favoritarFilme);

    const heartImg = document.createElement('img');
    heartImg.src = '/imagens/Heart.svg';

    favoritarFilme.appendChild(heartImg);
    favoritarFilme.appendChild(favoritar);

    favoritarFilme.classList.add('filme__favoritar');

    const filmeDescription = document.createElement('div');
    filmeDescription.classList.add('filme__description');

    const descricao__filme = document.createElement('p');
    descricao__filme.textContent = movie.overview;
    filmeDescription.appendChild(descricao__filme);
    container.appendChild(esquerda);
    container.appendChild(filmeDescription);
    document.body.appendChild(filme);
    filme.appendChild(container);
    }

let movies = []

function renderizaFilmes() {
  movies.forEach(movie => renderMovie(movie))
}

const options_movies = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmI2OWM5YzBmZjhjMjI5ZTgzMzI2OTc0OGM0Nzg1YiIsInN1YiI6IjY1YzEzYzRiODFhN2ZjMDE2MWVkNjJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvKHyUk7loXbu4b_HegcgSUEWfKV8NFLjdQ0XF5FQrc'
  }
};

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options_movies)
  .then(response => response.json())
  .then(response => response.results)
  .then(response => response.forEach(filme => movies.push(filme)))
  .then(renderizaFilmes)
  .catch(err => console.error(err));
