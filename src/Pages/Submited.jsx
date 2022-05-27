
import React from "react";
import { useNavigate } from "react-router-dom"

function Submited(){
    const navigate = useNavigate();
    return(
        <div>
            <h1> Thanks for your form.</h1>
            <h1> Generated document can be found on <a href="https://drive.google.com/drive/folders/1MKwsYvvUzbqg3XjJUYpstrOTWVrzrcAv?usp=sharing"> this address </a> within few minutes.</h1>
            
            <button onClick={() => {navigate('/')}}> Send another answer! </button>
        </div>
    )
}

export default Submited;