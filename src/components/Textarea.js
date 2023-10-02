import React, { useState } from "react";
import Alertarea from "./Alertarea";
export default function Textarea() {
  const [userText, setuserText] = useState("");
  const [upperCase, setupperCase] = useState("");
  const [lowerCase, setLowerCase] = useState("");
  const [wordcount, setWordCount] = useState(0);
  const [charCount, setcharCount] = useState(0);
  const [trim, settrim] = useState("");
  const [alert, setalert] = useState(null);

  /* Copy */

  const copy = () => {
    const collectData = lowerCase + upperCase + trim;
    let textarea = document.createElement("textarea");
    textarea.value = collectData;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "absolute";
    textarea.style.left = "-10000px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    if (userText !== "") {
      setalert(
        "First, apply the lowercase, uppercase, and trim functions to the text, and then click on the copy button"
      );
      setTimeout(() => {
        setalert(null);
      }, 3000);
    } else {
      setalert("Copy to the clipboard");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }
  };

  /* trim extra spaces */

  const trimmer = () => {
    if (userText === "") {
      setTimeout(() => {
        setLowerCase("");
        setupperCase("");
        setWordCount(0);
      }, 1500);

      setalert("Please input text");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    } else {
      let inputTrim = userText.trim();
      let userArray = inputTrim.split(" ");
      let filterArray = userArray.filter((m) => {
        return m !== "";
      });
      settrim(filterArray.join(" "));
      setuserText("");
      setcharCount(filterArray.join(" ").length);
    }
  };

  /* word counter */

  const wordCounter = () => {
    let array = userText.split(" ");
    let filterArray = array.filter((m) => {
      return m !== "";
    });
    setWordCount(filterArray.length);
  };

  /* lowerCase */

  const lowerCaseText = () => {
    if (userText === "") {
      setTimeout(() => {
        settrim("");
        setupperCase("");
        setWordCount(0);
      }, 1500);

      setalert("Please input text");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    } else {
      setLowerCase(userText.toLowerCase());
      setuserText("");
      setcharCount(userText.toLowerCase().length);
    }
  };

  /* upperCase */

  const upperCaseText = () => {
    if (userText === "") {
      setTimeout(() => {
        settrim("");
        setLowerCase("");
        setWordCount(0);
      }, 1500);
      setalert("Please input text");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    } else {
      setupperCase(userText.toUpperCase());
      setuserText("");
      setcharCount(userText.toUpperCase().length);
    }
  };

  /* onchange */

  const userInputChange = (m) => {
    setuserText(m.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="userInput"
            placeholder="Enter text here"
            onChange={userInputChange}
            onKeyUp={wordCounter}
            value={userText}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="textArea" className="form-label">
            Output
          </label>
          <textarea
            className="form-control"
            id="textArea"
            rows={3}
            readOnly
            value={upperCase + lowerCase + trim}
          />
        </div>
        <div className="row g-3 justify-content-end">
          <div className="col-md-2">
            <input
              type="text"
              id="wordcount"
              className="form-control"
              value={wordcount}
            />
            <label htmlFor="wordcount" className="form-label my-1">
              word count
            </label>
          </div>
          <div className="col-md-2">
            <input
              type="text"
              id="characount"
              className="form-control"
              value={userText.length + charCount}
            />
            <label htmlFor="characount" className="form-label my-1">
              character count
            </label>
          </div>
        </div>
        <div className="row my-3">
          <div className="d-grid gap-2 d-md-block">
            <button
              type="button"
              className="btn btn-primary mx-1"
              onClick={upperCaseText}
              disabled={userText.length === 0}
            >
              Uppercase
            </button>

            <button
              type="button"
              className="btn btn-primary mx-1"
              onClick={lowerCaseText}
              disabled={userText.length === 0}
            >
              Lowercase
            </button>

            <button
              type="button"
              className="btn btn-primary mx-1"
              onClick={trimmer}
              disabled={userText.length === 0}
            >
              Trim extra spaces
            </button>

            <button
              type="button"
              className="btn  btn-primary mx-1"
              onClick={copy}
              disabled={userText.length === 0}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <Alertarea message={alert} />
    </>
  );
}
