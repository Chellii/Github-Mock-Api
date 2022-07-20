import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Error() {
    return (
        <ErrorContainer>
            <h1>404</h1>
            <h2>SORRY!, The Page You're Looking For Was Not Found</h2>
            <Link className='btn-style' to='/'>Back Home</Link>
        </ErrorContainer>
    )
}
const ErrorContainer = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: #E1D4E0;
    text-align: center;
    h1 {
        font-size: 10rem;
    }
    h2 {
        color: #756474;
        margin-bottom: 1rem;
    }
    .btn-style {
        text-transform: uppercase;
        text-decoration: none;
        background: #BD83BB;
        color: #FFEBFF;
        padding: 0.375rem 0.75rem;
        display: inline-block;
        font-weight: 400;
        font-size: 0.875rem;
        border: 2px solid transparent;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
    }
    a:hover {
        background: #6E056A;
        color: #DA9DD8;
    }
`