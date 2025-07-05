import { useEffect, useRef, useState } from "react";

function BoxColor ({color, value}) {
  const [isMatch, setIsMatch] = useState(false)
  const boxRef = useRef(null);

  useEffect(() => {
    const onDiv = boxRef.current;
    if (!onDiv) return;

    setIsMatch(onDiv.className.includes(value.trim().toLowerCase()));
    
  }, [value]);

  return (
    <>
      <div
        ref={boxRef}
        className={`box ${color}`}
        style={{
          color: `${color}`,
          backgroundColor: isMatch ? color : 'transparent'
        }}  
      >
        {isMatch ?
          <p style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '20px'
            }}
          >Yes i'm a {value} color</p>
          : value ? <p>I'm not a {value} color</p>
          : <p>escribe un color</p>}
      </div>
    </> 
  )
}
export default BoxColor;  
















/*
const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef(null);
  const trimmedInput = inputValue.trim().toLowerCase();
  const match = trimmedInput === color.toLowerCase();

  useEffect(() => {
    if (!boxRef.current) return;

    if (match) {
      boxRef.current.style.backgroundColor = color;
      boxRef.current.style.color = "white";
    } else {
      boxRef.current.style.backgroundColor = "#f0f0f0";
      boxRef.current.style.color = "black";
    }
  }, [match, color]);

  return (
    <div ref={boxRef} className="box">
      <p>{inputValue}</p>
      <p>{match ? ¡Soy ${color}! : "No soy el color"}</p>
    </div>
  );
};

*/