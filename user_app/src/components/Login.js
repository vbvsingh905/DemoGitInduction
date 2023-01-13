import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';

export const Login = () => {
  return (
    <div>
        <section className='login'>
        <div className='container-log'>
        <div className='log-content'>
        <div className='logform'>
        <h2 className='form-title'>LOG IN</h2>
            <Form className='register-form' id='register-form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="">Email address</Form.Label>
                    <Form.Control className="" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div></div>
        </section>
    </div>
  )
}
