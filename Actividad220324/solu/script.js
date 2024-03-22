const movies = document.querySelectorAll('.movie');

movies.forEach(movie => {
  movie.addEventListener('click', () => {
    movies.forEach(otherMovie => {
      if (otherMovie !== movie) {
        otherMovie.style.zIndex = '1';
      }
    });
    movie.style.zIndex = '3';
  });
});