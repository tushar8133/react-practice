import React, { useState, useEffect } from 'react';

export function ExUseEffect() {
    // useEffect

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    // });

    useEffect(() => {
        console.log('I will run everytime.');
    });

    useEffect(() => {
        console.log('I will run only once.');
    }, []);

    useEffect(() => {
        console.log('I will run whenever "count" modifies.');
    }, [count]);

    console.log('-----------');

    return (
        <React.Fragment>
            <fieldset>
                <legend>useEffect</legend>
                <button onClick={() => setCount((pv) => pv + 1)}>
                    <h1>{count}</h1>
                </button>
            </fieldset>
        </React.Fragment>
    );
}
