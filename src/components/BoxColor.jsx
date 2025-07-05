function BoxColor ({color, value}) {
  return (
    <>
      <div
        className={`box`}
        style={{color: `${color}`}}  
      >

        <p>I'm not a {value} color</p>
      </div>
    </> 
  )
}
export default BoxColor;  
