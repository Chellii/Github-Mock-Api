import React from 'react'
import UserCard from './UserCard'
import FollowersCard from './FollowersCard'
import styled from 'styled-components'

export default function Dashboard() {
    return (
        <Wrapper>
                <UserCard />
                <FollowersCard />
        </Wrapper>
    )
}

const Wrapper = styled.section`
        display: flex;
        height: 350px;
        margin-bottom: 1em;
    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        height : 800px

    }

    
    
`