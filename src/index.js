import React, {useState} from 'react';
function getRandColor(){
  const r = Math.floor(Math.random() * 16777215).toString(16);
  const g = Math.floor(Math.random() * 16777215).toString(16)
  const b = Math.floor(Math.random() * 16777215).toString(16)
  return `#${r}${g}${b}`
}
function hello(){
  // [color, setColor] = useState('#000000');
  return(
    // <div onClick={() => setColor(getRandColor())}>
      // <h1 style={{color: color}}>Hello</h1>
    // </div>
    <div>
      <h1>Hello</h1>
    </div>
  )
}


export default hello;