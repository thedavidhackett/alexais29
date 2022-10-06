import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import Suggestion from "./Suggestion";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar className="bg-primary navbar-dark">
        <Nav>
          <Nav.Link href="#suggest">Suggest</Nav.Link>
          <Nav.Link href="#suggestions">Suggestions</Nav.Link>
        </Nav>
      </Navbar>
      <header>
        <Card>
          <Card.Body>
            <h1>Alexa is 29</h1>
            <h5>And she needs 20 thing to do before she turns 30!</h5>
          </Card.Body>
        </Card>
      </header>
      <Container>
        <Row>
          <Col>
            <h2>Give Alexa ideas for her list</h2>
            <p>
              As Alexa turns 29 she is looking for 20 things to do while she is
              still in her twenties (I guess it could change to 30 if there are
              enough good suggestions). What experiences should she have while
              she's still young? What mistakes should she make? You help her
              decide. Leave your email if you want updates on what she decides
              to do (and when she does them) and check out the suggestions that
              others have made so far.
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Form id="suggest">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="suggestion">
                <Form.Label>Your Suggestion(s)</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  If you want updates!
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row id="suggestions">
          <Col xs={12}>
            <h2>Suggestions So Far</h2>
          </Col>
          <Suggestion name="David" text="Eat a Corn dog" />
        </Row>
      </Container>
    </div>
  );
}

export default App;
