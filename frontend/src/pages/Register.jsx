import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        accountNo: '',
        email: '',
        password: '',
        phone: '',
        birthdate: '',
        accountType: ''
    });

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
            const response = await axios.post('http://localhost:3000/register', formData);

            if (response.status === 200) {
                console.log(response.data);
            } else {
                alert('Registration failed: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <p>REGISTER PAGE</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="accountNo">
                    <Form.Label>Account Number:</Form.Label>
                    <Form.Control
                        type="number"
                        name="accountNo"
                        value={formData.accountNo}
                        onChange={handleChange}
                        placeholder="Enter your account no."
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="789][0-9]{9}"
                        placeholder="+91 123-456-7890"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="birthdate">
                    <Form.Label>Birth Date:</Form.Label>
                    <Form.Control
                        type="date"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="accountType">
                    <Form.Label>Account Type:</Form.Label>
                    <Form.Select
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleChange}
                        required>
                             <option value="" disabled>
            -- Choose your Account Type --
          </option>
          <option value="savings">savings</option>
          <option value="current">current</option>
        </Form.Select>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Register;
