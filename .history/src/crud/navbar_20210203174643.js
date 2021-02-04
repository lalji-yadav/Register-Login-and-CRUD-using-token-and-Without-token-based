import React from 'react';
import {Nav,NavDropdown,Form,FormControl,Button,Navbar} from "react-bootstrap";
import Read from "./crud/read";
import Create from "./crud/create";
import Uptoken from "./crud/update";

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const Navb = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>

            <Router>
                <Switch>

                <Route exact path="/crud" component={Read} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/uptoken" component={Uptoken} />
                


                {/* <Route exact path="/user/:id" render={(props)=>(<Update {...props} />)} > */}
                
                </Switch>
            </Router>
            
        </div>
    );
};

export default Navb;
