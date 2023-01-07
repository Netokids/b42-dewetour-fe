import React from "react";
import { Table } from "react-bootstrap";
import Cari from '../assets/img/search.png'
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Logo from "../assets/img/Icon.png"
import Invoice from "../assets/img/invoice.png"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import { API, setAuthToken } from "../config/api";

//handle for change status

const handleAccept = () => {

    alert("Accept")
}

const handleReject = () => {
    alert("Reject")
}


const Incoming = () => {

    let { data: transaksi } = useQuery("transaksiCache", async () => {
        const response = await API.get("/transaksi");
        console.log(response)
        return response.data.data;
    });


    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                marginTop: '20px',
                marginBottom: '20px'
            }}>Incoming Transction</h1>
            <Table striped style={{
                width: '60%',
                margin: 'auto',
                marginBottom: '20px'
            }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Users</th>
                        <th>Trip</th>
                        <th>Total Harga</th>
                        <th>Status Payment</th>
                    </tr>
                </thead>
                {transaksi?.map((item) => (
                    <tbody>
                        <tr>
                            <td>{item?.id}</td>
                            <td>{item?.user.fullname}</td>
                            <td>{item?.trip.country.name_country}</td>
                            <td>IDR. {item?.total.toLocaleString()}</td>
                            <td>
                                {item?.status === "success" ? <><p style={{
                                    color: 'green'
                                }}>{item?.status}</p></> : <>{item?.status === 'failed' ? <><p style={{
                                    color: 'red'
                                }}>{item?.status}</p></> : <>{item?.status === 'pending'} <p style={{
                                    color: 'orange'
                                }}>{item?.status}</p> </>}</>}
                                
                            </td>
                        </tr>
                    </tbody>
                ))}


            </Table>
        </div>
    )

}

export default Incoming