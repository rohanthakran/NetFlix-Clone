import React, {useState,useEffect} from 'react'
import axios from './axious';
import "./Row.css";
const baseUrl ="https://image.tmdb.org/t/p/w200";
function Row({title,fetchURL}) {
    const [movies,setMovies] = useState([]);
 
    useEffect(() =>{
        async function fetchData () {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results);
            return request; 
        }
        fetchData();
    },[fetchURL]); //here we are using fetchURL because we are using it from outside

    console.table(movies);
    return (
       <React.Fragment>
        <div className ="row">
            <h1>{title}</h1>
        </div>

        <div className ="row_posters">
            {movies.map((item,index) =>{
               return( 
                <img className ="row_poster"src={`${baseUrl}${item.poster_path}`} alt={item.name}/>
               )
            })}
        </div>
       </React.Fragment>
    )
}

export default Row
