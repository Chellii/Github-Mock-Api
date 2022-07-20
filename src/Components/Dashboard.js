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
    display: flex
`