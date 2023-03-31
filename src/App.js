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
import { Home } from './components/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { Footer } from './components/Footer';
import { Cards } from './components/Cards';
import { Card } from './components/Card';

function App() {
   const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container className='Container-nav'>
          <Navbar.Brand className='dev'href="#home"><span>Dev</span>Tech</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            
           

            {isAuthenticated && <Nav.Link as={Link} to="/card">Projects</Nav.Link> }
            
            {isAuthenticated && <button class="btn btn-dark" onClick={() => logout({ returnTo: window.location.origin})}>Logout</button> }
            {!isAuthenticated && <button class="btn btn-dark" onClick={() => loginWithRedirect()}>Login</button>}
            
          </Nav>
        </Container>
      </Navbar>
          
      <div>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/cards" element={<Cards/>}/>
        </Routes>
      </div>
    </div>
      
    
      <Footer />
    </BrowserRouter>
    
  
  );
}

export default App;
