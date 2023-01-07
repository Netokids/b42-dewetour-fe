import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Gambar2 from '../assets/img/detail2.png';
import Gambar3 from '../assets/img/detail3.png';
import Gambar4 from '../assets/img/detail4.png';
import Gambar5 from '../assets/img/hotel.png';
import Gambar6 from '../assets/img/plane.png';
import Gambar7 from '../assets/img/meal1.png';
import Gambar8 from '../assets/img/time1.png';
import Gambar9 from '../assets/img/calendar1.png';
import Gambar10 from '../assets/img/Plus.png';
import Gambar11 from '../assets/img/Minus.png';

import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { API } from "../config/api.js";
import { useQuery, useMutation } from "react-query";

const Detail = () => {


    useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        //change this according to your client-key
        const myMidtransClientKey = "SB-Mid-client-hm0XAws-G5P8gy3-";

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);


    const navigate = useNavigate();
    let { id } = useParams();
    const [total, setTotal] = useState(0)

    function Tambah() {
        setTotal(total + 1)
        if (total === tripdetail?.kuota) {
            setTotal(tripdetail?.kuota)
            alert('Kuota Habis')
        }else if (tripdetail.kuota == 0) {
            setTotal(tripdetail?.kuota)
        }
    }

    function Kurang() {
        if (total > 0)
            setTotal(total - 1)

        return setTotal
    }

    const handleBuy = useMutation(async (trip) => {
        const data = {
            counter_qty: total,
            total: total * trip.price,
            trip_id: trip.id,
        }
        // Configuration
        const config = {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-type": "multipart/form-data",
            },
        };

        const formData = new FormData();
        formData.append("counter_qty", data.counter_qty);
        formData.append("total", data.total);
        formData.append("trip_id", data.trip_id);

        const response = await API.post("/transaksi", formData, config);
        const token = response.data.data.token;

        window.snap.pay(token, {
            onSuccess: function (result) {
                console.log(result);
                alert("payment success");
                navigate("/profile");
                window.location.reload();
            },
            onPending: function (result) {
                console.log(result);
                alert("payment pending");
                localStorage.setItem("token_snap", result.token);
                navigate("/booknow");
                window.location.reload();
            },
            onError: function (result) {
            },
            onClose: function (result) {
                alert("you closed the popup without finishing the payment");
                navigate("/booknow");
                localStorage.setItem("token_snap", result.token);
                window.location.reload();
            },
        });
    })



    //get data from database by id
    let { data: tripdetail } = useQuery("tripCachedetail", async () => {
        const response = await API.get(`/trip/${id}`);
        console.log(response);
        return response.data.data;
    });


    return (
        <>
            <div style={{
                width: '78%',
                height: '100%',
                margin: 'auto',
            }}>
                <h1 style={{
                    fontFamily: 'avenir',
                    fontWeight: '900',
                    fontSize: '48px',
                    height: '66px',
                    marginLeft: '20px',
                }}>
                    {tripdetail?.title}
                </h1>
                <p style={{
                    fontFamily: 'avenir',
                    fontWeight: '800',
                    fontSize: '24px',
                    height: '33px',
                    color: '#A8A8A8',
                    marginLeft: '20px',
                }}>
                    {tripdetail?.country.name}
                </p>
                <Container>
                    <Row>
                        <Col><img alt="" src={tripdetail?.image} style={{
                            width: '1018px',
                            height: '361.16px',

                        }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm style={{
                            width: '100%',
                            backdropColor: 'red',
                        }}>
                            <img alt="" src={Gambar2} style={{
                                width: '329.73px',
                                height: '167.64px',
                                backgroundSize: 'cover',
                                marginTop: '10px',
                                marginRight: '10px',

                            }} />

                            <img alt="" src={Gambar3} style={{
                                width: '329.73px',
                                height: '167.64px',
                                backgroundSize: 'cover',
                                marginTop: '10px',
                                marginRight: '10px',
                            }} />

                            <img alt="" src={Gambar4} style={{
                                width: '329.73px',
                                height: '167.64px',
                                backgroundSize: 'cover',
                                marginTop: '10px',
                            }} />
                        </Col>
                    </Row>
                </Container>
                <h1 style={{
                    fontFamily: 'avenir',
                    fontWeight: '900',
                    fontSize: '18px',
                    height: '25px',
                    marginLeft: '10px',
                    marginTop: '40px',
                }}>
                    Information Trip
                </h1>
                <Container>
                    <Row xs={2} md={4} lg={6}>
                        <Col style={{
                            width: '20%',
                        }}>
                            <p style={{
                                fontFamily: 'avenir',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#A8A8A8',

                            }}>
                                Accommodation
                            </p>
                            <div>
                                <img alt="" src={Gambar5} style={{
                                    marginRight: '10px',
                                    marginTop: '-10px',
                                }} />{tripdetail?.accomodation}
                            </div>
                        </Col>
                        <Col style={{
                            width: '20%',
                        }}>
                            <p style={{
                                fontFamily: 'avenir',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#A8A8A8',
                            }}>
                                Transportation
                            </p>
                            <div>
                                <img alt="" src={Gambar6} style={{
                                    marginRight: '10px',
                                    marginTop: '-10px',
                                }} />{tripdetail?.transport}
                            </div>
                        </Col>
                        <Col style={{
                            width: '20%',
                        }}>
                            <p style={{
                                fontFamily: 'avenir',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#A8A8A8',
                            }}>
                                Eat
                            </p>
                            <div>
                                <img alt="" src={Gambar7} style={{
                                    marginRight: '10px',
                                    marginTop: '-10px',
                                }} />
                                {tripdetail?.eat}
                            </div>
                        </Col>
                        <Col style={{
                            width: '20%',
                        }}>
                            <p style={{
                                fontFamily: 'avenir',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#A8A8A8',
                            }}>
                                Duration
                            </p>
                            <div>
                                <img alt="" src={Gambar8} style={{
                                    marginRight: '6px',
                                    marginTop: '-10px',
                                }} />{tripdetail?.day} Days {tripdetail?.night} Night
                            </div>
                        </Col>
                        <Col sty>
                            <p style={{
                                fontFamily: 'avenir',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#A8A8A8',
                            }}>
                                Date Trip
                            </p>
                            <div>
                                <img alt="" src={Gambar9} style={{
                                    marginRight: '10px',
                                    marginTop: '-10px',
                                }} />{tripdetail?.date}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <h1 style={{
                    fontFamily: 'avenir',
                    fontWeight: '800',
                    fontSize: '18px',
                    height: '25px',
                    marginTop: '40px',
                }}>
                    Description
                </h1>
                <p style={{
                    fontFamily: 'avenir',
                    fontWeight: '900',
                    fontSize: '14px',
                    height: '19px',
                    textAlign: 'justify',
                    color: '#A8A8A8',
                }}>
                    {tripdetail?.description}
                </p>
                <div className="d-flex mb-3" style={{
                    marginTop: '70px',
                }}>
                    <div className="p-2">
                        <p style={{
                            fontFamily: 'avenir',
                            fontWeight: '900',
                            fontSize: '24px',
                            height: '33px',
                            textAlign: 'justify',
                            color: '#FFAF00',
                            marginTop: '10px',
                        }}>
                            IDR . {tripdetail?.price.toLocaleString()}
                        </p>
                    </div>
                    <div className="p-2">
                        <p style={{
                            fontFamily: 'avenir',
                            fontWeight: '900',
                            fontSize: '24px',
                            height: '33px',
                            textAlign: 'justify',
                            color: '#000000',
                            marginTop: '10px',
                        }}>
                            / Person
                        </p>
                    </div>
                    <div className="ms-auto p-2" style={{
                        marginTop: '10px',
                    }}>
                        <button onClick={Kurang} style={{
                            border: 'none',
                            backgroundColor: 'white',
                            marginLeft: '23px',
                        }}>
                            <img alt="" src={Gambar11} style={{
                                width: '26.61px',
                                height: '26.61px',
                                marginRight: '20px',
                            }} />
                        </button>
                        {total}
                        <button style={{
                            border: 'none',
                            backgroundColor: 'white',
                        }} onClick={Tambah}>
                            <img alt="" src={Gambar10} style={{
                                width: '26.61px',
                                height: '26.61px',
                                marginLeft: '20px',
                            }} />
                        </button>

                    </div>
                </div>
                <hr></hr>
                <div className="d-flex mb-3" style={{
                    marginTop: '10px',
                }}>
                    <div className="p-2">
                        <p style={{
                            fontFamily: 'avenir',
                            fontWeight: '900',
                            fontSize: '24px',
                            height: '33px',
                            textAlign: 'justify',
                            color: '#000000',
                        }}>
                            Total :
                        </p>
                    </div>
                    <div className="ms-auto p-2" style={{
                    }}>
                        <div className="p-2">
                            <p style={{
                                fontFamily: 'avenir',
                                fontWeight: '900',
                                fontSize: '24px',
                                height: '33px',
                                textAlign: 'justify',
                                color: '#FFAF00',

                            }}>
                                IDR. {(tripdetail?.price * total).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className='d-flex justify-content-end'>
                    <button onClick={() => handleBuy.mutate(tripdetail)} style={{
                        width: '200px',
                        height: '50px',
                        backgroundColor: '#FFAF00',
                        border: 'none',
                        borderRadius: '10px',
                        color: 'white',
                        fontFamily: 'avenir',
                        fontWeight: '900',
                        fontSize: '18px',
                        marginBottom: '20px',
                    }}>
                        Book Now
                    </button>
                </div>

            </div>
        </>
    )
}

export default Detail