import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Event from "./pages/Events/Event";
import Speakers from "./pages/Speakers/Speakers";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DatabaseProvider } from "./contexts/Database";
import "./App.css";

export default function App() {
  return (
    <React.Fragment>
      <DatabaseProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/event" exact component={Event} />
            <Route path="/speakers" exact component={Speakers} />
            <Route path="/team" exact component={Team} />
            <Route path="/contact" exact component={Contact} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </DatabaseProvider>
    </React.Fragment>
  );
}
