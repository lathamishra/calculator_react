import React from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  let initialized = false;
  useEffect(() => {
    if (!initialized) {
      initialized = true;
      fetchData();
    }
  }, []);

  const fetchData = () => {
    let display = document.getElementById("display");
    let x = Array.from(document.getElementsByClassName("buttons"));
    x.map((buton) => {
      buton.addEventListener("click", (e) => {
        console.log("e.target.innerText", e.target.innerText);
        switch (e.target.innerText) {
          case "C":
            display.innerText = "";
            break;

          case "←":
            display.innerText = display.innerText.slice(0, -1);
            break;

          case "=":
            display.innerText = eval(display.innerText);
            break;

          default:
            display.innerText += e.target.innerText;
        }
      });
    });
  };

  return (
    <div className="container">
      <div id="display"></div>
      <div className="buttons">
        <div className="button" id="clear">
          C
        </div>
        <div className="button" label={"/"}>
          /
        </div>
        <div className="button" label={"*"}>
          *
        </div>
        <div className="button" label={"&larr"}>
          &larr;
        </div>
        <div className="button" label={"7"}>
          7
        </div>
        <div className="button" label={"8"}>
          8
        </div>
        <div className="button" label={"9"}>
          9
        </div>
        <div className="button" label={"-"}>
          -
        </div>
        <div className="button" label={"4"}>
          4
        </div>
        <div className="button" label={"5"}>
          5
        </div>
        <div className="button" label={"6"}>
          6
        </div>
        <div className="button" label={"+"}>
          +
        </div>
        <div className="button" label={"1"}>
          1
        </div>
        <div className="button" label={"2"}>
          2
        </div>
        <div className="button" label={"3"}>
          3
        </div>
        <div className="button" label={"."}>
          .
        </div>
        <div className="button" label={"("}>
          (
        </div>
        <div className="button">0</div>
        <div className="button">)</div>
        <div id="equal" className="button">
          =
        </div>
      </div>
    </div>
  );
}

export default App;
