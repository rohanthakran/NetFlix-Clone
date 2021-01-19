import React, {useSate,useEffect} from 'react'
import axios from './axious';
function Row({title,fetchURL}) {

 
    useEffect(() =>{
        async function fetchData () {
            const request = await axios.get(fetchURL)
            console.log(request);
            return request; 
        }
        fetchData();
    },[])

    return (
       <React.Fragment>
        {/* Title*/}
        <h1>This is a row {title}</h1>
        {/*container -> postion */}
       </React.Fragment>
    )
}

export default Row
