import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const MainFrame = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Contactform" style={{ textDecoration: "none" }}>
                Contactform
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/About" style={{ textDecoration: "none" }}>
                About
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Faq" style={{ textDecoration: "none" }}>
                Faq
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Javascript" style={{ textDecoration: "none" }}>
                Javascript
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default MainFrame;
