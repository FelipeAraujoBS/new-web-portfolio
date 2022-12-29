import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meter from "../assets/meter/Meter";

import colorSharp from "./../assets/img/color-sharp.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
   return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Habilidades
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                  <Meter className="item" num="75" skill="JavaScript"/>
                                </div>
                                <div className='item'>
                                  <Meter className="item" num="50" skill="Express"/>
                                </div>
                                <div className='item'>
                                  <Meter className="item" num="75" skill="NodeJS"/>
                                </div>
                                <div className='item'>
                                  <Meter className="item" num="50" skill="Git"/>
                                </div>
                                <div className='item'>
                                  <Meter className="item" num="50" skill="MongoDB"/>
                                </div>
                                <div className='item'>
                                  <Meter className="item" num="80" skill="React"/>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="colorSharp"/>
        </section>
   )
}

export default Skills