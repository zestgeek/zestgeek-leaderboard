import React from 'react'
import LeaderBoardItem from './LeaderBoardItem'

const LeaderBoardList = ({ list }) => 
    list.map(
        (leader, index) =>
            <LeaderBoardItem
                key={leader.id}
                serialNo={index + 1}
                leader={leader}
            />
    )

export default LeaderBoardList