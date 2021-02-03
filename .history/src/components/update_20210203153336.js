import React,{useState, useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
//import {Link} from "react-router-dom";
  

const Update = (props) => {

    const [values, setValues] = useState({
        name:'',
        mobile:'',
        email:'',
        password:''
    })

    // const changeHandler = (event) => {
    //     setValues((prevProps) => ({
    //       ...prevProps,
    //       [event.target.name]: event.target.value
    //     }));
    //   };
    
    // const onRegister=()=> {
    //    axios.post('http://localhost:3000/user',
    //    {name:values.name, mobile:values.mobile, email:values.email, password:values.password})
    //    .then((res)=> {
    //        console.log(res)
    //        alert("Register successfully")
    //    }).catch((err)=> {
    //        console.log(err)
    //    })
    // }  
    
    useEffect(()=>{
        onGet()
        // console.warn(props) 
        // console.warn(props.match.params.id) 
    },[])

    const onGet=()=>{
        axios.get('http://localhost:3000/user/'+ props.match.params.id).then((res)=> {
            console.log(res)
           // setValues(res.values)
        }).catch((err)=> {
            console.log(err)
        })
    }
    

    return (
        <div style={{padding:"10%"}}>
           <h1> Update Table </h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                    value={values.name}
                    onChange={(e)=>setValues({name:e.target.value})}
                     />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile"
                     value={values.mobile}
                    onChange={(e)=>setValues({mobile:e.target.value})}
                     />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                    value={values.email}
                    onChange={(e)=>setValues({email:e.target.value})}
                     />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    value={values.password}
                    onChange={(e)=>setValues({password:e.target.value})}
                    autoComplete="on"
                     />
                </Form.Group>
               
            </Form>

            <Button type="button" className="btn btn-primary" > 
            Update Table </Button> <br /> <br />
            {/* <Button type="button" variant="light"> <Link to="/login"> Go to Login </Link> </Button>   */}
        </div>
    );
};

export default Update;
