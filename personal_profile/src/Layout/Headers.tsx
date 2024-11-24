import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import './CustomNavbar.css'; // Import the custom CSS file if needed

function CustomNavbar() {
  const navigate = useNavigate();
  
  const handleRoute = (path:any) => {
    navigate(`/${path.toLowerCase()}`); // Ensure paths are lowercase for consistency
  };

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#70a39a" }}>
      <Container>
        <Navbar.Brand onClick={() => handleRoute('home')} className="text-warning text-bold" style={{ cursor: 'pointer' }}>
          {'<Sai Kiran Bangala/>'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleRoute('home')} className="custom-nav-link">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute('work')} className="custom-nav-link">
              Work
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute('projects')} className="custom-nav-link">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
