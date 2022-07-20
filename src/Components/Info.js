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
    padding: 1rem 2rem;
    background: green;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
        border-radius: 50%;
    }
    .icon {
        font-size: 1.5rem;
    }
    h3 {
        margin-bottom: 0;
        letter-spacing: 0;
    }
    p {
        margin-bottom: 0;
        text-transform: capitalize;
    }
}
`