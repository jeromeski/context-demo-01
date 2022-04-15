import React, { useEffect, useState } from "react";
import ErrorComponent from "../components/ErrorComponent";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import { useMutationLogin } from "../api/mock-api";
import { useStore } from "../context/auth.context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const url = "/api/auth";
  const [store, dispatch] = useStore();
  const { mutate: login, error, isLoading, data } = useMutationLogin();

  const handleSubmit = (e) => {
    // e.preventDefault();
    login({ email, password });
  };

  const loginUser = () => {
    dispatch({ type: "LOGIN", payload: data });
  };

  useEffect(() => {
    if (data) {
      loginUser();
    }
  }, [data]);

  console.log(store);

  return (
    <Container className="h-100">
      <Row className="h-100">
        <Col
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <CustomCard>
            <Form>
              <FormGroup className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                {error && <ErrorComponent type="EMAIL_ERROR" />}
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && <ErrorComponent type="PASSWORD_ERROR" />}
              </FormGroup>
              <Button
                onClick={handleSubmit}
                variant="primary"
                size="sm"
                disabled={isLoading}
              >
                {isLoading ? "Loading…" : "Login"}
              </Button>
            </Form>
          </CustomCard>
        </Col>
      </Row>
    </Container>
  );
}
