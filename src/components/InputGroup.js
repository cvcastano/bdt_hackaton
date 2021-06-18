import React from 'react';
import './InputGroup.scss';

function InputGroup(props) {
    const handleInput = ev => {
        props.handleInput(props.name, ev.target.value)
    }


    return (
        <>
            <label className="label" htmlFor={props.id}>
                {props.text}
            </label>
            <input
                className="input"
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                onChange={handleInput}

            />
        </>
    );
}

export default InputGroup;