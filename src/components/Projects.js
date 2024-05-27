import { Container, Tab } from "react-bootstrap"
import { Col, Nav, Row } from "react-bootstrap"
import { ProjectCards } from "./ProjectCards"
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img1.png'
import projImg3 from '../assets/img/project-img1.png'

export const Projects = () => {

    const projects = [
        {
            title: 'Project 1',
            description: 'This is a project description',
            imgurl: projImg1,
        },
        {
            title: 'Project 2',
            description: 'This is a project description',
            imgurl: projImg2,
        },
        {
            title: 'Project 3',
            description: 'This is a project description',
            imgurl: projImg3,
        },
        {
            title: 'Project 4',
            description: 'This is a project description',
            imgurl: projImg1,
        }
    ]

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum is simply blah blah blah balkh blah </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab one</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Tab three</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" >Tab four</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth" >Tab five</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCards key={index} title={project.title} description={project.description} imgurl={project.imgurl} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h3>Second Project</h3>
                                <p>Project description</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h3>Third Project</h3>
                                <p>Project description</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Project 1" />
        </section>
    )
}