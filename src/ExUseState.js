import React, { useState } from 'react';

export function ExUseState() {
    // useState as VALUE
    const [fruit, setFruit] = useState('apple');
    const updateFruit = (e) => {
        setFruit(e.target.value);
    };

    // useState as OBJECT
    const [{ city, country } = {}, setAddress] = useState({
        city: 'Alabama',
        country: 'US',
    });
    const updateAddress = ({ target: { value, name } }) => {
        return setAddress((previousState) => {
            return { ...previousState, [name]: value };
        });
    };

    // useState as FUNCTION
    const [population, setPopulation] = useState(() => {
        console.log('some heavy calculations');
        return 99999999;
    });
    const updatePopulation = (e) => {
        setPopulation(e.target.value);
    };

    return (
        <React.Fragment>
            <fieldset>
                <legend>useState as VALUE</legend>
                <input value={fruit} onInput={updateFruit} />({fruit})
            </fieldset>

            <fieldset>
                <legend>useState as OBJECT</legend>
                <input name="city" value={city} onInput={updateAddress} />
                <input name="country" value={country} onInput={updateAddress} />
                ({city}-{country})
            </fieldset>

            <fieldset>
                <legend>useState as FUNCTION</legend>
                <input value={population} onInput={updatePopulation} />(
                {population})
            </fieldset>
        </React.Fragment>
    );
}
