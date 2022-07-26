import React from 'react'
import { GithubApiContext } from '../Context/ApiContext'; 
import styled from 'styled-components';

export default function FollowersCard() {
    const { userFollowers } = React.useContext(GithubApiContext);

	return (
		<Wrapper>
			<div className='followers'>
				{userFollowers.map((follower, index) => {
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
    background: white;  
    padding: 1em;
    border-radius: 0.25em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 50%;
    &::before {
        content: 'Followers';
    background: #C176BA;
    color: white;
    border-top-right-radius: 0.55em;
    border-top-left-radius: 0.25em;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    font-size: 1.2rem;
	}
    .followers {
        border: 1px solid #d7d7d7;
        display: flex;
        flex-direction: column;
        list-style: none;
        overflow-y: scroll;
        height: 90%;
        ::-webkit-scrollbar {
            width: 0.3em;
        }
      
        ::-webkit-scrollbar-thumb {
            background: grey; 
            border-radius: 0.5em;
        }

    }
  
    article {
        display: flex;
        align-items: center;
        border-radius: 0.25em;
        padding: 0.5em 1em;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin-bottom: 0.3em;
        width:100%;
        img {
            height: 100%;
            width: 45px;
            border-radius: 50%;
            object-fit: cover;
            padding-right: 0.5em;
        }
        h4 {
			margin-bottom: 0;
		}
		a {
            font-size: 0.8em;
			color: #0080FF;
		}
    }

    @media (max-width:800px) {
        width: 90%;
        .followers {
            height: 300px;
        }
        article{
            display: flex;
            flex-direction: column;
            align-items: center;

            div {
                align-items: center;
                flex-direction: column;
                display: flex;
            }
        }
    }
`