const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6bfaa39b0a3a25275c765dcaddc7dae7&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=6bfaa39b0a3a25275c765dcaddc7dae7&query="';

const ul = document.getElementById("movieUl");
const form = document.getElementById("searchForm");
const search = document.getElementById("search");

// initial Movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

// SHOW MOVIES LIST
function showMovies(movies) {
  console.log(movies);
  ul.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieItem = document.createElement("li");
    movieItem.classList.add("movie_list_item");
    movieItem.innerHTML = `
     <img src="${IMG_PATH + poster_path}" alt="${title}" />
     <div class="movie_info">
       <h3>${title}</h3>
       <span class="${getClassByRate(vote_average)}">${vote_average}</span>
     </div>
     <div class="overview">
      <h3>Overview</h3>
      <p>${overview}</p>
     </div>
    `;
    ul.appendChild(movieItem);
  });
}
// FOR RATE
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
// FOR SEARCH SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});