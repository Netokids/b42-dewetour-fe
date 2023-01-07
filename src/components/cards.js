import React from "react";
import "../style/home.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Gambar1 from "../assets/img/Guarantee.svg";
import Gambar2 from "../assets/img/Heart.svg";
import Gambar3 from "../assets/img/Vector.svg";
import Gambar4 from "../assets/img/Vector1.svg"
import Kanan from   "../assets/img/kanan.png"

const Card1 = () => {
    return (
        <div className="card1">
            <div className='d-flex justify-content-end'>
            <img src={Kanan} alt= "" style={{
                position : 'absolute',
                marginTop : '40px'
            }}/>
            </div>
            
            <Container className="contain">
                <Row md={4}>
                    <Col>
                        <Card style={{ width: '250px' }}>
                            <Card.Img className="forimg" variant="top" src={Gambar1} style={{ width: '70px', height: '70px', margin: 'auto', marginTop: '30px' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center', fontFamily: 'avenir', fontWeight: '800', fontSize: '24px', fontStyle: 'normal' }}>
                                    Best Price Guarantee
                                </Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontFamily: 'avenir', fontWeight: '400', fontSize: '18px', fontStyle: 'normal', color: '#878787', height:'66px' }}>
                                    A small river named Duren flows by their place and supplies.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>
                        <Card className="forcard" style={{ width: '250px' }}>
                            <Card.Img variant="top" src={Gambar2} style={{ width: '70px', height: '70px', margin: 'auto', marginTop: '30px' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center', fontFamily: 'avenir', fontWeight: '800', fontSize: '24px', fontStyle: 'normal', height:'46px'}}>
                                Travellers Love Us
                                </Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontFamily: 'avenir', fontWeight: '400', fontSize: '18px', fontStyle: 'normal', color: '#878787' }}>
                                    A small river named Duren flows by their place and supplies.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="forcard" style={{ width: '250px' }}>
                            <Card.Img variant="top" src={Gambar3} style={{ width: '70px', height: '70px', margin: 'auto', marginTop: '30px' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center', fontFamily: 'avenir', fontWeight: '800', fontSize: '24px', fontStyle: 'normal', height:'46px'}}>
                                Best Travel Agent
                                </Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontFamily: 'avenir', fontWeight: '400', fontSize: '18px', fontStyle: 'normal', color: '#878787' }}>
                                A small river named Duren flows by their place and supplies.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>
                        <Card className="forcard" style={{ width: '250px' }}>
                            <Card.Img variant="top" src={Gambar4} style={{ width: '70px', height: '70px', margin: 'auto', marginTop: '30px' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center', fontFamily: 'avenir', fontWeight: '800', fontSize: '24px', fontStyle: 'normal' }}>
                                Our Dedicated Support
                                </Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontFamily: 'avenir', fontWeight: '400', fontSize: '18px', fontStyle: 'normal', color: '#878787' }}>
                                A small river named Duren flows by their place and supplies.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Card1;