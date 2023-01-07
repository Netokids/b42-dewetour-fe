import React from "react";

import { useQuery } from "react-query";
import { API, setAuthToken } from "../config/api";
import Logo from "../assets/img/Icon.png"
import QR from "../assets/img/qr.png"
import { Button, Table } from "react-bootstrap";


const Booknow = () => {

    const { data: transaksi2 } = useQuery("transaksi2Cache", async () => {
        const response = await API.get(`/transaksi`);
        console.log(response);
        return response.data.data;
    });

    return (
        <>
            {transaksi2?.map((transaksi2) => {
                return (
                    <>
                        {localStorage.getItem('fullname') === transaksi2.user.fullname ? <>{transaksi2.status === 'pending' ? <>
                            <div style={{
                                backgroundColor: 'white',
                                width: '1035px',
                                height: '530px',
                                margin: 'auto',
                                marginTop: '50px',
                                marginBottom: '50px',
                                borderRadius: '5px',
                                border: '2px solid #000000',
                            }}>
                                <div style={{
                                    height: "200px",
                                    width: "100%",
                                    marginLeft: '10px',
                                    marginTop: '10px',
                                }}>
                                    <div className='d-flex justify-content-start'>
                                        <img alt="" src={Logo} />
                                    </div>
                                    <div className='d-flex justify-content-end' style={{
                                        fontFamily: 'avenir',
                                        fontWeight: '800',
                                        fontSize: '36px',
                                        height: '33px',
                                        color: '#000000',
                                        marginTop: '-60px',
                                        marginRight: '40px',
                                    }}>
                                        Booking
                                    </div>
                                    <div className='d-flex justify-content-end' style={{
                                        fontFamily: 'avenir',
                                        fontWeight: '800',
                                        fontSize: '18px',
                                        height: '25px',
                                        color: '#878787',
                                        marginTop: '20px',
                                        marginRight: '40px',
                                    }}>
                                        Saturday, 22 Juy 2020
                                    </div>
                                </div>
                                <div className="d-flex" style={{
                                    marginTop: '-100px',
                                }}>
                                    <div className="p-2 flex-grow-1">
                                        <div className="d-flex flex-nowrap" style={{
                                            marginLeft: '30px',
                                            marginTop: '7px',
                                            marginBottom: '7px',
                                        }}>
                                            <div className="order-3 p-2" style={{
                                                marginLeft: '100px',
                                                marginTop: '7px',
                                                marginBottom: '7px',
                                            }}>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '800',
                                                    fontSize: '18px',
                                                    height: '25px',
                                                }}>
                                                    Duration
                                                </p>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    height: '19px',
                                                    color: '#959595'
                                                }}>
                                                    {transaksi2.trip.day} Days {transaksi2.trip.night} Nights
                                                </p>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '800',
                                                    fontSize: '18px',
                                                    height: '25px',
                                                }}>
                                                    Transporartion
                                                </p>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    height: '19px',
                                                    color: '#959595'
                                                }}>
                                                    {transaksi2.trip.transport}
                                                </p>
                                            </div>
                                            <div className="order-2 p-2" style={{
                                                marginLeft: '100px',
                                                marginTop: '7px',
                                                marginBottom: '7px',
                                            }}>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '800',
                                                    fontSize: '18px',
                                                    height: '25px',
                                                }}>
                                                    Date Trip
                                                </p>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    height: '19px',
                                                    color: '#959595'
                                                }}>
                                                    {transaksi2.trip.date}
                                                </p>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '800',
                                                    fontSize: '18px',
                                                    height: '25px',
                                                }}>
                                                    Accomodation
                                                </p>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    height: '19px',
                                                    color: '#959595'
                                                }}>
                                                    {transaksi2.trip.accomodation}
                                                </p>
                                            </div>
                                            <div className="order-1 p-2">
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '900',
                                                    fontSize: '24px',
                                                    height: '33px',
                                                }}>
                                                    {transaksi2.trip.title}
                                                </p>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    height: '19px',
                                                    color: '#959595'
                                                }}>
                                                    {transaksi2.trip.country.name_country}
                                                </p>

                                                {transaksi2.status === 'success' ?
                                                    <p style={{
                                                        width: '75px',
                                                        height: '1500px',
                                                        fontFamily: 'avenir',
                                                        fontWeight: '500',
                                                        fontSize: '12px',
                                                        height: '16px',
                                                        color: '#FFFFFF',
                                                        backgroundColor: 'green',
                                                        paddingTop: '10px',
                                                        paddingLeft: '20px',
                                                        paddingBottom: '30px',
                                                        borderRadius: '5px',
                                                    }}>
                                                        {transaksi2.status}

                                                    </p> : transaksi2.status === 'failed' ? <p style={{
                                                        width: '75px',
                                                        height: '1500px',
                                                        fontFamily: 'avenir',
                                                        fontWeight: '500',
                                                        fontSize: '12px',
                                                        height: '16px',
                                                        color: '#FFFFFF',
                                                        backgroundColor: 'red',
                                                        paddingTop: '10px',
                                                        paddingLeft: '20px',
                                                        paddingBottom: '30px',
                                                        borderRadius: '5px',
                                                    }}>
                                                        {transaksi2.status}

                                                    </p> : transaksi2.status === 'pending' ? <>
                                                        <p style={{
                                                            width: '80px',
                                                            height: '1500px',
                                                            fontFamily: 'avenir',
                                                            fontWeight: '500',
                                                            fontSize: '12px',
                                                            height: '16px',
                                                            color: '#FFFFFF',
                                                            backgroundColor: 'orange',
                                                            paddingTop: '10px',
                                                            paddingLeft: '20px',
                                                            paddingBottom: '30px',
                                                            borderRadius: '5px',
                                                        }}>
                                                            {transaksi2.status}

                                                        </p></> : null}

                                            </div>

                                        </div>
                                    </div>
                                    <div className="p-2" style={{
                                        marginRight: '30px',
                                    }}>
                                        <img alt="" src={QR} style={{
                                            width: '100px',
                                            margin: '15px'
                                        }} />
                                        <p style={{
                                            fontFamily: 'avenir',
                                            fontWeight: '400',
                                            fontSize: '14px',
                                            height: '19px',
                                            color: '#959595',
                                            marginTop: '10px'
                                        }}>
                                            Upload Payment Proof
                                        </p>
                                    </div>
                                </div>
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Fullnama</th>
                                            <th>Gender</th>
                                            <th>Phone</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>{transaksi2.user.fullname}</td>
                                            <td>{transaksi2.user.gender}</td>
                                            <td>{transaksi2.user.phone}</td>
                                            <td>QTY</td>
                                            <td>: {transaksi2.counterqty}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>Total</td>
                                            <td style={{
                                                color: '#FF0000',
                                            }}>: IDR {transaksi2.total.toLocaleString()}</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className='d-flex justify-content-end' style={{
                                    width: '88%',
                                }}>
                                    <Button variant="btn btn-warning" style={{
                                        width: '100px',
                                        height: '40px',
                                    }}><p style={{
                                        color: '#FFFFFF',
                                    }}>Pay Now</p></Button>
                                </div>
                            </div>
                        </> : null}</> : null}

                    </>
                )
            })}

        </>

    )
}

export default Booknow
