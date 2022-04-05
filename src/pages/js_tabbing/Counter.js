import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const getalert = () => {
    alert("count = " + count);
  };

  const plus = () => {
    setCount(count + 1);
  };
  const btns = {
    width:'30px',
    height:'30px',
    fontSize:'15px',
    display:'grid',
    placeItems:'center',
    background:'#303030',
    border:'none',
    outline:'none',
    color:'#fff',
  }
  return (
    <>
      <div style={{textAlign:'center',border:'2px solid #202020',padding:'15px'}}>
        <h1>This is counter</h1>
        <div style={{display:'flex', alignItems:'center',margin:'20px 0',justifyContent:'center'}}>
          <button onClick={() => setCount(count - 1)} style={btns}>-</button>
          <span style={{
            width:'100px',
            fontSize:'16px',
            textAlign:'center',
          }}>{count}</span>
          <button onClick={plus} disabled={false} style={btns}>
            +
          </button>
        </div>
        <button className="customBtn" onClick={getalert}>Get count alert</button>
      </div>
    </>
  );
}

export default Counter;
