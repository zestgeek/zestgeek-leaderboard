import React from 'react'
import Header from './header'

const LeaderBoard = (props) => {
    return (
        <div className="container">
            <Header />
            {props.children}
        </div>
    )
}

export default LeaderBoard
