import { useState, useEffect, useRef } from "react";

function ShowDropdown({ handleClickIdiomaInput, setIdiomaInput }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClickDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const svgDown = (
    <svg
      onClick={handleClickDropdown}
      className="svg-down focus"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 6L8 10L4 6" stroke="#6C727F" strokeWidth="2" />
    </svg>
  );

  const hanleClickIdiomas1 = (event) => {
    const idiomaSelect = event.target.getAttribute("label");

    const buttonSelect1 = document.querySelector(".btn-spanish1");

    buttonSelect1.textContent = idiomaSelect;

    buttonSelect1.removeAttribute("label");
    buttonSelect1.setAttribute("label", idiomaSelect);

    setIdiomaInput("");

    const buttons1 = document.querySelectorAll(".btn1");
    buttons1.forEach((button) => button.classList.remove("active"));

    setShowDropdown(false);
  };

  return (
    <div ref={divEl}>
      <div className="container-button-select">
        <button
          className="btn-spanish1 btn1 focus"
          onClick={handleClickIdiomaInput}
          label="Spanish"
        >
          Spanish
        </button>
        {svgDown}
      </div>
      {showDropdown && (
        <div className="dropdown">
          <button
            label="Aleman"
            className="btn-selects1 focus"
            onClick={hanleClickIdiomas1}
          >
            Aleman
          </button>
          <button
            label="Portugues"
            className="btn-selects1 focus"
            onClick={hanleClickIdiomas1}
          >
            Portugues
          </button>
          <button
            label="Italiano"
            className="btn-selects1 focus"
            onClick={hanleClickIdiomas1}
          >
            Italiano
          </button>
          <button
            label="Japones"
            className="btn-selects1 focus"
            onClick={hanleClickIdiomas1}
          >
            Japones
          </button>
          <button
            label="Ruso"
            className="btn-selects1 focus"
            onClick={hanleClickIdiomas1}
          >
            Ruso
          </button>
          <button
            label="Spanish"
            className="btn-selects1 focus"
            onClick={hanleClickIdiomas1}
          >
            Spanish
          </button>
        </div>
      )}
    </div>
  );
}

export default ShowDropdown;
