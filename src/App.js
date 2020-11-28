import './App.css';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Navbar from "./components/nav/Navbar.Component";
import Register from "./components/auth/Register.Component";
import Login from "./components/auth/Login.Component";
import Home from "./components/Home.Component";
import Notfound from "./components/status/Notfound.Component";
import Footer from "./components/Footer.Component";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route exact component={Notfound}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
