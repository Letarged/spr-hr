import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { v4 as uuidv4 } from 'uuid';

import "./Home.css";


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


  /*
  birthdate !!! 
  duty
  since
  until
  workplace
  birthLname
  placeofbirth
  insuranceance
  bankacc
  accholder
  email



  */

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
    insurance: "",

    //birthdate: "",
    //duty: "",
    //since: "",
    //until: "",
    //workplace: "",
    //birthLname: "",
    //placeofbirth: "",
    //bankacc: "",
    //accholder: "",
    //email: ""


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
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage:
        "Zadejte prosím e-mailovou adresu v platném tvaru.",
      label: "E-mail",
      required: true,
    },
    {
      id: 4,
      name: "birthdate",
      type: "date",
      placeholder: "Datum narození",
      errorMessage:
        "Datum narození musí být platný",
      label: "Datum narození",
      required: true,
    },
    {
      id: 5,
      name: "birthnum",
      type: "number",
      min: "0",
      max: "9999999999",
      step: "11",
      placeholder: "X X X X X X X X X X X",
      errorMessage: "RČ musí byť deliteľné 11",
      label: "RČ bez lomítka",
      required: true,
    },
    {
      id: 6,
      name: "placeofbirth",
      type: "text",
      placeholder: "Místo narození",
      errorMessage:
        "Zadejte prosím místo narození",
      label: "Místo narození",
      required: true,
    },
    {
      id: 7,
      name: "birthLname",
      type: "text",
      placeholder: "Rodné (dřívější) příjmení",
      errorMessage:
        "Zadejte prosím Vaše rodné příjmení",
      label: "Rodné příjmení",
      required: true,
    },

    {
      id: 8,
      name: "address",
      type: "text",
      placeholder: "Adresa bydliště",
      errorMessage: "Adresa je povinný údaj",
      label: "Adresa bydliště",
      required: true,
    },
    {
      id: 9,
      name: "insurance",
      type: "select",
      placeholder: "Kód Vaší pojišťovny",
      errorMessage: "Kód musí obsahovať presne 3 číslice", // ..toto bude dropdown
      label: "Kód pojišťovny",
      required: true,
      pattern: "^[0-9]{3}$",

      options: optionss,
    },
    {
      id: 10,
      name: "duty",
      type: "text",
      placeholder: "Pracovní úkol",
      errorMessage:
        "Zadejte prosím Vaše rodné příjmení",
      label: "Pracovní úkol (nepovinné)",
      required: false,
    },
    {
      id: 11,
      name: "since",
      type: "date",
      placeholder: "První den pracovního poměru",
      label: "Dohoda se uzavírá od",
      required: true,
      min: "2022-05-01",
    },
    {
      id: 12,
      name: "until",
      type: "date",
      placeholder: "Poslední den pracovního poměru",
      label: "Dohoda se uzavírá do",
      required: true,
      min: "2022-05-01",
      max: "2022-12-31",
    },
    {
      id: 13,
      name: "workplace",
      type: "text",
      placeholder: "Místo výkonu práce",
      errorMessage:
        "Zadejte prosím Vaše rodné příjmení",
      label: "Místo výkonu práce (nepovinné)",
      required: false,
    },
    {
      id: 14,
      name: "bankacc",
      type: "text",
      placeholder: "Číslo bankovního účtu",
      errorMessage:
        "Zadejte číslo účtu",
      label: "Číslo bankovního účtu, na který bude vyplácená odměna",
      required: true,
    },
    {
      id: 15,
      name: "accholder",
      type: "text",
      placeholder: "Vlastník účtu",
      errorMessage:
        "Zadejte vlastníka účtu",
      label: "Vlastník uvedeného účtu",
      required: true,
    },
    {
      id: 16,
      name: "dispo",
      type: "checkbox",
      errorMessage:
        "Toto prohlášení je vyžadované.",
      label: "Prohlašuji, že k tomuto účtu mám disponibilní právo.",
      required: true,
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
    <div className="app">
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
