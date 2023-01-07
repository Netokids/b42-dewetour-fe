import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api.js";
import { useQuery, useMutation } from "react-query";

const Addtrip = () => {
    const navigate = useNavigate();
    let { data: trip } = useQuery("trip1Cache", async () => {
        const response = await API.get("/trip");
        return response.data.data;
    });
    return (
        <div style={{
            marginTop: '50px',
        }}>
            <div className="d-flex" style={{
                width: '85%',
                margin: 'auto',
            }}>
                <div className="p-2 w-100">
                    <h1>Incoming Trip</h1>
                </div>
                <div className="p-2 flex-shrink-1">
                    <Button onClick={() => navigate(`/formaddtrip`)} variant="warning" style={{ width: '100px' }}>
                        Add Trip
                    </Button>
                </div>
                <div className="p-2 flex-shrink-1">
                    <Button onClick={() => navigate(`/formcountry`)} variant="warning" style={{ width: '100px' }}>
                        Add Country
                    </Button>
                </div>
            </div>
            <div className="d-flex align-content-around flex-wrap" style={{
                marginLeft: '95px',
            }}>
                {trip?.map((item) => (
                    <>

                        <Card style={{
                            margin: '20px',
                            width: '350px',
                            height: '450px'
                        }}>
                            <div className='page' style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                width: '70px',
                                height: '30px',
                                lineHeight: '30px',
                                backgroundColor: 'white',
                                borderRadius: '5px',
                                textAlign: 'center',
                            }}>
                                <p>{item.kuota}</p>
                            </div>
                            <Card.Img variant="top" src={item.image} style={{
                            height: '241px',
                            margin: 'auto',
                            padding: '10px',
                        }}  />
                            <Card.Body>
                                <Card.Title style={{
                                    fontFamily: 'avenir',
                                    fontWeight: '500',
                                    fontSize: '24px',
                                    height: '33px',
                                    textAlign: 'start'
                                }}>{item.title}</Card.Title>

                                <div className="d-flex mb-3" style={{
                                    margin: '0'
                                }}>
                                    <div className="p-2" style={{
                                        color: '#FFAF00',
                                        fontFamily: 'avenir',
                                        fontWeight: '900',
                                        fontSize: '18px',
                                    }}>IDR {(item.price).toLocaleString()}</div>

                                    <div className="ms-auto p-2" style={{
                                        color: '#878787',
                                        fontFamily: 'avenir',
                                        fontWeight: '800',
                                        fontSize: '18px',
                                    }}>
                                        {item.country.name_country}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                    </>
                ))}

            </div>
        </div>
    )
}

export default Addtrip