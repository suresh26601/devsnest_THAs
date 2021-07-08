import React from 'react'

export const Card = (props) => {
    let success={
        backgroundColor:"green"
    }
    let lose={
        backgroundColor:"red"
    }
    return (
        <>
            <div className="Card" style={props.val>100?success:lose}>
                    <h2>{props.head}</h2>
                    <h4>{props.para}</h4>
            </div>
        </>
    )
}
