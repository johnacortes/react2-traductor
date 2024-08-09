import { useState, useEffect, useRef } from "react";

function ShowDropdown2({ handleClickIdiomaOutput, setIdiomaOutput }) {
  const [showDropdown2, setShowDropdown2] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setShowDropdown2(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClickDropdown = () => {
    setShowDropdown2(!showDropdown2);
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

  const handleClikIdiomas2 = (event) => {
    const idiomaSelect2 = event.target.getAttribute("label");

    const buttonSelect2 = document.querySelector(".btn-spanish2");

    buttonSelect2.textContent = idiomaSelect2;

    buttonSelect2.removeAttribute("label");
    buttonSelect2.setAttribute("label", idiomaSelect2);

    setIdiomaOutput("");

    const buttons2 = document.querySelectorAll(".btn2");
    buttons2.forEach((button) => button.classList.remove("active2"));

    setShowDropdown2(false);
  };

  return (
    <div ref={divEl}>
      <div className="container-button-select2">
        <button
          className="btn-spanish2 btn2 focus"
          onClick={handleClickIdiomaOutput}
          label="Spanish"
        >
          Spanish
        </button>
        {svgDown}
      </div>
      {showDropdown2 && (
        <div className="dropdown2">
          <button
            label="Aleman"
            className="btn-selects2 focus"
            onClick={handleClikIdiomas2}
          >
            Aleman
          </button>
          <button
            label="Portugues"
            className="btn-selects2 focus"
            onClick={handleClikIdiomas2}
          >
            Portugues
          </button>
          <button
            label="Italiano"
            className="btn-selects2"
            onClick={handleClikIdiomas2}
          >
            Italiano
          </button>
          <button
            label="Japones"
            className="btn-selects2 focus"
            onClick={handleClikIdiomas2}
          >
            Japones
          </button>
          <button
            label="Ruso"
            className="btn-selects2 focus"
            onClick={handleClikIdiomas2}
          >
            Ruso
          </button>
          <button
            label="Spanish"
            className="btn-selects2 focus"
            onClick={handleClikIdiomas2}
          >
            Spanish
          </button>
        </div>
      )}
    </div>
  );
}

export default ShowDropdown2;
