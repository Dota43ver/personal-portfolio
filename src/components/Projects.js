import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Card, Button, Container, Row, Col, Tab } from 'react-bootstrap';

export const Projects = () => {
 
const projects = [
    {
        tittle: "Projects Dogs",
        description: "Design & Development",
        // imgUrl: projImg1,
    },
    {
        tittle: "Oasis library",
        description: "Design & Development",
        // imgUrl: projImg2,
    },
]
return (
    <section className='project' id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem</p>
                </Col>
            </Row>
        </Container>
    </section>
)

}