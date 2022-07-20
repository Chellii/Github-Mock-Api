import React from 'react'
import User from './User'
import Info from './Info'
import styled from 'styled-components'

export default function UserCard() {
    return (
        <Wrapper>
            <User />
            <Info />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: white;
    padding: 1em;
    border-radius: 0.25em;
    margin-right: 2em;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    
    @media (max-width:1000px)
    {
        margin-right: 0;
        margin-bottom: 2em;
    }
`