import React from 'react';
import {Form,Button} from 'react-bootstrap';

const Register = () => {

    const [values, setValues] = useState({
        email:'',
        password: ''
    })

    const changeHandler = (event) => {
        setValues((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };

    return (
        <div style={{padding:"10%"}}>
           <h1> Register Form </h1>
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

            <Button type="button" className="btn btn-primary">Primary</Button>  
        </div>
    );
};

export default Register;
