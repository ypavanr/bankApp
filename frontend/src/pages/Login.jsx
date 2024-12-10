import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
function Login(){
    return (
        <div>
           <p>LOGIN PAGE</p>
           <Form.Group action='/profile/:name' method='POST'>
              <Form.Label for='Email'>Email:</Form.Label>
              <Form.Control type='email' name='email' id='email' required/>
              <Form.Label for='password'>password:</Form.Label>
              <Form.Control type='password' name='password' id='password' required/>
              <Button variant="primary" type="submit">
                submit
              </Button>
           </Form.Group>
        </div>
    )
}
export default Login