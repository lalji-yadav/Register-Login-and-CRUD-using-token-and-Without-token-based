import React from 'react';
import {Form,Button} from 'react-bootstrap';

const Login = () => {
    return (
        <div style={{padding:"10%"}}>
            <h1> Login Form </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                </Form>

            <Button type="button" className="btn btn-primary">Primary</Button>
        </div>
    );
};

export default Login;
