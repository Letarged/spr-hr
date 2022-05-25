
import React from "react";
import { useNavigate } from "react-router-dom"

function Submited(){
    const navigate = useNavigate();
    return(
        <div>
            <h1> Thanks for your form.</h1>
            <h2> Generated document can be found on the following addres withing few minutes:</h2>
            <h3> https:// ........ // </h3>
            <button onClick={() => {navigate('/')}}> Send another answer! </button>
        </div>
    )
}

export default Submited;