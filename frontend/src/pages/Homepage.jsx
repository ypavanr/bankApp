import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';


function Homepage() {
  return (
    <div>
      <p>Welcome to my Bank Application</p>
      <div>
      <Form action='/signup' method='POST'>
          <Form.Group>
            <Form.Control type='submit' value='Register' />
          </Form.Group>
        </Form>
        <Form action='/signin' method='POST'>
          <Form.Group>
            <Form.Control type='submit' value='Log In' />
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default Homepage
