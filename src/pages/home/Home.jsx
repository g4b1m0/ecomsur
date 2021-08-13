import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./style.css";
import { ReactComponent as Loupe } from "./../../assets/loupe.svg";
import { movieService } from "./../../services/movies";
import { Link } from "react-router-dom";
import movieConfig from "../../constants/movies";

const Home = () => {
  const [movieList, setMovieList] = useState(null);
  const [movieListFake, setMovieListFake] = useState(null);
  const [moviePagination, setMoviePagination] = useState(null);
  const [windowsWidth, ] = useState(window.innerWidth);

  useEffect(() => {
    movieService.getPopularMoviesById(1).then((resultResponse) => {
      setMoviePagination({
        activePage: resultResponse.page,
        total_pages: resultResponse.total_pages,
      });
      setMovieList(resultResponse.results);
      setMovieListFake(resultResponse.results);
    });
  }, []);

  const handleInputChange = (event) => {
    const userInputValue = event.target.value;
    const movieListFiltered = movieList.filter((movie) => movie.title.indexOf(userInputValue) >= 0);
    setMovieListFake(movieListFiltered);
  };

  const handlePaginationChange = (event) => {
    movieService.getPopularMoviesById(event.selected + 1).then((resultResponse) => {
      setMoviePagination({
        activePage: resultResponse.page,
        total_pages: resultResponse.total_pages,
      });
      setMovieList(resultResponse.results);
      setMovieListFake(resultResponse.results);
    });
  }

  return (
    <main className="home">
      <section className="filter">
        <input
          type="text"
          className="filter_input"
          placeholder="Ingrese nombre de la pelicula a filtrar"
          onChange={handleInputChange}
        />
        <Loupe className="filter_icon" />
      </section>

      <section className="list">
        <div className="list_movies">
          {movieListFake ? (
            movieListFake.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <img
                  src={movieConfig.imgURL + movie.poster_path}
                  alt={movie.original_title}
                  className="list_img"
                />
              </Link>
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </div>

          {moviePagination && (
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              pageCount={moviePagination.total_pages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={windowsWidth <= 560 ? 1: 4}
              onPageChange={handlePaginationChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          )}
      </section>
    </main>
  );
};

export default Home;
