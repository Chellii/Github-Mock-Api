import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <Wrapper>
            Github Api
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: white;
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0 0 0 / 7%) 0px 1px 1px, rgb(0 0 0 / 7%) 0px 2px 2px, rgb(0 0 0 / 7%) 0px 4px 4px, rgb(0 0 0 / 7%) 0px 8px 8px, rgb(0 0 0 / 7%) 0px 16px 16px;
`