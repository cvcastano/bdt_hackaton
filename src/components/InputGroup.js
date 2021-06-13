import React from 'react';
import './InputGroup.scss';

function InputGroup(props) {

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
                defaultValue={props.value}
            />
        </>
    );
}

export default InputGroup;