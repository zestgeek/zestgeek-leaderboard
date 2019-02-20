import React from 'react'

import LeaderBoardTable from '../../components/views/LeaderBoard/LeaderBoardTable'

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

const LeaderBoard = () => {
    return (
            <div className="columns is-centered">
                <div className="column is-two-thirds is-centered flex">
                    <LeaderBoardTable list={leaderBoardList} />
                </div>
            </div>
    )
}

export default LeaderBoard
