import React from 'react';
import {Form,Button} from 'react-bootstrap';

const Reg = () => {
    return (
        <div style={{padding:"10%"}}>
           <h1> CRUD Form </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
               
               
            </Form>

            <Button type="button" class="btn btn-primary">Primary</Button>  
        </div>
    );
};

export default Reg;
