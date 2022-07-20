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
    background: #E1D4E0;
`