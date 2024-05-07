import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import headerimg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Pre-final Year Student', 'Programmer', 'ML enthusiast', 'Freelancer'];
    const [text, setText] = useState('');
    const deleting_period = 1000;
    const typing_period = 500;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const intro = 'Hi, I am Shravan, a';

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => clearInterval(ticker);
    }, [text])

    const tick = () => {
        let i = loopNum;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if (isDeleting){
            setDelta(delta - delta/4);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(deleting_period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum((loopNum + 1) % toRotate.length);
            setDelta(typing_period);
        }
    };
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="tagclass">
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{intro}<br /><span className="wrap">{text}</span></h1>
                        <p>loreum ipsum dolar sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerimg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
    }