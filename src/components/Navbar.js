import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.jpeg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import leetcode from '../assets/img/leetcode.svg';
import codeforces from '../assets/img/code-forces.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => { window.removeEventListener('scroll', onScroll); }
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/shravan-badgujar-a78201269/"><img src={linkedin} alt="Linkedin" /></a>
                            <a href="https://github.com/ShravanIITHCse"><img src={github} alt="Github" /></a>
                            <a href="https://leetcode.com/u/Three_swords_zoro/"><img src={leetcode} alt="Leetcode" /></a>
                            <a href="https://codeforces.com/profile/Shravanair160"><img src={codeforces} alt="CodeForces" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}