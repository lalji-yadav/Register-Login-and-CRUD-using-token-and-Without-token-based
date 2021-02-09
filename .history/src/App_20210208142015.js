import './App.css';
import Login from "./auth/login";
import Register from "./auth/register";
import Reg from "./components/reg";
import Table from "./components/table";
import Update from "./components/update";
import Tabledata from "./crud/tabledata";

import Readme from "./auth/readme";

import Navb from "./crud/navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
           <Route exact path="/" component={Register} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/reg" component={Reg} />
           <Route exact path="/table" component={Table} />
           <Route exact path="/tabledata" component={Tabledata} />

           <Route exact path="/navbar" component={Navb} />


           <Route exact path="/user/:id" render={(props)=>(<Update {...props} />)} >

         
              
            </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
