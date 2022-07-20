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
    div {
        max-width:1200px
    }
`