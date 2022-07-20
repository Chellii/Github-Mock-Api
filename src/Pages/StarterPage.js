import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { GithubApiContext } from "../Context/ApiContext";
import {BiSearch} from 'react-icons/bi'

const axios = require('axios').default;

export default function StarterPage() {
    const [user, setUser] = React.useState('');
	const { searchGithubUser } = React.useContext(GithubApiContext);
    const navigate = useNavigate();

    const isUserExist = async (user) => {
        const response = await axios
			.get(`users/${user}`)
			.catch((err) => console.log(err))

            if (response) {
			    searchGithubUser(user);
                navigate('/home');
            }
    }

	const handleSubmit = (e) => {
		console.log(e.target.value)
		e.preventDefault();
		if (user) {
            isUserExist(user)
		}
		console.log(user);
	};

    return (
        <PageContainer>
            <h2>Find github profile by username</h2>
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
        </PageContainer>
    )
}

const Wrapper = styled.section`
padding-bottom: 1.5em;
width: 50%;
@media (max-width:1000px){
    width: 50%;
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
        text-transform: capitalize;
    }
    button {
        border-radius: 5px;
        border-color: transparent;
        padding: 0.25em 0.5em;
        text-transform: capitalize;
        background: violet;
        color: white;
        transition: var(--transition);
        cursor: pointer;
    }
    @media (max-width: 800px) {
        button,
        input,
        svg {
            font-size: 0.85em;
        }
    }
}
h3 {
    margin-bottom: 0;
    color: grey;
    font-weight: 400;
}
`

const PageContainer = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #E1D4E0;
    text-align: center;

    h2 {
        padding-bottom: 2em;
    }

`