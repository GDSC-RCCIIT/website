import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Event from "./pages/Events/Event";
import Speakers from "./pages/Speakers/Speakers";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { DatabaseProvider } from "./contexts/Database";
import "./App.css";

export default function App() {
  return (
    <>
      <DatabaseProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/event" element={<Event/>} />
            <Route
              path="/speakers"
              element={<Speakers/>}
            />
            <Route path="/team" element={<Team/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
      </DatabaseProvider>
    </>
  );
}
