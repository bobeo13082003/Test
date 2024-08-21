import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import './Header.scss'
import { useNavigate } from 'react-router';
const Header = () => {
    const navigate = useNavigate();
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='nav'>
                        <Nav className='nav__text'>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Help</Nav.Link>
                            <Nav.Link href="#Blog">Blog</Nav.Link>
                            <Nav.Link href="#Features">Features</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-center'>
                                <button onClick={() => navigate('/signin')} className='nav__signin'>Sign In</button>
                            </Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;