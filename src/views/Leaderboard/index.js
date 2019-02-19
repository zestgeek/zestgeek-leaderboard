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
        <div className="container">
            <div className="columns is-centered">
                <div className="column has-text-centered">
                    <h1 className="title">Zestgeek Leader board</h1>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-two-thirds is-centered flex">
                    <LeaderBoardTable list={leaderBoardList} />
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard
