import React from "react";
import "./style/resume.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  workExperiences,
  skills,
  strongSuits,
  education,
} from "../config/self";

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="tech-background">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Daisy's CV</title>
          <meta name="description" content="" />
        </Helmet>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {workExperiences.map((data) => {
                  return (
                    <tr key={data.company}>
                      <th scope="row">{data.title}</th>
                      <td>{data.company}</td>
                      <td>{data.when}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data) => {
              return (
                <div key={data.name}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.level}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Areas of expertise</h3>
          </Col>
          <Col lg="7">
            {strongSuits.map((data) => {
              return (
                <div className="service_ py-4" key={data.title}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col lang="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                <tr key="undergrad">
                  <th>{education.school}</th>
                  <td>{education.when}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
