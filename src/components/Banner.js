import {useState, useEffect} from "react"
import { Container, Row , Col } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    
    return (
      <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline"> Welcome to my Portfolio</span>
                    <h1>{"Hi I'm FullStack developer "}</h1>
                    <p>My name is Facundo and I am a passionate web developer with experience in the PERN stack (PostgreSQL, Express, React, and Node.js). My work experience includes projects in the development of scalable and modern web applications.
My formal education includes several courses and certifications in web development technologies, such as JavaScript, React, and Node.js.
Some of my most notable projects include creating a scalable e-commerce platform for a book company.
In addition to my technical skills, I also have a strong interest in developing soft skills such as communication, leadership, and teamwork. I believe these skills are crucial for success in any project and team work.
In my free time, I stay up-to-date on the latest trends and technologies related to web development and also enjoy working on personal projects. My long-term goal is to continue developing my career in the field of web development and contribute to the growth and success of the companies I work for.
If you are interested in learning more about my experience and abilities, please feel free to contact me. I am excited to connect and collaborate on interesting projects.</p>
                    <button onClick={() => console.log("connect")}>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Headder img" />
                </Col>
            </Row>
        </Container>
      </section>  
    )
}