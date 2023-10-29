import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Detail(){
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    

    console.log(movie);
  
    useEffect(() => {
      const getMovie = async() => {
        const response = await fetch (
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        setLoading(false);
        setMovie(json.data.movie);
      };
      getMovie();
    }, [id]);

    return (
        loading ? <h3>Loading...</h3> : 
        <h1>{movie.title} Detail</h1>
    );
}

export default Detail;