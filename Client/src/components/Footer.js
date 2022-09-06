import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/github.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
    return(
       <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className='social-icon'>
                            <a href="https://github.com/FelipeAraujoBS" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Github"/></a>
                            <a className='dIcon' href="https://www.linkedin.com/in/felipe-araujo-b87386231/" target="_blank" rel="noreferrer"><img className='dImage' src={navIcon2} alt="Linkedin"/></a>
                            <a href="https://www.instagram.com/jsdev_felipe/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
       </footer>
    )
}

export default Footer;