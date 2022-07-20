import React from "react"
import styled from "styled-components"
import { GithubApiContext } from "../Context/ApiContext";
import {BiSearch} from 'react-icons/bi'

export default function SearchBar() {
    const [user, setUser] = React.useState('');
	const { searchGithubUser } = React.useContext(GithubApiContext);

	const handleSubmit = (e) => {
		console.log(e.target.value)
		e.preventDefault();
		if (user) {
			searchGithubUser(user);
		}
		console.log(user);
	};

	return (
		<section className='section'>
			<Wrapper className='section-center'>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<BiSearch></BiSearch>
						<input
							data-testid='search-bar'
							type='text'
							placeholder='enter github user name'
							value={user}
							onChange={(e) => {
								setUser(e.target.value);
							}}
						></input>
						<button type='submit'>search</button>
					</div>
				</form>
			</Wrapper>
		</section>
	);
};

const Wrapper = styled.div`
	padding-bottom: 1.5em;
	.form-control {
		background: white;
        display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid grey;
    	border-radius: 5px;
		padding: 0.5rem;
		input {
    		width: 100%;
			padding: 0.25rem 0.5rem;
			outline: 0;
    		border: 0;
		}
		input::placeholder {
			color: grey;
			text-transform: capitalize;
		}
		button {
			border-radius: 5px;
			border-color: transparent;
			padding: 0.25rem 0.5rem;
			text-transform: capitalize;
			background: violet;
			color: white;
			transition: var(--transition);
			cursor: pointer;
			&:hover {
				background: blue;
				color: pink;
			}
		}
		@media (max-width: 800px) {
			button,
			input,
			svg {
				font-size: 0.85rem;
			}
		}
	}
	h3 {
		margin-bottom: 0;
		color: grey;
		font-weight: 400;
	}
`