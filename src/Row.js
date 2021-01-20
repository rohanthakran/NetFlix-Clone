import React, {useState,useEffect} from 'react'
import axios from './axious';
import Youtube from "react-youtube";
import "./Row.css";
const movieTrailer = require( 'movie-trailer' )



const baseUrl ="https://image.tmdb.org/t/p/w200";
function Row({title,fetchURL,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [ youtubeId, setYoutubeId ] = useState("");
 
    useEffect(() =>{
        async function fetchData () {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results);
            return request; 
        }
        fetchData();
    },[fetchURL]); //here we are using fetchURL because we are using it from outside

    const opts = {
        height: "300",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
    }
    const handleClick = (item) => {
     
        if (youtubeId) {
            setYoutubeId("");
        }
    else {
            movieTrailer(item?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setYoutubeId(urlParams.get("v"))
            }).catch((error) => {console.log(error);})
    }

        
    }
   
    return (
       <React.Fragment>
        <div className ="row">
            <h1>{title}</h1>
    

        <div className ="row_posters">
            {movies.map((item,index) =>{
                return ( 

                   
                    <img key={item.id}
                
                       onClick={() => handleClick(item)}
                       className={`row_poster ${isLargeRow && "row_posterlarge"}`}
                       src={`${baseUrl}${isLargeRow ? item.poster_path : item.backdrop_path}`} alt={item.name} />
               ) 
            })}
                </div>
            </div>
            
         
            {youtubeId && <Youtube videoId={youtubeId} opts={opts} />}
        }
       </React.Fragment>
    )
}

export default Row
