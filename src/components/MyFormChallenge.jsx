import { useState } from "react";
import BoxColor from "./BoxColor";

function MyForm() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        id="color"
        type="text"
        placeholder="añade el color"
        onChange={(e) => setInputValue(e.target.value.toLocaleLowerCase())}
        value={inputValue}
      />
      <div className="container">
        {colors.map((color) => {
            return (
              <BoxColor
                key={color}
                color={color}
                value={inputValue}
              />
            )
        })}
      </div>
      
    </>
  );
}

export default MyForm;