import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [DarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
  };

  const appClass = DarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {DarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
