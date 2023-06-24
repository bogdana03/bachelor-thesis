import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer } from "./components/Footer";
import { Cards } from "./components/Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <BrowserRouter>
          <div className="App">
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
          <Container>
            <Navbar.Brand className="dev" href="#home">
              <span>DeV</span>ART
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">
                  SERVICES
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  SPECIALISTS
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  ABOUT
                </Nav.Link>
                {isAuthenticated && (
                  <Nav.Link as={Link} to="/cards">
                    PROJECTS
                  </Nav.Link>
                )}
                {isAuthenticated ? (
                  <button
                    className="btn btn-dark"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="btn btn-dark"
                    onClick={() => loginWithRedirect()}
                  >
                    LOGIN
                  </button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="main-container">
          <Container fluid>
            <Row>
              <Col>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/cards" element={<Cards />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

