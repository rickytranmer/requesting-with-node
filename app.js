var movie = require('./movie');
const myVar = require('./env');
var threeFavoriteMovies = ['Eternal Sunshine of the Spotless Mind', 'Kung Fu Hustle', 'Billy Madison'];
threeFavoriteMovies.forEach(function(film){
  movie.searchFor(film.split(' ').join('+'));
});