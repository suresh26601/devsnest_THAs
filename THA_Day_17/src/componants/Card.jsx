import React from 'react'

export const Card = (props) => {
    return (
        <>
            <div className="Card">
                    <h2>{props.head}</h2>
                    <h4>{props.para}</h4>
            </div>
        </>
    )
}
