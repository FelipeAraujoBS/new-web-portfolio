import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import fResume from "../assets/fResume.pdf"
import headerImg from "./../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const period = 2000;
    const toRotate = ['Desenvolvedor Web', 'Dev Front-End']

    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }



    return(
        <section className="banner" id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Seja bem-vindo ao meu Portfolio</span>
                        <h1>{`Olá, eu sou Felipe`}  <br/> <span >{text}</span></h1>
                        <p>Tenho 25 anos e sou de Salvador-BA. <br/>
                        Sou um Desenvolvedor Web com uma grande paixão por aprender. Domino algumas das principais tecnologias do mercado, e estou ansioso para aprender cada dia mais. </p>
                        <a style={{textDecoration: "none"}} href={fResume} target="_blank" rel="noreferrer"><button> Baixe meu currículo <ArrowRightCircle size={25}/></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;