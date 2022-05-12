import { useState } from "react";
import { React } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(data.password.length);
    if (data.password.length < 8) {
      toast.error("Password should be more then 8 Characters");
    } else {
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);
      localStorage.setItem("userid", 1);
      toast.success("Login SuccessFully");
      navigate("/list");
    }
  };
  return (
    <div className="login-form">
      <h3>Login Form</h3>
      <Form className="inner-content" onSubmit={(e) => onHandleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
