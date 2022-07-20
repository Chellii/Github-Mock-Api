import React from 'react'
import { GithubApiContext } from '../Context/ApiContext'; 
import styled from 'styled-components';

export default function FollowersCard() {
    const { followers } = React.useContext(GithubApiContext);

	return (
		<Wrapper>
			<div className='followers'>
				{followers.map((follower, index) => {
					const { avatar_url: img, html_url, login } = follower;
					return (
						<article key={index}>
							<img src={img} alt={login}></img>
							<div>
								<h4>{login}</h4>
								<a href={html_url}>{html_url}</a>
							</div>
						</article>
					);
				})}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`

`