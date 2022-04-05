import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Layout from "./pages/Layout";
// import Header from "./pages/Header";
import Home from "./pages/Home";
import Contactform from "./pages/Contactform";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Javascript from "./pages/Javascript";
// import { Layout } from "antd";
import '../node_modules/bootstrap/dist/css/bootstrap.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<Header />}> */}
          <Route index element={<Home title="home"/>} />
          <Route path="Contactform" element={<Contactform title="contact form" />} />
          <Route path="About" element={<About title="About us" />} />
          <Route path="Javascript" element={<Javascript title="Javascript"/>} />
          <Route path="Faq" element={<Faq title="faq"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));