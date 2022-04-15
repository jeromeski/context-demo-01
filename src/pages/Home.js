import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="h-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <h1 className="display-1">Home</h1>
        </Col>
      </Row>
    </Container>
  );
}
