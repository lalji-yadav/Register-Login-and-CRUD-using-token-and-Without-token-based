import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';

const Register = () => {

    const [values, setValues] = useState({
        name:'',
        mobile:'',
        email:'',
        password:''
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
                    <Form.Control type="text" placeholder="Enter name"
                    name="name"
                    onChange={values.name}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile"
                    name="mobile"
                    onChange={values.mobile}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                    name="email"
                    onChange={values.email}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    name="password"
                    onChange={values.password}
                     />
                </Form.Group>
               
               
            </Form>

            <Button type="button" className="btn btn-primary" onClick={changeHandler} > Register </Button>  
        </div>
    );
};

export default Register;
