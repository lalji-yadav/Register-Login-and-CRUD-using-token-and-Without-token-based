import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';

const Login = () => {

    const [values, setValues] = useState({
        email:'',
        password: ''
    })

    // const changeHandler=(e)=>{
    //     setValues({[e.target.name]: e.target.value})
        
    // }

    const changeHandler = (event) => {
        setValues((a) => ({
            ...a,
          [event.target.name]: event.target.value
        }));
      };

    return (
        <div style={{padding:"10%"}}>
            <h1> Login Form </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={values.email}
                     placeholder="Enter email"
                     onChange={changeHandler}
                      />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={values.password}
                     placeholder="Password"
                     onChange={changeHandler}
                      />
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
