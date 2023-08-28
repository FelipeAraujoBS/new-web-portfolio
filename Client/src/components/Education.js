import { Container, Row } from "react-bootstrap"

import { ReactComponent as WorkIcon} from "../assets/img/work.svg"
import { ReactComponent as SchoolIcon} from "../assets/img/school.svg"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from "../assets/timeLineElements";

const Education = () => {

    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#7F00FF" };
  

    return(
        <section className="education" id="formation">
            <Container>
                <Row>
                    <VerticalTimeline>
                        {timelineElements.map((element) => {
                            let isWorkIcon = element.icon === 'work';

                            return(
                                <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon= { isWorkIcon ? <WorkIcon/> : <SchoolIcon/>}
                                >
                                
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.institution}</h5>
                                <p id="description">{element.description}</p>
                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>
                </Row>
            </Container>
        </section>
    );
}

export default Education;