import { Col } from 'react-bootstrap';

export const ProjectCards = ({title, description, imgurl}) => {
    return (
        <Col sm={6} md ={4} >
            <div className="proj-imgbx">
                <img src={imgurl} alt="Project 1" />
                <div className="proj-txtx">
                    <div className="proj-details">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </div>
        </Col>
    )    
}