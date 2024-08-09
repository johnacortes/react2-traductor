import ShowDropdown2 from "./Dropdown2";

function OutputText({
  handleClickIdiomaOutput,
  setIdiomaOutput,
  idiomaOutput,
  translatedText,
}) {
  const handleClickSvgH = () => {
    const buttons2 = document.querySelectorAll(".btn2");

    buttons2.forEach((button) => button.classList.remove("active2"));

    const buttonEnglissh = document.querySelector(".button-english2");
    const buttonFrench = document.querySelector(".button-french2");
    const buttonSpanish = document.querySelector(".btn-spanish2");

    const label = buttonSpanish.getAttribute("label");

    switch (idiomaOutput) {
      case "fr":
        buttonSpanish.classList.add("active2");
        switch (label) {
          case "Spanish":
            setIdiomaOutput("es");
            break;

          case "Aleman":
            setIdiomaOutput("de");
            break;

          case "Portugues":
            setIdiomaOutput("pt");
            break;

          case "Italiano":
            setIdiomaOutput("it");
            break;

          case "Japones":
            setIdiomaOutput("ja");
            break;

          case "Ruso":
            setIdiomaOutput("ru");
            break;

          default:
            console.log("Error al agsinar idioma");
        }
        break;

      case "en":
        buttonFrench.classList.add("active2");
        setIdiomaOutput("fr");
        break;

      default:
        buttonEnglissh.classList.add("active2");
        setIdiomaOutput("en");
    }
  };

  const handleClickSound2 = () => {
    console.log(11);
  };

  const handleClickCopy2 = () => {
    const textTarget = document.querySelector(".text-target");
    if (textTarget) {
      navigator.clipboard
        .writeText(textTarget.textContent)
        .then(() => {
          console.log("Text copy");
        })
        .catch((err) => {
          console.error("Error copy text: ", err);
        });
    }
  };

  const svgHorizontal = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66666 6.66668L0.95955 5.95957L0.252443 6.66668L0.95955 7.37378L1.66666 6.66668ZM17.5 7.66668C18.0523 7.66668 18.5 7.21896 18.5 6.66668C18.5 6.11439 18.0523 5.66668 17.5 5.66668V7.66668ZM4.29288 2.62624L0.95955 5.95957L2.37376 7.37378L5.7071 4.04045L4.29288 2.62624ZM0.95955 7.37378L4.29288 10.7071L5.7071 9.2929L2.37376 5.95957L0.95955 7.37378ZM1.66666 7.66668H17.5V5.66668H1.66666V7.66668Z"
        fill="#4D5562"
      />
      <path
        d="M18.3333 13.3333L19.0404 12.6262L19.7475 13.3333L19.0404 14.0404L18.3333 13.3333ZM10.8333 14.3333C10.281 14.3333 9.83331 13.8856 9.83331 13.3333C9.83331 12.781 10.281 12.3333 10.8333 12.3333L10.8333 14.3333ZM15.7071 9.29289L19.0404 12.6262L17.6262 14.0404L14.2929 10.7071L15.7071 9.29289ZM19.0404 14.0404L15.7071 17.3738L14.2929 15.9596L17.6262 12.6262L19.0404 14.0404ZM18.3333 14.3333L10.8333 14.3333L10.8333 12.3333L18.3333 12.3333L18.3333 14.3333Z"
        fill="#4D5562"
      />
    </svg>
  );

  const svgSound2 = (
    <div className="container-svg-sound2 focus" onClick={handleClickSound2}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.46532 11.6089C2.87114 10.6186 2.87114 9.38143 3.46532 8.39114C3.64663 8.08895 3.94701 7.87726 4.29258 7.80815L5.70344 7.52598C5.78749 7.50917 5.86326 7.46409 5.91814 7.39824L7.17085 5.89498C8.3534 4.47592 8.94468 3.76638 9.47234 3.95742C10 4.14846 10 5.07207 10 6.91928L10 13.0807C10 14.9279 10 15.8515 9.47234 16.0426C8.94468 16.2336 8.3534 15.5241 7.17085 14.105L5.91814 12.6018C5.86326 12.5359 5.78749 12.4908 5.70344 12.474L4.29258 12.1918C3.94701 12.1227 3.64663 11.9111 3.46532 11.6089Z"
          fill="#4D5562"
        />
        <path
          d="M12.1129 7.05373C12.8903 7.83111 13.329 8.88422 13.3333 9.9836C13.3376 11.083 12.9073 12.1395 12.1361 12.923"
          stroke="#4D5562"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.5474 5.28596C16.7912 6.52977 17.493 8.21475 17.4999 9.97375C17.5069 11.7327 16.8183 13.4232 15.5844 14.6768"
          stroke="#4D5562"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  const svgCopy2 = (
    <div className="container-svg-copy2 focus" onClick={handleClickCopy2}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6667 5.83334V5.83334C11.6667 5.36869 11.6667 5.13636 11.6282 4.94316C11.4704 4.14978 10.8502 3.52959 10.0569 3.37177C9.86366 3.33334 9.63133 3.33334 9.16668 3.33334H7.33334C5.44773 3.33334 4.50492 3.33334 3.91913 3.91913C3.33334 4.50492 3.33334 5.44773 3.33334 7.33335V9.16668C3.33334 9.63133 3.33334 9.86366 3.37177 10.0569C3.52959 10.8502 4.14978 11.4704 4.94316 11.6282C5.13636 11.6667 5.36869 11.6667 5.83334 11.6667V11.6667"
          stroke="#4D5562"
          strokeWidth="2"
        />
        <rect
          x="8.33334"
          y="8.33334"
          width="8.33333"
          height="8.33333"
          rx="2"
          stroke="#4D5562"
          strokeWidth="2"
        />
      </svg>
    </div>
  );

  return (
    <div className="container-component component2">
      <div className="container-buttons2-svgH">
        <div className="container-buttons2">
          <button
            className="button-english2 btn2 button2 focus"
            onClick={handleClickIdiomaOutput}
            label="English"
          >
            English
          </button>
          <button
            className="button-french2 btn2 button2 focus"
            onClick={handleClickIdiomaOutput}
            label="French"
          >
            French
          </button>
          <ShowDropdown2
            handleClickIdiomaOutput={handleClickIdiomaOutput}
            setIdiomaOutput={setIdiomaOutput}
          />
        </div>
        <div
          className="container-svg-horizontal focus"
          onClick={handleClickSvgH}
        >
          {svgHorizontal}
        </div>
      </div>
      <div className="conatiner-text-translated">
        <p className="text-target">{translatedText}</p>
      </div>
      <div className="container-svgs-sound2-copy2">
        <div className="container-svg2">
          {svgSound2}
          {svgCopy2}
        </div>
      </div>
    </div>
  );
}

export default OutputText;
