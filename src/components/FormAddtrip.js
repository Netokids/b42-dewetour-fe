import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import dropdown from "../assets/img/dropdown.png";
import attache from "../assets/img/attach.png";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../style/formaddtrip.css'
import { useMutation } from "react-query";
import { API, setAuthToken } from "../config/api";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const FormAddtrip = () => {
    const navigate = useNavigate();
    const [trip, settrip] = useState({
        title: '',
        country_id: '',
        accomodation: '',
        transport: '',
        eat: '',
        day : '',
        night: '',
        date: '',
        description: '',
        kuota: '',
        price: '',
        image: ''
    })
    const handleChange = (e) => {
        settrip({
            ...trip, [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value
        })
    }

    let { data: country } = useQuery("countryCache", async () => {
        const response = await API.get("/country");
        return response.data.data;
    });

    const handlesubmitrip = useMutation(async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            };

            const formData = new FormData();
            formData.append('title', trip.title);
            formData.append('country_id', trip.country_id);
            formData.append('accomodation', trip.accomodation);
            formData.append('transport', trip.transport);
            formData.append('eat', trip.eat);
            formData.append('day', trip.day);
            formData.append('night', trip.night);
            formData.append('date', trip.date)
            formData.append('description', trip.description);
            formData.append('price', trip.price);
            formData.append('kuota', trip.kuota);
            formData.append('image', trip.image[0]);

            const response = await API.post('/trip', formData, config);

            if(trip.title === '' || trip.country_id === '' || trip.accomodation === '' || trip.transport === '' || trip.eat === '' || trip.day === '' || trip.night === '' || trip.date === '' || trip.description === '' || trip.price === '' || trip.kuota === '' || trip.image === ''){
                alert('Please fill all the form')
            }else{
                alert('Success add trip')
                navigate('/addtrip')
            }
        } catch (err) {
            console.log(err)
        }
    })
    return (
        <>
            <div className="add-trip-container">
                <h2 className="add-trip-title">Add Trip</h2>
                <Form className='form-add-trip' onSubmit={(e) => handlesubmitrip.mutate(e)}>
                    <Form.Group className="form-group" >
                        <Form.Label>Title Trip</Form.Label>
                        <Form.Control className="form-input" type="text" name="title" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group form-dropdown" controlId="formBasicPassword">
                        <Form.Label>Country</Form.Label>
                        <img src={dropdown} alt="" className="dropdown" />
                        <Form.Select aria-label="Default select example" className="form-input" name="country_id" onChange={handleChange}>
                            <option>Choose Country</option>
                            {country?.map((country) => (
                                <option value={country.id}>{country.name_country}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Accomodation</Form.Label>
                        <Form.Control className="form-input" type="text" name="accomodation" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Transportation</Form.Label>
                        <Form.Control className="form-input" type="text" name="transport" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Eat</Form.Label>
                        <Form.Control className="form-input" type="text" name="eat" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Duration</Form.Label>
                        <div className="duration">
                            <Form.Control className="form-input day" type="day" name="day" onChange={handleChange} />
                            <Form.Label className="label-day">Day</Form.Label>
                            <Form.Control className="form-input night" type="night" name="night" onChange={handleChange} />
                            <Form.Label className="label-night">Night</Form.Label>
                        </div>
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Date Trip</Form.Label>
                        <Form.Control className="form-input" type="date" name="date" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control className="form-input" type="text" name="price" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Quota</Form.Label>
                        <Form.Control className="form-input" type="text" name="kuota" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Description</Form.Label>
                        <FloatingLabel controlId="floatingTextarea2">
                            <Form.Control as="textarea" className="form-input" style={{ height: '100px' }} name="description" onChange={handleChange} />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="form-group" >
                        <Form.Label>Image</Form.Label>
                        <div class="img-upload">
                            <label for="image" class="form-input">
                                <p>Attache Here</p>
                                <img src={attache} alt="" />
                            </label>
                            <Form.Control className="form-input" type="file" id="image" name="image" onChange={handleChange} />
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='button-add-trip'>Add trip</Button>
                </Form>
            </div>
        </>
    );
}

export default FormAddtrip; 
