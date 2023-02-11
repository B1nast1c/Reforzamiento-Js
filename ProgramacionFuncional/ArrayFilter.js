//Filtra en base a un indicador, sentencia BOOLEAN

const filteredList = watchList
  .filter(({ imdbRating }) => imdbRating >= 8.0) //Mayor igual a 8
  .map(({ Title: title, imdbRating: rating }) => ({ title, rating }));

console.log(filteredList);