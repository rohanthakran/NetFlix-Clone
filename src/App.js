import React from "react"
import Row from "./Row"
import Banner from "./Banner"
import request from './request'
import Nav from "./Nav"
const App = () => {
  return (
    <React.Fragment>  

      <div className="app">
        <Nav/>
    <Banner/>
    <Row title="NetFlix originals" fetchURL={request.fetchNetflixOriginals}  isLargeRow/>
    <Row title="Trending Now" fetchURL={request.fetchTrending}/>
    <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
    <Row title="Action Movie " fetchURL={request.fetchActionMovies}/>
    <Row title="Comedy" fetchURL={request.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies}/>
    <Row title="Documentaries Movies" fetchURL={request.fetchDocumentaries}/>
    </div>

    </React.Fragment>
  
 
  );
}

export default App;
