import React from "react"
import styled from "styled-components"
import { GithubApiContext } from "../Context/ApiContext";
import {BiSearch} from 'react-icons/bi'

export default function SearchBar() {
    const [user, setUser] = React.useState('');
	const { searchGithubUser } = React.useContext(GithubApiContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user) {
			searchGithubUser(user);
		}
	};

	return (
			<Wrapper>
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
	);
};

const Wrapper = styled.div`
	padding-bottom: 1.5em;
	width: 80%;
	@media (max-width:1000px){
		width: 100%;
	}
	.form-control {
		background: white;
        display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid grey;
    	border-radius: 5px;
		padding: 0.5em;
		input {
    		width: 100%;
			padding: 0.25em 0.5em;
			outline: 0;
    		border: 0;
		}
		input::placeholder {
			color: grey;
		}
		button {
			border-radius: 5px;
			border-color: transparent;
			padding: 0.25em 0.5em;
			background: violet;
			color: white;
			cursor: pointer;
		}
	}
	h3 {
		margin-bottom: 0;
		color: grey;
		font-weight: 400;
	}
`