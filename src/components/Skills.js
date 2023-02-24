import React from 'react';
import { Card, Button, Container, Row, Col, Tab } from 'react-bootstrap';
import js from '../assets/imgs/js.png'
import react from '../assets/imgs/react.png'
import node from '../assets/imgs/node.png'
import express from '../assets/imgs/express.png'
import postgreSQL from '../assets/imgs/postgreSQL.png'
import mySQL from '../assets/imgs/mySQL.png'
import mongo from '../assets/imgs/mongo.png'
import redux from '../assets/imgs/redux.png'
import bootstrap from '../assets/imgs/bootstrap.png'

export const Skills = () => {
    return (
        <Container>
            <Row>
                <Col >
                <div className='Tech'>
                    <h1 className='techborder'>Tech Skills</h1>
                </div>
                <div>
                    <img className='imagenA' id='javas' src={js} alt='javascript'/>
                    <img className='imagenA' id='javas' src={react} alt='React.js'/>
                    <img className='imagenA' id='javas' src={node} alt='Node.js'/>
                    <img className='imagenA' id='javas' src={express} alt='Express.js'/>
                    <img className='imagenA' id='javas' src={postgreSQL} alt='PostgreSQL'/>
                    <img className='imagenA' id='javas' src={mySQL} alt='MySQL'/>
                    <img className='imagenA' id='javas' src={mongo} alt='MongoDb'/>
                    <img className='imagenA' id='javas' src={redux} alt='redux'/>
                    <img className='imagenA' id='javas' src={bootstrap} alt='bootstrap'/>
                </div>
                </Col>
                <Col>
                <div className='Soft'>
                    <h1 className='softborder'>Soft Skills</h1>
                </div>
                <div className='Softskills'>
                    <h5>Communication</h5>
                    <h5>Focus</h5>
                    <h5>Positive Attitude</h5>
                    <h5>Responsible</h5>
                    <h5>Hard Working</h5>
                    <h5>Scrum</h5>
                </div>

                </Col>
            </Row>
        </Container>
    )
}