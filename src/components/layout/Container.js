/*container will go here and all the common components like header footer sidebar should be here 
*/
import React from 'react'

import Header from './header'

const leaderBoardList = [
    {
        id: 1,
        name: 'Manoj Singh Negi',
        commits: 1,
        completed: 1,
        points: 5
    },
    {
        id: 2,
        name: 'Manoj Singh Negi',
        commits: 1,
        completed: 1,
        points: 5
    },
    {
        id: 3,
        name: 'Manoj Singh Negi',
        commits: 1,
        completed: 1,
        points: 5
    },
]

const LeaderBoard = (props) => {
    return (
        <div className="container">
            <Header />
            {props.children}
        </div>
    )
}

export default LeaderBoard
