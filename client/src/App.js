import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute"
import BubblePage from "./components/BubblePage"


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/" >Home</Link> */}
        <Route exact path="/" component={Login} />
        
        <PrivateRoute path="/bubble" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
