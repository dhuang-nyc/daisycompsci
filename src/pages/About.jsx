import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
    const about = `I came to the States when I was 18 to study Computer Science.`;
    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta name="about" />
                    <title> About</title>                
                </Helmet>
                <Row>
                    <Col>
                        <h1>About Daisy</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>A bit About Me</h3>
                    </Col>
                    <Col>
                        <div>
                            <p>{about}</p>
                        </div>
                    </Col>
                </Row>
                <Row></Row>
            </Container>
        </HelmetProvider>
    )
}