import React, { useEffect } from 'react';
import "../style/home.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("role") === "admin" && navigate("/incoming")
  }, [])
  return (
    <div className="home">
      <h1 className="Explore">Explore</h1>
      <h1 className="Explore2">Your Amazing City Together</h1>
      <h5 className="Explore3">find great places holiday</h5>
      <InputGroup className="testing">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className="button1" variant="warning" id="button-addon2" >
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

export default Home;