import React from "react"
import { GithubApiContext } from "../Context/ApiContext"
import styled from "styled-components"

export default function User() {
    const data = React.useContext(GithubApiContext)
    console.log(data.githubUser)
    return (
        <Wrapper>
            <img src={data.githubUser.avatar_url} alt={data.githubUser.name} />
            <div className="user-identity">
                <h3>{data.githubUser.name}</h3>
                <p>@{data.githubUser.login}</p>
                <p>{data.githubUser.bio}</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    padding-top: 1.5em;
    padding-bottom: 1em;
    img {
        width: 100px;
        height: 100px;
        border-radius: 80%;
        margin-right: 1em;
    }
    .user-identity {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`