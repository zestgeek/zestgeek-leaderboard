import React from 'react'

const LeaderBoardItem = ({ leader, serialNo }) => 
    <tr>
        <th>{serialNo}</th>
        <td>{leader.name}</td>
        <td>{leader.commits}</td>
        <td>{leader.completed}</td>
        <td>{leader.points}</td>
    </tr>

export default LeaderBoardItem