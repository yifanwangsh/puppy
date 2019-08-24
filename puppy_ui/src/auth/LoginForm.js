import React from "react";
import styled from "styled-components";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { request } from "../api";

const StyledForm = styled(Form)`
  widht: 23%;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        request("user/login/", "post", {
          username: values.username,
          password: values.password
        })
          .then(response => {
            this.props.history.push("/home");
          })
          .catch(err => {
            console.err(err);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a href="">Forgot password</a>
          <StyledButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </StyledButton>
          Or <a href="">register now!</a>
        </Form.Item>
      </StyledForm>
    );
  }
}

export const LoginForm = Form.create()(Login);
