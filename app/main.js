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
nome_filme.textContent = `${movie.title} (${movie.year})`;    

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
avaliacao.textContent = movie.rating;

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
descricao__filme.textContent = movie.description;
filmeDescription.appendChild(descricao__filme);
container.appendChild(esquerda);
container.appendChild(filmeDescription);
document.body.appendChild(filme);
filme.appendChild(container);
}

const movies = [
  {
    image: '/imagens/batman.png',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description: 'Descrição do filme…',
    isFavorited: true,
  },
  {
    image: '/imagens/avengers.png',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description: 'Descrição do filme…',
    isFavorited: false
  },
  {
    image: '/imagens/doctor.png',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description: 'Descrição do filme…',
    isFavorited: false
  },
]

movies.forEach(movie => renderMovie(movie))