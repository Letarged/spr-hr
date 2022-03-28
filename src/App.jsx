

import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    Příjmení: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const optionss = [
    { value: "111", label: "111 - Všeobecná zdravotní pojišťovna " },
    { value: "201", label: "201 - Vojenská zdravotní pojišťovna " },
    { value: "205", label: "205 - Česká průmyslová zdravotní pojišťovna " },
    { value: "207", label: "207 - Oborová zdravotní pojišťovna zaměstnanců bank, pojišťoven a stavebnictví " },
    { value: "211", label: "211 - Zdravotní pojišťovna ministerstva vnitra České republiky " },
    { value: "213", label: "213 - RBP, zdravotní pojišťovna " }
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
};

export default App;

