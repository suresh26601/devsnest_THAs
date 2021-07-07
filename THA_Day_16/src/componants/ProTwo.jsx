import React from 'react'

export const ProTwo = ({img}) => {
    return (
        <>
            <div className="proTwo">
                <div className="memediv">
                    <div className="divImg">
                        <img src={img} alt="nbo" />
                    </div>
                    <div className="divText">
                        <h2>React Card</h2>
                        <p>your main THA is to make meme cards</p>
                    </div>
                </div>
            </div>
        </>
    )
}
