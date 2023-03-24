import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
   const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DevTech</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            
            {/*<Nav.Link as={Link} to="/login">Login</Nav.Link>*/}

            {isAuthenticated && <Nav.Link as={Link} to="/projects">Projects</Nav.Link> }

            {isAuthenticated && <button class="btn btn-dark" onClick={() => logout({ returnTo: window.location.origin})}>Logout</button> }
            {!isAuthenticated && <button class="btn btn-dark" onClick={() => loginWithRedirect()}>Login</button>}
            
          </Nav>
        </Container>
      </Navbar>
          
      <div>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          {/*<Route path="/login" element={<Login/>}/>*/}
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </div>
      <Footer />
    </BrowserRouter>
    
  
  );
}

export default App;
