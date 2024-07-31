import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false);
  const [charAlllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //using ref hook
  const passwordref = useRef(null);

  const passwordGenreator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "123456789";

    if (charAlllowed) str += '~!@#$%^&*()_+<>?"{}';

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char); //passwordgenreated
    }
    setpassword(pass); //setting password
  }, [length, numberallowed, charAlllowed]);

  useEffect(() => {
    passwordGenreator();
  }, [length, numberallowed, charAlllowed, passwordGenreator]); //doesn't need to store in any thing it automatically fire the passwordGenreator() when the [dependencies array ] components are changed

  const copyPasswordToclipboard=useCallback(()=>{ passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,password.length)
    window.navigator.clipboard.writeText(password)},[password])
  return (
    <div className="outer">
      <h1>Random Password Genreator</h1>
      <div className="inner">
        <input
          style={{ borderRadius: 10 }}
          type="text"
          name=""
          id=""
          readOnly
          value={password}
          placeholder="password"
          className="textarea"
          ref={passwordref}
        />
        <button
          onClick={copyPasswordToclipboard}
          style={{ backgroundColor: "blue", borderRadius: 10, margin: 10 }}
        >
          Copy
        </button>
      </div>
      <input
        type="range"
        name="range"
        min={6}
        max={50}
        value={length}
        onChange={(e) => {
          setlength(e.target.value);
        }}
      />
      <label htmlFor="range">length:{length}</label>

      <input
        type="checkbox"
        defaultChecked={numberallowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="numberInput">Numbers</label>

      <input
        type="checkbox"
        defaultChecked={charAlllowed}
        id="characterInput"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="characterInput">Character</label>
    </div>
  );
}

export default App;
