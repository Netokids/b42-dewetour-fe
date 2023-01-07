import React from "react";
import Name from '../assets/img/name.png';
import Office from '../assets/img/office.png';
import Phone from '../assets/img/phone.png';
import Place from '../assets/img/place.png';
import Aku from '../assets/img/saya.png';
import Button from 'react-bootstrap/Button';
import Logo from "../assets/img/Icon.png"
import QR from "../assets/img/qr.png"
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { API, setAuthToken } from "../config/api";
import { useParams } from "react-router-dom";


const Profile = () => {
    const { id } = useParams();

    const { data: transaksi1 } = useQuery("transaksi1Cache", async () => {
        const response = await API.get(`/transaksi`);
        console.log(response);
        return response.data.data;
    });

    const { data: profileuser } = useQuery("profileuserCache", async () => {
        const response = await API.get(`/users`);
        console.log(response);
        return response.data.data;
    });

    return (
        <>
            <div style={{
                width: '785px',
                height: '453px',
                margin: 'auto',
                marginTop: '50px',
                marginBottom: '50px'
            }}>
                {profileuser?.map((item) => {
                    if (item.id == id) {
                        return (
                            <div className="d-flex bg-light mb-3">
                                <div className="p-2" style={{
                                    width: '60%',
                                    height: 'auto',
                                    margin: '30px'
                                }}>

                                    <h1 style={{
                                        fontFamily: 'avenir',
                                        fontWeight: '900',
                                        fontSize: '36px',
                                        height: '24px',
                                        margin: '10px'
                                    }}>
                                        Personal Info
                                    </h1>
                                    <div className="d-flex" style={{
                                        marginTop: '50px'
                                    }}>

                                        <div className="p-2 w-40" styl>
                                            <img src={Name} alt=''></img>
                                        </div>
                                        <div className="p-2 flex-shrink-1">
                                            <h3 style={{
                                                fontFamily: 'avenir',
                                                fontWeight: '500',
                                                fontSize: '14px',
                                                height: '20px',
                                            }}>{item?.fullname}</h3>
                                            <h3 style={{
                                                fontFamily: 'avenir',
                                                fontWeight: '500',
                                                fontSize: '12px',
                                                height: '16px',
                                                color: '#8A8C90'
                                            }}>
                                                Fullnama
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="p-2 w-40">
                                            <img src={Office} alt=''></img>
                                        </div>

                                        <div className="p-2 flex-shrink-1">
                                            <h3 style={{
                                                fontFamily: 'avenir',
                                                fontWeight: '500',
                                                fontSize: '14px',
                                                height: '20px',
                                            }}>{item?.email}</h3>
                                            <h3 style={{
                                                fontFamily: 'avenir',
                                                fontWeight: '500',
                                                fontSize: '12px',
                                                height: '16px',
                                                color: '#8A8C90'
                                            }}>
                                                Mail
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="p-2 w-40">
                                            <img src={Phone} alt=''></img>
                                        </div>
                                        <div className="p-2 flex-shrink-1">
                                            <h3 style={{
                                                fontFamily: 'avenir',
                                                fontWeight: '500',
                                                fontSize: '14px',
                                                height: '20px',
                                            }}>{item?.phone}</h3>
                                            <h3 style={{
                                                fontFamily: 'avenir',
                                                fontWeight: '500',
                                                fontSize: '12px',
                                                height: '16px',
                                                color: '#8A8C90'
                                            }}>
                                                Phone
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="p-2 w-40">
                                            <img src={Place} alt=''></img>
                                        </div>
                                        <div className="p-2 flex-shrink-1">
                                            <h3 style={{
                                                fontFamily: 'avenir',
                                                fontWeight: '500',
                                                fontSize: '14px',
                                                height: '20px',
                                            }}>{item?.address}</h3>
                                            <h3 style={{
                                                fontFamily: 'avenir',
                                                fontWeight: '500',
                                                fontSize: '12px',
                                                height: '16px',
                                                color: '#8A8C90'
                                            }}>
                                                Address
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2" style={{
                                    width: '40%',
                                    margin: '20px'
                                }}>
                                    <img src={Aku} alt='' style={{
                                        width: '100%'
                                    }}></img>
                                    <Button variant="warning" style={{
                                        width: '100%',
                                        marginTop: '20px'
                                    }}>Aku Ganteng Jangan Dirubah</Button>
                                </div>
                            </div>
                        )
                    }
                })}

            </div>
            {transaksi1?.map((transaksi1) => {
                return (
                    <>
                        {localStorage.getItem("fullname") == transaksi1.user.fullname ? <>
                            <div style={{
                                backgroundColor: 'white',
                                width: '1035px',
                                height: '500px',
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
                                                    {transaksi1.trip.day} Days {transaksi1.trip.night} Nights
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
                                                    {transaksi1.trip.transport}
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
                                                    {transaksi1.trip.date}
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
                                                    {transaksi1.trip.accomodation}
                                                </p>
                                            </div>
                                            <div className="order-1 p-2">
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '900',
                                                    fontSize: '24px',
                                                    height: '33px',
                                                }}>
                                                    {transaksi1.trip.title}
                                                </p>
                                                <p style={{
                                                    fontFamily: 'avenir',
                                                    fontWeight: '400',
                                                    fontSize: '14px',
                                                    height: '19px',
                                                    color: '#959595'
                                                }}>
                                                    {transaksi1.trip.country.name_country}
                                                </p>

                                                {transaksi1.status === 'success' ?
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
                                                        {transaksi1.status}

                                                    </p> : transaksi1.status === 'failed' ? <p style={{
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
                                                        {transaksi1.status}

                                                    </p> : transaksi1.status === 'pending' ? <>
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
                                                            {transaksi1.status}

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
                                            <td>{transaksi1.user.fullname}</td>
                                            <td>{transaksi1.user.gender}</td>
                                            <td>{transaksi1.user.phone}</td>
                                            <td>QTY</td>
                                            <td>: {transaksi1.counterqty}</td>
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
                                            }}>: IDR {transaksi1.total.toLocaleString()}</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </div>
                        </> : null}
                    </>
                )
            })}





        </>
    )
}

export default Profile

