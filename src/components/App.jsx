import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";
import createCard from "./Createcard";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
