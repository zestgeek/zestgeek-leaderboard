import React from 'react'
import LeaderBoardList from './LeaderBoardItemList'

const LeaderBoardTable = ({ list }) =>
    <table className="table">
        <thead>
            <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Name</th>
                <th><abbr title="Played">Commits</abbr></th>
                <th><abbr title="Won">Tasks completed</abbr></th>
                <th><abbr title="Drawn">Points</abbr></th>
            </tr>
        </thead>
        <tbody>
            <LeaderBoardList list={list} />
        </tbody>
    </table>

export default LeaderBoardTable