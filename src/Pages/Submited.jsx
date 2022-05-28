
import React from "react";
import { useNavigate } from "react-router-dom"
import "./Submited.css";



function Submited(){
    const navigate = useNavigate();
    return(
        <div>
            <h1> Odoslanie dát prebehlo úspešne.</h1>
            <h1> Predvyplnenú zmluvu nájdete na uvedenom maily v priebehu niekoľkých minút. </h1>
            
            <button onClick={() => {navigate('/')}}> Odoslať ďalší formulár </button>
        </div>
    )
}

export default Submited;