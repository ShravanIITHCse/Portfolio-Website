import { Container, Row, Col } from 'react-bootstrap';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import leetcode from '../assets/img/leetcode.svg';
import codeforces from '../assets/img/code-forces.svg';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center footer_box'>
                    <Col sm={8}>
                        <div className='about-me-box '>
                            <h2>More about me</h2>
                            <div className='about-me-text'>
                            <p className='hobbies'><h3>Hobbies</h3> Reading books, Watching anime, Sketching, Painting, Chatting, Singing, Dancing,...</p></div>
                            
                        </div>

                    </Col>
                    <Col sm={4} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/shravan-badgujar-a78201269/"><img src={linkedin} alt="Linkedin" /></a>
                            <a href="https://github.com/ShravanIITHCse"><img src={github} alt="Github" /></a>
                            <a href="https://leetcode.com/u/Three_swords_zoro/"><img src={leetcode} alt="Leetcode" /></a>
                            <a href="https://codeforces.com/profile/Shravanair160"><img src={codeforces} alt="CodeForces" /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved by Shravan Badgujar</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}