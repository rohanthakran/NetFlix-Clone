import React, {useEffect, useState} from 'react'
import "./Nav.css"
const Nav = () => {
     const [show, hnadleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                hnadleShow(true)

            }
            else {
                hnadleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
    
     return (
        <React.Fragment>
            <div className={`nav ${show && "nav__block"}`}>
                <img className ="nav_logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="logo"></img>
           
                <img className="nav_avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user"></img>
                </div>     
        
        </React.Fragment>
    )
}

export default Nav
