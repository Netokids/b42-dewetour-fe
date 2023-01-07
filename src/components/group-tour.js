import React from "react";
import { Card } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import Kiri from '../assets/img/kiri.png';
import { API } from "../config/api.js";
import { useQuery, useMutation } from "react-query";


const Group = () => {
    const navigate = useNavigate();

    let{ data: trip } = useQuery("tripCache", async () => {
        const response = await API.get("/trip");
        return response.data.data;
    });
    
    return (
        <>
        <img src={Kiri} alt="" style={{
            position : 'absolute',

        }}/>
        
        <div style={{
            width: '100%',
            textAlign: 'center',
            marginTop: '50px',
        }}>
            <h1>Group Tour</h1>
            
            <div className="d-flex align-content-around flex-wrap" style={{
                marginLeft: '95px',
            }}>
                {trip?.map((item) => (
                <> 
                    
                    <Card style={{
                        margin: '20px',
                        width: '350px',
                        height: '350px'
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
                       }}>
                    <p>{item.kuota}</p>
                </div>
                        <Card.Img variant="top" src={item.image} onClick={()=>navigate(`detail/${item.id}`)}  style={{
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
        </>
    );
}

export default Group