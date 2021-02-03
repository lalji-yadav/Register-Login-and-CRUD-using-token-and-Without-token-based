import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from "axios";

const Login = () => {

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

    const onLogin=()=> {
       // event.preventDefault();
        // console.log(values);
        // alert(`${values.email}`)
        axios.post('http://localhost:3000/user/login',
         {email:values.email, password:values.password})
         .then((res)=> {
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        }) 
    }

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

            <Button type="button" onClick={onLogin} className="btn btn-primary">Login</Button> <br /> <br />
            <Button type="button" varient="light">Go to Register</Button>
        </div>
    );
};

export default Login;
