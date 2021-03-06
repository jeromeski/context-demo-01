import localforage from "localforage";
import React, { Fragment } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLogger } from "react-use";
import { useStore } from "../context/auth.context";

export default function CustomNavbar() {
  useLogger("Navbar");
  const [store, dispatch] = useStore();
  const { isAuth } = store;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localforage.removeItem("auth");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Company Logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {isAuth ? (
              <Fragment>
                <Navbar.Text>
                  Welcome back <a href="#login">Mark Otto</a> !
                </Navbar.Text>
                <Button
                  className="m-3"
                  variant="outline-light"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Fragment>
            ) : (
              <Button as={Link} to="/login" variant="outline-light">
                Login
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
