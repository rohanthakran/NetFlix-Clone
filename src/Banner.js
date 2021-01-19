import React,{useState,useEffect} from 'react'
import axios from './axious'
import requests from './request'
import "./Banner.css"
 const Banner = () => {

    const [movie, setMovie] = useState();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
        }
        fetchData();
    },[])
    return (
        <React.Fragment>
            <header className="banner" style={{backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center center",
            }}>
                <div className="banner_contects">
                    <h1 className ="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My list</button>
                        
                    </div>
                    <h1 className="banner_description">{movie?.overview}</h1>
                </div>   
            </header>
        </React.Fragment>
    )
}
export default Banner;