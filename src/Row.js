import React, {useState,useEffect} from 'react'
import axios from './axious';
import "./Row.css";
const baseUrl ="https://image.tmdb.org/t/p/w200";
function Row({title,fetchURL,isLargeRow}) {
    const [movies,setMovies] = useState([]);
 
    useEffect(() =>{
        async function fetchData () {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results);
            return request; 
        }
        fetchData();
    },[fetchURL]); //here we are using fetchURL because we are using it from outside

 
    return (
       <React.Fragment>
        <div className ="row">
            <h1>{title}</h1>
    

        <div className ="row_posters">
            {movies.map((item,index) =>{
               return( 
                <img key={item.id} className ={`row_poster ${isLargeRow &&"row_posterlarge"}`}src={`${baseUrl}${isLargeRow ? item.poster_path: item.backdrop_path}`} alt={item.name}/>
               )
            })}
                </div>
          </div>
       </React.Fragment>
    )
}

export default Row
