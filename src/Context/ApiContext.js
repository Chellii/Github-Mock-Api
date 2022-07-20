import React, {useState} from "react"
import mockFollowersData from "./MockData/MockFollowersData";
import mockRepoData from "./MockData/MockRepoData";
import mockUserData from "./MockData/MockUserData";

const apiUrl = "https://api.github.com"

const GithubApiContext = React.createContext();

function GithubContextProvider({children}) {
    const [githubUser, setGithubUser] = useState(mockUserData)
    const [userFollowers, setUserFollowers] = useState(mockFollowersData)
    const [userRepo, setUserRepo] = useState(mockRepoData)

    return (
        <GithubApiContext.Provider value={{ githubUser, userFollowers, userRepo }}>{children}</GithubApiContext.Provider>
    )
} 

export {GithubApiContext, GithubContextProvider}