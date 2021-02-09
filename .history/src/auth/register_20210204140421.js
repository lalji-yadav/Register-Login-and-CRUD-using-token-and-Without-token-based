import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
import {Link} from "react-router-dom";
import { useFormik } from "formik";

const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.mobile) {
      errors.mobile = 'Required';
    } else if (values.mobile.length > 20) {
      errors.mobile = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
      }
  
    return errors;
  };

const Register = () => {

    // const [values, setValues] = useState({
    //     name:'',
    //     mobile:'',
    //     email:'',
    //     password:''
    // })

    // const changeHandler = (event) => {
    //     setValues((prevProps) => ({
    //       ...prevProps,
    //       [event.target.name]: event.target.value
    //     }));
    //   };
   const formik = useFormik({
       initialValues:{
        name:'',
        mobile:'',
        email:'',
        password:''  
       },
       validate
   })
    
    const onRegister=()=> {
       axios.post('http://localhost:3000/user',
       {name: formik.values.name, mobile: formik.values.mobile, email: formik.values.email, password: formik.values.password})
       .then((res)=> {
           console.log(res)
           alert("Register successfully")
       }).catch((err)=> {
           console.log(err)
       })
    }  
//    console.log(formik.values)

    return (
        <div style={{padding:"10%"}}>
           <h1> Register Form </h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                     />
                </Form.Group>
                <span style={{color:"red"}}>
                {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </span>

                <Form.Group>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile"
                     name="mobile"
                     value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                     />
                </Form.Group>
                <span style={{color:"red"}}>
                {formik.errors.mobile ? <div>{formik.errors.mobile}</div> : null}
                </span>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                     />
                </Form.Group>
                <span style={{color:"red"}}>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </span>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="on"
                     />
                </Form.Group>
                <span style={{color:"red"}}>
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </span>
               
            </Form>

            <Button type="button" className="btn btn-primary" onClick={onRegister} > 
            Register </Button> <br /> <br />
            <Button type="button" variant="light"> <Link to="/login"> Go to Login </Link> </Button>  
        </div>
    );
};

export default Register;
