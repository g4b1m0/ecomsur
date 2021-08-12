import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import "./style.css"
import { ReactComponent  as Loupe } from './../../assets/loupe.svg';
import {movieService} from './../../services/movies';

const imgURL = "https://image.tmdb.org/t/p/w500/";
// Consumir servicio para el detalle de cada pelicula 
// Responsive validar en cada tama;o 
// OPCIONAL
//   Agregar animationes 
//   Terminar el paginador 
const Home =  () => {
    const [movieList, setMovieList] = useState(null);
    const [moviePagination, setMoviePagination] = useState(null);

    useEffect(()=> {
        movieService.getAll().then((resultResponse)=> {
            setMoviePagination({activePage: resultResponse.page, total_pages: resultResponse.total_pages});
            setMovieList(resultResponse.results);
        })
    }, [])

    return <main className="home">
        <section className="filter">
            <input type="text" className="filter_input"/>
            <Loupe className="filter_icon"/>
             </section>
        <section className="list">
            <div className="list_movies">
                {movieList ? 
                movieList.map((movie)=> <img key={movie.id} src={imgURL+movie.poster_path} alt={movie.original_title} className="list_img" />) 
                : <p>Cargando...</p>}
               
            </div>
            <div className="pagination">
            {moviePagination &&  <ReactPaginate
                previousLabel= {'<<'}
                nextLabel={'>>'}
                pageCount={moviePagination.total_pages}
                marginPagesDisplayed={moviePagination.activePage}
                pageRangeDisplayed={4}
                onPageChange={()=>{}}
                containerClassName={'pagination'}
                activeClassName={'active'}
                /> }
            </div>
        </section>
     </main>
}

export default Home