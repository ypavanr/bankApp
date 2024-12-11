import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
function Login(){
    const[formData,setFormData]=useState({
        email:'',
        password:''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', formData);

            if (response.status === 200) {
                console.log(response.data);
            } else {
                alert('login failed: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert(error.response.data.message);
        }
    };
    return (
        <div>
           <p>LOGIN PAGE</p>
           <Form onSubmit={handleSubmit}>
           <Form.Group >
              <Form.Label for='Email'>Email:</Form.Label>
              <Form.Control type='email' name='email' id='email' value={formData.email} onChange={handleChange} placeholder="Enter your email"required/>
              <Form.Label for='password'>password:</Form.Label>
              <Form.Control type='password' name='password' id='password' value={formData.password} onChange={handleChange} placeholder="Enter your password" required/>
              <Button variant="primary" type="submit">
                submit
              </Button>
           </Form.Group>
           </Form>
        </div>
    )
}
export default Login