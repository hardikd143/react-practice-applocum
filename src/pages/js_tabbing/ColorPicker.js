import { Slider, Row, Col } from "antd";
import React, { useState } from "react";
const ColorPicker = () => {
  //   const [color, setcolor] = useState(`rgb(${red},${green},${blue})`)
  const [color, setcolor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  const slidedNum = {
    width: "50px",
    height: "30px",
    lineHeight: "30px",
    background: "#fff",
    textALign: "left",
    paddingLeft: "0px",
    boxShadow: `inset 0 0 10px rgb(${color.red},${color.green},${color.blue})`,
  };
  const mySlider = {
    overflow: "hidden",
    padding: "0 0 0 10px",
    background: "#ffffff33",
    margin: "0 0 15px 0",
    height: "30px",
  };
  const copyColor = () => {
    let inp = document.getElementById("myClr");
    inp.select();
    navigator.clipboard.writeText(inp.value);
    alert('text copied')
  };
  return (
    <div
      style={{
        border: "2px solid #202020",
        padding: "15px 10px",
        background: `rgb(${color.red},${color.green},${color.blue})`,
      }}
    >
      <div className="picker text-center ">
        <h3
          className=" d-inline-block bg-white position-relative"
          style={{ padding: "5px 20px " }}
        >
          rgb({color.red},{color.green},{color.blue})
          <button
            style={{
              position: "absolute",
              fontSize: "12px",
              left: "110%",
              top: "0",
              color: "white",
              background: "#000",
              padding: "5px 7px",
              border: "none",
            }}
            onClick={() => copyColor()}
          >
            copy
          </button>
        </h3>
        <input
          type="text"
          id="myClr"
          value={`rgb(${color.red},${color.green},${color.blue})`}
          hidden
        />
        <Row className="justify-content-center">
          <Col xs={24} sm={20} md={16} lg={16} style={mySlider}>
            <div className="d-flex justify-content-center align-item-center">
              <Slider
                defaultValue={color.red}
                min={0}
                max={255}
                onChange={(e) => {
                  setcolor((previousState) => {
                    return { ...previousState, red: e };
                  });
                }}
                tipFormatter={null}
                className="flex-grow-1 me-2"
              />
              <span style={{ ...slidedNum, fontSize: "18px" }}>
                {color.red}
              </span>
            </div>
          </Col>
          <Col xs={24} sm={20} md={16} lg={16} style={mySlider}>
            <div className="d-flex justify-content-center align-item-center">
              <Slider
                defaultValue={color.green}
                min={0}
                max={255}
                onChange={(e) => {
                  setcolor((previousState) => {
                    return { ...previousState, green: e };
                  });
                }}
                tipFormatter={null}
                className="flex-grow-1 me-2"
              />
              <span style={{ ...slidedNum, fontSize: "18px" }}>
                {color.green}
              </span>
            </div>
          </Col>
          <Col xs={24} sm={20} md={16} lg={16} style={mySlider}>
            <div className="d-flex justify-content-center align-item-center">
              <Slider
                defaultValue={color.blue}
                min={0}
                max={255}
                onChange={(e) => {
                  setcolor((previousState) => {
                    return { ...previousState, blue: e };
                  });
                }}
                tipFormatter={null}
                className="flex-grow-1 me-2"
              />
              <span style={{ ...slidedNum, fontSize: "18px" }}>
                {color.blue}
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ColorPicker;
