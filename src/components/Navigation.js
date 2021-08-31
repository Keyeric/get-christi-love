import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeNav from "../hooks/homeNav";
import AboutNav from "../hooks/aboutNav";
import TechNav from "../hooks/techNav";

export default function Navigation() {
    return (
        <div className="navigation">
            <nav>
                <Router>
                    <Switch>
                        <Route path="/" exact><HomeNav /></Route>
                        <Route path="/technologies" exact><TechNav /></Route>
                        <Route path="/about" exact><AboutNav /></Route>
                    </Switch>
                </Router>
            </nav>
        </div>
    );
}