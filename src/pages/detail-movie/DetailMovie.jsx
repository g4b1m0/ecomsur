import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "./../../services/movies";
import movieConfig from "../../constants/movies";

import "./style.css";

const DetailMovie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState();
  const [video, setVideo]= useState(null);

  useEffect(() => {
    movieService.getById(id).then((movie) => {
      setMovie(movie.data);
    });
    movieService.getRecommendationsById(id).then((recommendationsResponse) => {
      const recomendationList = recommendationsResponse.data.results;
      const recommendationsSplited =
        recomendationList?.length > 0 ? recomendationList.slice(0, 3) : null;
      setRecommendations(recommendationsSplited);
    });
    movieService.getVideosById(id).then((videosResponse) => {
     const videolist = videosResponse.data?.results;
     const getVideo = videolist?.length > 0 ? videolist[videolist.length - 1]: null;
     setVideo(getVideo);
    })
  }, [id]);
  return (
    <main className="movieView">
      <section className="details">
        <img
          src={movieConfig.imgURL + movie?.poster_path}
          alt={movie?.title}
          className="details_image"
        />
        <div className="details_content">
          <h1 className="details_title">{movie?.title}</h1>
          <p className="details_inf">
            Año: <span>{movie?.release_date}</span>
          </p>
          <p className="details_inf">
            {" "}
            Duración: <span>{movie?.runtime}</span>
          </p>
          <div className="details_class">  
          <h2 className="details_subtitle">Géneros:</h2>
          <p className="details_gender">
            {movie?.genres.map((genre) => (
              <span key={genre.id}>{genre.name}, </span>
            ))}
          </p>
          </div>
         
        </div>
        <div className="details_sumary">
          <h2 className="details_subtitle">Sinópsis:</h2>
          <p className="details_description">{movie?.overview}</p>
        </div>
      </section>

      <section className="trailer">
        <h2 className="trailer_subtitle">Trailer</h2>
        {video && <iframe
          className="trailer_content"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>}
      </section>

      <section className="related">
        <h2>Relacionados</h2>
        <div className="related_content">
          {recommendations?.map((recommendation) => (
            <img
              key={`related-${recommendation.id}`}
              src={movieConfig.imgURL + recommendation.poster_path}
              alt={recommendation.id}
              className="related_image"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default DetailMovie;
