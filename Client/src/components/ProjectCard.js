import { Col } from "react-bootstrap"

const ProjectCard = (props) => {
    return(

        <Col sm={6} md={4}>
            <a href={props.linkUrl} style={{color:"white", textDeconration: "none" }} target="_blank" rel="noreferrer">
                <div className='proj-imgbx'>
                    <img src={props.imgUrl} alt="img"/>

                    <div className="proj-txtx">
                        <h4>{props.title}</h4>
                        <span>{props.description}</span>
                    </div>
                </div>
            </a>
        </Col>
    
    )
}

export default ProjectCard;