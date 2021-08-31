import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Tech(){
    const history = useHistory();
    return (
        <section className="tech">
            <br />
            <h3 onClick={() => history.push('/technologies')}>
                IT PAGE BOI
            </h3>
            </section>
            );
        };
