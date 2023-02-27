import React from 'react';


import { Container, Row, Col} from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/imgs/dogs.JPG"
import projImg2 from "../assets/imgs/oasis.JPG"
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () => {
 
const projects = [
    {
        tittle: "Projects Dogs",
        description: "Design & Development",
         imgUrl: projImg1,
         linka: "https://github.com/Dota43ver/PI-Dogs",
         linkb: "https://pi-dogs-fuj6.vercel.app/"
    },
    {
        tittle: "Oasis library",
        description: "Design & Development",
         imgUrl: projImg2,
         linka: "https://github.com/Dota43ver/OasisLibrary",
         linkb: "https://oasis-library.vercel.app/"
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
            <Row>
                {projects.map((projects, index) => {
                    return(
                        <ProjectCard
                        key={index}
                        {...projects}
                        />
                    )
                })
                }
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt="background-img"></img>
    </section>
)

}