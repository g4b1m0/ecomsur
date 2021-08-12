import React from 'react'
import { useParams} from "react-router-dom";


const img = [
    "https://static.kinocheck.de/images/k61crr980y.jpg",
    "https://static.kinocheck.de/images/k61crr980y.jpg",
    "https://static.kinocheck.de/images/k61crr980y.jpg",
]

const DetailMovie = () => {
    // let { id } = useParams();

    return (<main className="movieView">
        <section className="details">  
            <img src="https://static.kinocheck.de/images/k61crr980y.jpg" alt="" className="details_image" />
            <div className="details_content">   
            <h1 className="details_title">Fast and furious 9</h1>
            <p className="details_inf">Año: <span>2021</span></p>
            <p className="details_inf"> Duración: <span>148 mins</span></p>
            <h2 classclassName="details_subtitle">Géneros:</h2>
            <p className="details_gender">Accion, Ciencia Ficcion, Familia</p>
            </div>
            <div className="details_sumary">
            <h2 classclassName="details_subtitle">Sinópsis:</h2>
            <p className="details_description">lorem ipsum dolor sit amet, consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint delectus deserunt commodi fugiat officiis nam ratione illum, similique cumque maiores quibusdam voluptate quas neque, eaque earum nesciunt veniam unde?</p>

            </div>

        </section>

        <section className="trailer">
            <h2 className="trailer_subtitle">Trailer</h2>
            <iframe className="trailer_content" width="560" height="315" 
            src="https://www.youtube.com/embed/t3DpuQrBivU" 
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>

        <section className="related"> 
            <h2>Relacionados</h2>
            <div className="related_content"> 
            {img.map((imgUrl, ind)=> <img key={`related-${ind}`} src={imgUrl} alt="" className="related_image" />)}
            </div>
           
            
        </section>
    
</main>
    )
}

export default DetailMovie
