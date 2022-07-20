import React from 'react'
import Navbar from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'
import SearchBar from '../Components/SearchBar'
import styled from 'styled-components'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Wrapper>
                <div>
                    <SearchBar />
                    <Dashboard />
                </div>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.section`
    flex-direction: column;
    display: flex;
    align-items: center;
    padding-top: 4em;
    margin-right: 1em;
    margin-left: 1em;
    div {
        max-width:1200px
        min-width: 400px;
    }
`