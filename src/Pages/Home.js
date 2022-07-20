import React from 'react'
import Navbar from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'
import SearchBar from '../Components/SearchBar'
import styled from 'styled-components'

export default function Home() {
    return (
        <DivWrapper>
            <Navbar />
            <Wrapper>
                <SearchBar />
                <Dashboard />
            </Wrapper>
        </DivWrapper>
    )
}

const DivWrapper = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4em;
    margin-right: 1em;
    margin-left: 1em;
    max-width:900px

    @media (max-width: 800px) {
        max-width: 0;
    }

    @media (max-width: 600px) {
        .div {
            width: 80%;
            font-size: 10px;
        }
    }
`