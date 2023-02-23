import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header'

function App() {

  const [mode, setMode] = useState(true);

  function onDarkmodeClick () { 
    setMode(!mode)
  }

  return (
    <div className={mode ? "App light" : "App dark"}>
      <Header onDarkModeClick={onDarkmodeClick} mode={mode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
