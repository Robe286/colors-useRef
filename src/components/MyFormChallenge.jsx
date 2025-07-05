import { useState, useEffect, useRef } from "react";
import BoxColor from "./BoxColor";

function MyForm() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [color, setColor] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input
        id="color"
        type="text"
        placeholder="añade el color"
        className=""
        onChange={() => setColor(inputRef.current.value)}
        value={color}
        ref={inputRef}
      />
      <div className="container">
        {colors.map((c) => {
            return (
              <BoxColor
                key={c}
                color={c}
                value={color}
              />
            )
        })}
      </div>
      
    </>
  );
}

export default MyForm;