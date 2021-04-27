import React from 'react'
import styled from 'styled-components'

const Input = ({ name, handleChange, type }) => {
    return (
           <Text 
            name={name}
            onChange={handleChange}
            required
            // label={label}
            type={type}
           />
    )
}

export default Input

// const Container = styled.div``

const Text = styled.input`
    width: 100%;
    color: #171e40;

    padding: 8px;
    border-radius: 4px;
    font-size: 1rem;
    /* border: 1px solid #171e40; */
    border: 1px solid transparent;
    outline: none;
    margin: 10px 0 0;
`

