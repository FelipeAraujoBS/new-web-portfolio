import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import MoveT1 from "./../assets/img/MoveT1.jpeg"
import MoveT2  from "./../assets/img/MoveT2.jpeg"
import MoveT3 from "./../assets/img/MoveT3.jpeg"
import Flappy1 from "./../assets/img/Flappy1.jpeg"
import Flappy2 from "./../assets/img/Flappy2.jpeg"
import Flappy3 from "./../assets/img/Flappy3.jpeg"
import Finances1 from "./../assets/img/Finances1.jpeg"
import Finances2 from "./../assets/img/Finances2.jpeg"
import Finances3 from "./../assets/img/Finances3.jpeg"
import Expenses1  from "./../assets/img/Expenses1.jpeg"
import Expenses2  from "./../assets/img/Expenses2.jpeg"
import Expenses3  from "./../assets/img/Expenses3.jpeg"

import colorSharp2 from "./../assets/img/color-sharp2.png"

const Projects = () => {
    
    const project1 = [
        {
            title: "MoveT", 
            description: "Site de Streaming baseado no Netflix",
            imgUrl: MoveT1,
            linkUrl: "https://project-movet.web.app/"
        },
        {
            title: "MoveT",
            description: "Criado com React e usando a API do TMDB",
            imgUrl: MoveT2,
            linkUrl: "https://project-movet.web.app/"
        },
        {
            title: "MoveT",
            description: "Projeto focado em Front-End, mas com possivel ampliação",
            imgUrl: MoveT3,
            linkUrl: "https://project-movet.web.app/"
        }
    ]
    
    const project2 = [
        {
            title: "Finances",
            description: "Um gerenciador de projetos descomplicado",
            imgUrl: Finances1,
            linkUrl: "https://github.com/FelipeAraujoBS/Finances/tree/master"
        },
        {
            title: "Finances",
            description: "Pronto para ser integrado a um Banco de Dados",
            imgUrl: Finances2,
            linkUrl: "https://github.com/FelipeAraujoBS/Finances/tree/master"
        },
        {
            title: "Finances",
            description: "Possibilidade de adicionar serviços de terceiros",
            imgUrl: Finances3,
            linkUrl: "https://github.com/FelipeAraujoBS/Finances/tree/master"
        }
    ]
    const project3 = [
        {
            title: "FlappyBird",
            description: 'Site replicando o famoso jogo "FlappyBird"',
            imgUrl: Flappy1,
            linkUrl: "https://github.com/FelipeAraujoBS/FlappyBirdClone/tree/master"
        },

        {
            title: "FlappyBird",
            description: 'Criado usando apenas JavaScript(Canvas) e CSS"',
            imgUrl: Flappy2,
            linkUrl: "https://github.com/FelipeAraujoBS/FlappyBirdClone/tree/master"
        },

        {
            title: "FlappyBird",
            description: 'Pronto para receber novos recursos com NodeJS"',
            imgUrl: Flappy3,
            linkUrl: "https://github.com/FelipeAraujoBS/FlappyBirdClone/tree/master"
        }
    ]

    const project4 = [
        {
            title: "Expenses",
            description: "Carteira digital",
            imgUrl: Expenses1,
            linkUrl: "https://github.com/FelipeAraujoBS/Expenses/tree/master"
        },
        {
            title: "Expenses",
            description: "Possibilidade de contralar seus gastos anuais, item por item",
            imgUrl: Expenses2,
            linkUrl: "https://github.com/FelipeAraujoBS/Expenses/tree/master"
        },
        {
            title: "Expenses",
            description: "Grafico que mostra o meses de maior gasto",
            imgUrl: Expenses3,
            linkUrl: "https://github.com/FelipeAraujoBS/Expenses/tree/master"
        }
    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>MoveT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Finances</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>FlappyBird</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Expenses</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            project1.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <Row>
                                    {
                                            project2.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <Row>
                                        {
                                            project3.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <Row>
                                        {
                                            project4.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="colorSharp2"/>
        </section>
    )
}

export default Projects;