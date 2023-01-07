import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import "../style/appstyle.css"
import logo from "../assets/img/Icon.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Akuu from '../assets/img/akuu.png';
import { Dropdown } from 'react-bootstrap';
import Iconn1 from '../assets/img/iconn1.png';
import Iconn2 from '../assets/img/iconn2.png';
import Iconn3 from '../assets/img/iconn3.png';
import leaf from '../assets/img/leaf2.png';
import leaf2 from '../assets/img/leaf1.png';
import admin from '../assets/img/admin.png';
import { useMutation } from 'react-query';
import { useContext } from 'react';

import { API } from '../config/api';
import { Alert } from 'react-bootstrap';
import { UserContext } from '../context/userContext';
import { useQuery } from 'react-query';


// import Register from './register';


const NavigationBar = () => {
    const navigate = useNavigate();
    function handleRedirect() {
        navigate('/');
    }

    let { data: user1 } = useQuery("user1Cachedetail", async () => {
        const response = await API.get(`/users`);
        console.log(response);
        return response.data.data;
    });

    //Register Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [testForm, setForm] = useState({
        fullname: '',
        email: '',
        password: '',
        gender: '',
        phone: '',
        address: '',
    });

    const handleChange = (e) => {
        setForm({ ...testForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = useMutation(async (e) => {
        
        try {
            e.preventDefault();
            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };

            const body = JSON.stringify(testForm);

            if(testForm.fullname === "" || testForm.email === "" || testForm.password === "" || testForm.phone === "" || testForm.address === ""){
                alert("Please fill all the form")
            }

            const response = await API.post('/register', body, config);
            // Notification
            if (response.data.code === 200) {
                alert("Success")
                navigate("/")
                setShow(false)
                setShow2(true)

                // kosongkan form
                testForm({
                    fullname: '',
                    email: '',
                    password: '',
                    gender : '',
                    phone : '',
                    address : '',
                })
            }
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            console.log(error);
        }
    });



    //Login Modal

    const [formLog, setFormLog] = useState({
        email: '',
        password: '',
    })

    const handleChangeLog = (e) => {
        setFormLog({ ...formLog, [e.target.name]: e.target.value })
    }

    const [state, dispatch] = useContext(UserContext);


    const handleSubmitLog = useMutation(async (e) => {
        try {

            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };

            const body = JSON.stringify(formLog);

            const response = await API.post('/Login', body, config);

            console.log(response)
            

            if (response.data.code === 200) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: response.data.data,
                });
                // if (response.data.data.token === 'admin') {
                //     navigate('/incoming');
                //   } else {
                //     navigate('/');
                //   }
            }
            window.location.reload();
        } catch (error) {
            alert("Login Failed")
            console.log(error)
        }
    })

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT',
        });
        navigate('/');
    };

    return (
        <Navbar className="test">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" className="img1" onClick={handleRedirect} />
                </Navbar.Brand>
                <Navbar.Collapse className="nav justify-content-end" style={{
                    paddingTop: '18px'
                }}>

                    {localStorage.getItem('token') ? <>
                        {localStorage.getItem('role') === 'admin' ? <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}>
                                <img src={Akuu} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => navigate(`/addtrip`)}><img src={Iconn1} style={{
                                    margin: '10px'
                                }}></img>trip</Dropdown.Item>

                                <Dropdown.Item onClick={handleLogout} ><img src={Iconn3} style={{
                                    margin: '10px'
                                }}></img>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> : <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}>
                                <img src={Akuu} />
                            </Dropdown.Toggle>
                            {user1?.map((user) => {
                                {
                                    if (localStorage.getItem('fullname') === user.fullname)
                                        return (<>
                                            <Dropdown.Menu>

                                                <Dropdown.Item onClick={() => navigate(`/profile/${user.id}`)}><img src={Iconn1} style={{
                                                    margin: '10px'
                                                }}></img>Profile</Dropdown.Item>
                                                <Dropdown.Item onClick={() => navigate(`/booknow`)}><img src={Iconn2} style={{
                                                    margin: '10px'
                                                }}></img>Pay</Dropdown.Item>
                                                <hr></hr>
                                                <Dropdown.Item onClick={handleLogout} ><img src={Iconn3} style={{
                                                    margin: '10px'
                                                }}></img>Logout</Dropdown.Item>
                                            </Dropdown.Menu>


                                        </>)
                                }

                            })}
                        </Dropdown>}

                    </>
                        : <>{/* Button Login */}
                            <Button className="Button1" variant="outline-light" onClick={handleShow2} >Login</Button>
                            <Modal show={show2} onHide={handleClose2}>
                                <div className="d-flex justify-content-between">
                                    <img src={leaf} style={{
                                        width: '150px',
                                        width: '150px',
                                    }} />
                                    <img src={leaf2} style={{
                                        width: '80px',
                                        height: '80px',
                                    }} />
                                </div>
                                <Modal.Title style={{
                                    marginTop: '-60px',
                                    textAlign: 'center',
                                    fontFamily: 'Product Sans',
                                    fontWeight: '700',
                                    fontSize: '36px',
                                }}>Login</Modal.Title>

                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                name="email"
                                                onChange={handleChangeLog}
                                                type="email"
                                                required
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                name='password'
                                                onChange={handleChangeLog}
                                                type='password' rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Button variant="warning" onClick={(e) => handleSubmitLog.mutate(e)} style={{
                                    width: '80%',
                                    margin: 'auto',
                                    marginBottom: '20px',
                                }}>
                                    Login
                                </Button>
                                <h1 style={{
                                    textAlign: 'center',
                                    fontFamily: 'avenir',
                                    fontWeight: '400',
                                    fontSize: '18px',
                                    color: '#B1B1B1',
                                }}>Don't have an account? <u style={{
                                    cursor: 'pointer'
                                }} onClick={handleShow}> Click Here</u></h1>
                            </Modal>

                            {/* Button Register */}
                            <Button className="Button2" variant="warning" onClick={handleShow}>Register</Button>
                            <Modal show={show} onHide={handleClose}>
                                <div className="d-flex justify-content-between">
                                    <img src={leaf} style={{
                                        width: '150px',
                                        width: '150px',
                                    }} />
                                    <img src={leaf2} style={{
                                        width: '80px',
                                        height: '80px',
                                    }} />
                                </div>

                                <Modal.Title style={{
                                    marginTop: '-60px',
                                    textAlign: 'center',
                                    fontFamily: 'Product Sans',
                                    fontWeight: '700',
                                    fontSize: '36px',
                                }}>Register</Modal.Title>

                                <Modal.Body>
                                    <Form >
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Fullname</Form.Label>
                                            <Form.Control
                                                name="fullname"
                                                onChange={handleChange}
                                                type="text"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                name="email"
                                                onChange={handleChange}
                                                type="email"
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                onChange={handleChange}
                                                name="password"
                                                type='password' rows={3} 
                                                required    
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control
                                                name='phone'
                                                onChange={handleChange}
                                                type="number"
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control
                                                name='gender'
                                                onChange={handleChange}
                                                type="text"
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                name='address'
                                                onChange={handleChange}
                                                as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Button variant="warning" onClick={(e) => handleSubmit.mutate(e)} style={{
                                    width: '80%',
                                    margin: 'auto',
                                    marginBottom: '20px',
                                }}>
                                    Register
                                </Button>
                            </Modal>
                        </>}


                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavigationBar