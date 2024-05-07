import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import GaugeChart from 'react-gauge-chart'
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png'

export const Skills = () => {
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

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.<br></br> loreum ipsum dolar sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3>Technical Skills</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.5}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.6}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.7}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.87}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                    <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.9}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                            </Carousel>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3>Soft Skills</h3>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.5}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.6}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.7}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.87}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                    <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.9}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                            </Carousel>

                            <br></br>
                            <br></br>
                            <br></br>
                            <h3>Professional Skills</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.5}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.6}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.7}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.87}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                                <div className="item">
                                    <GaugeChart id="gauge-chart5"
                                        nrOfLevels={420}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#B589D6', '#9969C7','#804FB3', '#6A359C', '#552586' ]}
                                        percent={0.9}
                                        arcPadding={0}
                                    />
                                    <h5>Web devolopement</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
            <img className="background-image-right" src={colorSharp2} alt=""/>

        </section>
    )
}