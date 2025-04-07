import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [accessToken, setAccessToken] = useState(null); // Store token in memory

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
                const { token } = response.data; // Assuming the response contains a `token`
                setAccessToken(token); // Store token in memory
                console.log('Login successful:', response.data);
                alert('Login successful!');
            } else {
                alert('Login failed: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div>
            <p>LOGIN PAGE</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Control 
                        type='email' 
                        name='email' 
                        id='email' 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Enter your email" 
                        required 
                    />
                    <Form.Label htmlFor='password'>Password:</Form.Label>
                    <Form.Control 
                        type='password' 
                        name='password' 
                        id='password' 
                        value={formData.password} 
                        onChange={handleChange} 
                        placeholder="Enter your password" 
                        required 
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
            {accessToken && <p>Token stored in memory!</p>}
        </div>
    );
}

export default Login;
