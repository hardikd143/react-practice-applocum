import React, { useState } from "react";
import { Tabs } from "antd";
import Counter from "./js_tabbing/Counter";
import ChangeBg from "./js_tabbing/ChangeBg";
import ColorPicker from "./js_tabbing/ColorPicker";
const { TabPane } = Tabs;

function Javascript(props) {
  document.title= `${props.title}`
  return (
    <div className="container-xl">
      <Tabs defaultActiveKey="3" >
        <TabPane tab="Counter" key="1">
          <Counter/>
        </TabPane>
        <TabPane tab="Change Background" key="2">
          <ChangeBg/>
        </TabPane>
        <TabPane tab="Color Picker" key="3">
          <ColorPicker/>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Javascript;
