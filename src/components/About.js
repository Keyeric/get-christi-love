import React from 'react';
import { useHistory } from 'react-router-dom';

export default function About(){
    const history = useHistory();
    return (
        <section className="about">
            <br />
            <h3 onClick={() => history.push('/about')}>
                ABOUT PAGE BOI
            </h3>
            </section>
            );
        };
