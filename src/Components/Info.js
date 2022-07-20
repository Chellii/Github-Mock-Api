import React from "react"
import { HiOutlineUserAdd } from 'react-icons/hi';
import { RiUserFollowLine, RiGitRepositoryLine } from 'react-icons/ri';
import { GithubApiContext } from "../Context/ApiContext"
import styled from "styled-components";

export default function Info() {
    const { githubUser } = React.useContext(GithubApiContext);
	const { public_repos, followers, following } = githubUser;

	const items = [
		{
			id: 1,
			icon: <RiGitRepositoryLine size={30} className='icon' />,
			label: 'repository',
			value: public_repos,
		},
		{
			id: 2,
			icon: <RiUserFollowLine size={30} className='icon'/>,
			label: 'followers',
			value: followers,
		},
		{
			id: 3,
			icon: <HiOutlineUserAdd size={30} className='icon'/>,
			label: 'following',
			value: following,
		},
	];

    return (
        <Wrapper>
            {
                items.map((item) => {
                    return (
                        <article className='item'>
                            {item.icon}
                            <div>
                                <h3>{item.value}</h3>
                                <p>{item.label}</p>
                            </div>
                        </article>
                    );
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
.item {
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    background: #C176BA;
    align-items: center;
    margin-bottom: 0.5em;
    display: flex;
    
    div {
        margin-left: 1em;
    }
}
`