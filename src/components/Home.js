import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home(){
    const history = useHistory();
    return (
        <section className="homepage">
            <br />
            <h3 onClick={() => history.push('/')}>
                HOME PAGE BOI
            </h3>
            </section>
            );
        };
