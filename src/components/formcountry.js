import React from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "react-query";
import { API, setAuthToken } from "../config/api";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";



const FormCountry = () => {
    const navigate = useNavigate();
    const [country, setcountry] = useState({
        country_name: ''
    })
    const handleChange = (e) => {
        setcountry({
            ...country, [e.target.name]: e.target.value
        })
    }

    const handlesubmitcountry = useMutation(async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };
            const formData = new FormData();
            formData.append('country_name', country.country_name);

            const response = await API.post('/country', formData, config);
            console.log(response)
            navigate('/addtrip')
        } catch (error) {
            console.log(error)
        }
    })
    
  return (
    <div>
         <div className="add-trip-container">
                <h2 className="add-trip-title">Add Country</h2>
                <Form className='form-add-trip' onSubmit={(e) => handlesubmitcountry.mutate(e)}>
                    <Form.Group className="form-group" >
                        <Form.Label>Country Name</Form.Label>
                        <Form.Control className="form-input" type="text" name="country_name" onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='button-add-trip'>Add Country</Button>
                </Form>
            </div>
    </div>
  );
}

export default FormCountry;