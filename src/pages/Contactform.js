import { Input, Form, Button, Row, Col } from "antd";

function Contactform(props) {
  document.title= `${props.title}`
  const { TextArea } = Input;
  
  const Contactform = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "15px 0",
    borderRadius: "15px",
  };
  return (
    <>
      <div className="container py-20 px-15">
        <h4>Contact Form</h4>
        <Form inline style={Contactform} >
          <Input.Group>
            <Row gutter={16}>
              <Col lg={10} md={12} sm={18} xs={24}>
                <Form.Item>
                  <Input
                    size="large"
                    name="firstname"
                    placeholder="First name"
                    id="firstName"
                  />
                </Form.Item>
              </Col>
              <Col lg={10} md={12} sm={18} xs={24}>
                <Form.Item>
                  <Input
                    size="large"
                    name="lastname"
                    placeholder="Last name"
                    id="lastName"
                  />
                </Form.Item>
              </Col>
              <Col lg={20} md={24} sm={18} xs={24}>
                <Form.Item>
                  <Input
                    size="large"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </Form.Item>
              </Col>
              <Col lg={20} md={24} sm={18} xs={24}>
                <Form.Item>
                  <TextArea
                    name="message"
                    rows={4}
                    placeholder="message"
                  />
                </Form.Item>
              </Col>
            </Row>
          <Button htmlType="submit">Submit</Button>
          </Input.Group>
        </Form>
      </div>
    </>
  );
}

export default Contactform;
