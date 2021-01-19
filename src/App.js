import React from "react"
import Row from "./Row"
import request from './request'
const App = () => {
  return (
    <React.Fragment>  
    <h1>This istis </h1>
    <Row title="NetFlix originals" fetchURL={request.fetchNetflixOriginals}/>
    <Row title="Trending Now" fetchURL={request.fetchTrending}/>

    </React.Fragment>
  
 
  );
}

export default App;
