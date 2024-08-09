import { useEffect, useState } from "react";
import React from "react";
import translateText from "./components/translateText";
import IngresarTexto from "./components/ComponentInput";
import OutputText from "./components/ComponentOutput";

function App() {
  const [idiomaInput, setIdiomaInput] = useState("en");
  const [idiomaOuput, setIdiomaOutput] = useState("fr");
  const [text, setText] = useState("Hello, how are you?");
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const button1 = document.querySelector(".btn-english1");
    button1.classList.add("active");

    const button2 = document.querySelector(".button-french2");
    button2.classList.add("active2");

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await translateText(text, idiomaInput, idiomaOuput);
      setTranslatedText(response);

      //const textOutput = document.querySelector(".text-target");
      //if (textOutput) textOutput.textContent = response;
    } catch (error) {
      console.error("Error en la traducción:", error);
    }
  };

  const handleClickIdiomaInput = (event) => {
    const idioma1 = event.target.getAttribute("label");

    const buttons1 = document.querySelectorAll(".btn1");
    buttons1.forEach((button) => button.classList.remove("active"));

    event.target.classList.add("active");

    let nuevoIdioma;

    switch (idioma1) {
      case "English":
        nuevoIdioma = "en";
        break;

      case "French":
        nuevoIdioma = "fr";
        break;

      case "Spanish":
        nuevoIdioma = "es";
        break;

      case "Aleman":
        nuevoIdioma = "de";
        break;

      case "Portugues":
        nuevoIdioma = "pt";
        break;

      case "Italiano":
        nuevoIdioma = "it";
        break;

      case "Japones":
        nuevoIdioma = "ja";
        break;

      case "Ruso":
        nuevoIdioma = "ru";
        break;

      default:
        console.log(null);
    }

    setIdiomaInput(nuevoIdioma);
  };

  useEffect(() => {
    console.log(idiomaInput);
  }, [idiomaInput]);

  const handleClickIdiomaOutput = (event) => {
    const idioma2 = event.target.getAttribute("label");

    const buttons2 = document.querySelectorAll(".btn2");
    buttons2.forEach((button) => button.classList.remove("active2"));

    event.target.classList.add("active2");

    let nuevoIdioma2;

    switch (idioma2) {
      case "English":
        nuevoIdioma2 = "en";
        break;

      case "French":
        nuevoIdioma2 = "fr";
        break;

      case "Spanish":
        nuevoIdioma2 = "es";
        break;

      case "Aleman":
        nuevoIdioma2 = "de";
        break;

      case "Portugues":
        nuevoIdioma2 = "pt";
        break;

      case "Italiano":
        nuevoIdioma2 = "it";
        break;

      case "Japones":
        nuevoIdioma2 = "ja";
        break;

      case "Ruso":
        nuevoIdioma2 = "ru";
        break;

      default:
        console.log(null);
    }

    setIdiomaOutput(nuevoIdioma2);
  };

  useEffect(() => {
    console.log(idiomaOuput);
  }, [idiomaOuput]);

  return (
    <div className="container-app">
      <IngresarTexto
        text={text}
        setText={setText}
        handleClickIdiomaInput={handleClickIdiomaInput}
        fetchData={fetchData}
        setIdiomaInput={setIdiomaInput}
      />
      <OutputText
        handleClickIdiomaOutput={handleClickIdiomaOutput}
        idiomaOutput={idiomaOuput}
        setIdiomaOutput={setIdiomaOutput}
        translatedText={translatedText}
      />
    </div>
  );
}

export default App;
