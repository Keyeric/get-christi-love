import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Tech from "./Tech";

export default function Main() {
    return (
        <section className="mainContent">
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact><Home /></Route>
                        <Route path="/technologies" exact><Tech /></Route>
                        <Route path="/about" exact><About /></Route>
                    </Switch>
                </Router>
            </div>
        </section>
    );
}