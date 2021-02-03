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
    
    const onRegister=()=> {
        alert(values)
    }  

    return (
        <div style={{padding:"10%"}}>
           <h1> Register Form </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                    name="name"
                    value={values.name}
                    onChange={changeHandler}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile"
                     name="mobile"
                     value={values.mobile}
                    onChange={changeHandler}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                     />
                </Form.Group>
               
               
            </Form>

            <Button type="button" className="btn btn-primary" onClick={onRegister} > Register </Button>  
        </div>
    );
};

export default Register;
