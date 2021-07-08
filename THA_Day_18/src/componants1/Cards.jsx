import React from 'react'
import { Card} from "./Card";
export const Cards = () => {
    return (
        <>
            <div className="cards">
                <Card val={56} head="Pizza" para="you have consumed 56 cals today."/>
                <Card val={69} head="Burger" para="you have consumed 69 cals today."/>
                <Card val={500} head="Coke" para="you have consumed 500 cals today."/>
                <Card val={180} head="Browne" para="you have consumed 180 cals today."/>
                <Card val={90} head="Fried Rice" para="you have consumed 90 cals today."/>
                <Card val={200} head="Lassania" para="you have consumed 200 cals today."/>
            </div>
        </>
    )
}
