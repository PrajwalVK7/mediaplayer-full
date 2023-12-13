import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import beat from '../assets/beat.gif';
import sample1 from '../assets/sample1.gif'
import sample2 from '../assets/sample2.gif'
import { Link } from 'react-router-dom';



function Landingpage() {
    return (
        <div>
            <Container className='mb-5 mt-5'>
                <Row className='mb-5'>
                    <Col lg={6} md={6}>
                        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
                        <p className='text-white' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et veniam error repudiandae sunt similique culpa vero, nihil eaque sequi blanditiis expedita debitis pariatur omnis impedit quis molestias esse nostrum recusandae!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed rerum optio quos exercitationem veniam suscipit non cumque blanditiis accusantium.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum, expedita exercitationem blanditiis inventore aspernatur in quia explicabo doloribus libero repudiandae tempora est nemo dolorem eius distinctio! Natus, eum iusto.</p>
                        <Link to={'/home'}>
                            <button className='btn btn-warning mt-4 ms-2'>
                                Get Started <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </Link>

                    </Col>
                    <Col lg={6} md={6}>
                        <Container>
                            <div className='d-flex justify-content-center'>
                                <img src={beat} className='img-fluid ms-3' alt="" style={{ height: "400px" }} />
                            </div>
                        </Container>
                    </Col>
                </Row>
                <div className='mt-4'>
                    <Container>
                        <h3 className='text-center mt-3'>Features</h3>
                        <Row >
                            <Col className='mt-3' lg={4} md={4}>
                                <div className='d-flex justify-content-center'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={sample1} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col className='mt-3' lg={4} md={4}>
                                <div className='d-flex justify-content-center'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={sample2} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col className='mt-3' lg={4} md={4}>
                                <div className='d-flex justify-content-center'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={sample1} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='mt-5 mb-5'>
                    <Container className='border border-2 border-secondary rounded p-5'>
                        <Row>
                            <Col lg={6} >
                                <h3 className='text-warning'>Simple and Powerful</h3>
                                <p className='text-white'>
                                    <span className='fw-bolder fs-5'>Play Everything :</span>
                                    <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ea perspiciatis reprehenderit accusamus, tempora quis cum beatae, debitis incidunt sapiente illum facere, amet id quae ut aliquid numquam officiis vitae?</span>
                                </p>
                                <p className='text-white'>
                                    <span className='fw-bolder fs-5'>Play Everything :</span>
                                    <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ea perspiciatis reprehenderit accusamus, tempora quis cum beatae, debitis incidunt sapiente illum facere, amet id quae ut aliquid numquam officiis vitae?</span>
                                </p><p className='text-white'>
                                    <span className='fw-bolder fs-5'>Play Everything :</span>
                                    <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ea perspiciatis reprehenderit accusamus, tempora quis cum beatae, debitis incidunt sapiente illum facere, amet id quae ut aliquid numquam officiis vitae?</span>
                                </p>
                            </Col>
                            <Col lg={6} >
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/zqGW6x_5N0k" 
                                title="ANIMAL: ARJAN VAILLY | Ranbir Kapoor | Sandeep Vanga | Bhupinder B, Manan B | Bhushan K"
                                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                 allowfullscreen></iframe>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    )
}

export default Landingpage;
