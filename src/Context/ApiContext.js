import React, {useState} from "react"
import mockFollowersData from "./MockData/MockFollowersData"
import mockRepoData from "./MockData/MockRepoData"
import mockUserData from "./MockData/MockUserData"

const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.github.com'

const GithubApiContext = React.createContext()

function GithubContextProvider({children}) {
    const [githubUser, setGithubUser] = useState(mockUserData)
    const [userFollowers, setUserFollowers] = useState(mockFollowersData)
    const [userRepo, setUserRepo] = useState(mockRepoData)

	const searchGithubUser = async (user) => {
		const response = await axios
			.get(`users/${user}`)
			.catch((err) => console.log(err))
		if (response) {
			setGithubUser(response.data)
			const { followers_url, login } = response.data
			await Promise.allSettled([
				axios.get(`/users/${login}/repos`),
				axios.get(`${followers_url}?per_page=100`),
			])
				.then((results) => {
					const [repos, followers] = results
					const fulfilledStatus = 'fulfilled'

					if (repos.status === fulfilledStatus) {
						setUserRepo(repos.value.data);
					}
					if (followers.status === fulfilledStatus) {
						setUserFollowers(followers.value.data);
					}
				})
				.catch((err) => console.log(err));
		} else {
			console.log('no such user');
		}
	}
    return (
        <GithubApiContext.Provider value={{ githubUser, userFollowers, userRepo, searchGithubUser }}>{children}</GithubApiContext.Provider>
    )
} 

export {GithubApiContext, GithubContextProvider}