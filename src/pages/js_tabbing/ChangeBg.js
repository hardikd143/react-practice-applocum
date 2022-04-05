import React, { useState } from 'react'

function ChangeBg() {
  const random = () => Math.floor(Math.random() * 256);
  const [red, setred] = useState(random);
  const [blue, setblue] = useState(random);
  const [green, setgreen] = useState(random);
const changeDIV = {
  background: "rgb("+red + "," + blue + "," + green+")",
  padding: "10px",
  height: "100px",
  display: "grid",
  placeItems: "center",
  margin: "auto",
  transition: "all 0.3s linear",
  border: "2px solid #202020",
  textAlign: "center",
};
const chngbg = ()=>{
    setred(random);
    setblue(random);
    setgreen(random);
}
  return (
    <div
    style={{
      background: "rgb(" + red + "," + blue + "," + green + ")",
      ...changeDIV,
    }}
  >
    <button onClick={chngbg} className="customBtn">Change bg</button>
  </div>
  )
}

export default ChangeBg