import React from 'react'

export const Box = ({row,col}) => {
    let filled={
        backgroundColor:"rgb(106, 179, 23)"
    }
    let unfilled={
        backgroundColor:"white"
    }
    return (
        <div style={row%2===0?(col%2===0?filled:unfilled):(col%2===0?unfilled:filled)}></div>
    )
}

