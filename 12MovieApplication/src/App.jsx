import { useEffect, useState } from "react";
import "./App.css";
const API_URL = "http://www.omdbapi.com?apikey=c8204fe9";

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

function App() {
  const [movies, setmovies] = useState("");
  const [searchTerm,setSearchTerm]=useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setmovies(data.Search);
    }
    console.log(movies);
  };
  useEffect(() => {
    searchMovies({searchTerm});
    setmovies();
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            type="search"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {
              movies.map((ele)=>(

                <div className="movie">
                <div>
                  <p>{ele.Year}</p>
                </div>
                <div>
                  <img
                    src={
                      ele.Poster != "N/A"
                        ? ele.Poster
                        : "https://via.placeholder.com/400"
                    }
                    alt={ele.Title}
                  />
                </div>
                <div>
                  <span>{ele.Type}</span>
                  <h3>{ele.Title}</h3>
                </div>
              </div>
              )
              )
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
