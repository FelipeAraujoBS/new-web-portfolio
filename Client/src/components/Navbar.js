import { useState, useEffect } from 'react'
import {Navbar, Nav, Container, } from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/github.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
  

export const Navagation = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)

        console.log(activeLink)
    }

  return (
    <Router>
        <Navbar expand="md" className={ scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                <img src={logo} alt="Logo"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Nav.Link>
                    </Nav>

                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://github.com/FelipeAraujoBS" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Github"/></a>
                            <a className='dIcon' href="https://www.linkedin.com/in/felipe-araujo-b87386231/" target="_blank" rel="noreferrer"><img className='dImage' src={navIcon2} alt="Linkedin"/></a>
                            <a href="https://www.instagram.com/jsdev_felipe/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                        </div>
                       <HashLink to="#connect">
                            <button className="vvd"><span>Vamos nos Conectar</span></button>
                       </HashLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Router>
  );
}

export default Navagation;