import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';

export const Login = () => {
  return (
    <div>
        <h1 className='form-title'>LOG IN</h1>
        <section className='login'>
        <form className='register-form' id="register-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='ab'>Email address</Form.Label>
                    <Form.Control className="" type="email" placeholder="Enter email" />
                    <Form.Text className='form-text'>
                    We'll never share your email with anyone else.
                    </Form.Text><p></p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='ab'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p></p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group><p></p>
                <Button variant="primary" type="submit" size="lg">
                    Submit
                </Button>
            </form>
        </section>
    </div>
  )
}
