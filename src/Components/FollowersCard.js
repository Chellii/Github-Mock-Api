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
    .followers {
        display: flex;
        flex-direction: column;
        list-style: none;
        overflow-y: scroll;
        height: 100%;
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
			color: #0080FF;
		}
    }

    @media (max-width:1000px) {
        width: 90%;
        .followers {
            height: 300px;
        }
        .article{
            font-size: 12px;
        }
    }
`