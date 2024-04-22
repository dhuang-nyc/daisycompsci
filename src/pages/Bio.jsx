import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import "./style/bio.css";
import { aboutMe } from "../config/self";

export const Bio = () => {
  return (
    <HelmetProvider>
      <Container className="about-main">
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
            <h3>An Immigrant Story...</h3>
          </Col>
          <Col>
            <div>{aboutMe}</div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </HelmetProvider>
  );
};
