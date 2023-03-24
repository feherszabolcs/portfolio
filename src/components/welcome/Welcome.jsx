import React, { useState } from "react";
import './welcome.css'

const Welcome = () =>{

    const[letter,setLetter] = useState("Üdvözöllek")
    const[author,setAuthor] = useState(" ")
    
    function mouseEnter(){


        setLetter("Üdvözöllek az oldalomon!")
        setAuthor("~Fehér Szabolcs~")
    }
    function mouseDown(){
        setLetter("Üdvözöllek")
        setAuthor(" ")
    }



    return(
        <div className="welcome-message">
            <div className="welcome-animated">
            <h1 id="welcome-title" onMouseEnter={mouseEnter} onMouseLeave={mouseDown}>{letter}</h1>

            <h3 id="welcome-author">{author}</h3>
            </div>

        </div>
    )
}
export default Welcome