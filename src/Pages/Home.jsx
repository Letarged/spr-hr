import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { v4 as uuidv4 } from 'uuid';


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//import { QuerySnapshot } from "@firebase/firestore";

function Home() {
  const firebaseConfig = {
    apiKey: "AIzaSyBxmbvXejXKUAVhRfT_LxCfDBGHVKaHAiE",
    authDomain: "spr-personal.firebaseapp.com",
    projectId: "spr-personal",
    storageBucket: "spr-personal.appspot.com",
    messagingSenderId: "939521784412",
    appId: "1:939521784412:web:ebded3ad3b45630b0d0499",
    measurementId: "G-YDF5EWR5YR",
  };
  firebase.initializeApp(firebaseConfig);
  const ref = firebase.firestore().collection("kikis");


  function addToDB(newPerson) {
    ref
      .doc(newPerson.id)
      .set(newPerson)
      .catch((err) => {
        console.log("Upsiiiiiiiiiiik");
        console.error(err);
      });
  }

  const navigate = useNavigate();

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    birthnum: "",
    address: "",
    insur: "",
  });

  const optionss = [
    { value: "111", label: "111 - Všeobecná zdravotní pojišťovna " },
    { value: "201", label: "201 - Vojenská zdravotní pojišťovna " },
    { value: "205", label: "205 - Česká průmyslová zdravotní pojišťovna " },
    {
      value: "207",
      label:
        "207 - Oborová zdravotní pojišťovna zaměstnanců bank, pojišťoven a stavebnictví ",
    },
    {
      value: "211",
      label: "211 - Zdravotní pojišťovna ministerstva vnitra České republiky ",
    },
    { value: "213", label: "213 - RBP, zdravotní pojišťovna " },
  ];

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      placeholder: "Jméno",
      errorMessage:
        "Meno nesmie ostať prázdne a nesmie obsahovať žiadne špeciálne znaky",
      label: "Jméno",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },

    {
      id: 2,
      name: "lname",
      type: "text",
      placeholder: "Příjmení",
      errorMessage:
        "Prijmeni nesmie ostať prázdne a nesmie obsahovať žiadne špeciálne znaky",
      label: "Příjmení",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 3,
      name: "birthnum",
      type: "number",
      // pattern: "^[0-9]{10}$",
      min: "0",
      max: "9999999999",
      step: "11",
      // onInput: {javascript: alert(this.value)},
      // type: "text",
      // pattern: "^[0-9]{10}$",

      placeholder: "X X X X X X X X X X X",
      errorMessage: "RČ musí byť deliteľné 11",
      label: "RČ bez lomítka",

      required: true,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Adresa bydliště",
      errorMessage: "Adresa je povinný údaj",
      label: "Adresa bydliště",
      required: true,
    },

    {
      id: 5,
      name: "insur",
      type: "select",
      placeholder: "Kód pojišťovny",
      errorMessage: "..toto bude dropdown",
      label: "Kód pojišťovny",
      required: true,
      options: optionss,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof values); /* ASI TU nejak vloženie do DB */
    var valuesWithID = Object.assign({},values, {"id":uuidv4()}); // append ID to "values"
    addToDB(valuesWithID);
    navigate("/submited");

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div /*className="app"*/>
      <form onSubmit={handleSubmit}>
        <h1>Údaje pre personálne oddelenie SPR</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Odeslat</button>
      </form>
    </div>
  );
}

export default Home;
