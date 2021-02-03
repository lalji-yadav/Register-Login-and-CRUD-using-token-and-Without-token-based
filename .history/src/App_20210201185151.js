import logo from './logo.svg';
import './App.css';
import Login from "./auth/login";
import Register from "./auth/register";
import Reg from "./components/reg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
           <Route path="/" component={Register} />
           <Route path="/login" component={Login} />
        </Switch>
      </Router>
       {/* <Register /> */}
       {/* <Login /> */}
       <Reg />
    </div>
  );
}

export default App;
