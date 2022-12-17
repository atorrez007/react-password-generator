import "./GeneratorStyles.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Generator = () => {
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();

  let characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  const generatePsswd = () => {
    let passwd1 = "";
    let passwd2 = "";

    for (let i = 0; i < 15; i++) {
      let randomCombination1 = Math.floor(Math.random() * characters.length);
      let randomCombination2 = Math.floor(Math.random() * characters.length);
      passwd1 += characters[randomCombination1];
      passwd2 += characters[randomCombination2];
    }
    setPassword1(passwd1);
    setPassword2(passwd2);
  };

  const copyPassword1 = () => {
    navigator.clipboard.writeText(password1);
    toast("Password copied to clipboard!");
  };

  const copyPassword2 = () => {
    navigator.clipboard.writeText(password2);
    toast("Password copied to clipboard!");
  };

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="text-wrapper">
          <h3>
            Generate a <span id="text-accent">random password</span>
          </h3>
          <h5 className="description">Never use an insecure password again.</h5>
        </div>
        <div>
          <button id="generate-btn" onClick={generatePsswd}>
            Generate password
          </button>
          <div>
            <hr id="decorative-line" />
          </div>
        </div>
        <div className="password-wrapper">
          <input
            className="password-input"
            type="text"
            value={password1}
            onClick={!password1 ? null : copyPassword1}
          />
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="dark"
          />

          <input
            className="password-input"
            type="text"
            value={password2}
            onClick={!password2 ? null : copyPassword2}
          />
        </div>
      </div>
    </div>
  );
};

export default Generator;
