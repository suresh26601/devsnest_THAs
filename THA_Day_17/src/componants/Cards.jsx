import React from 'react'
import { Card} from "./Card";
export const Cards = () => {
    return (
        <>
            <div className="cards">
                <Card head="Pizza" para="you have consumed 56 cals today."/>
                <Card head="Burger" para="you have consumed 69 cals today."/>
                <Card head="Coke" para="you have consumed 500 cals today."/>
                <Card head="Browne" para="you have consumed 180 cals today."/>
                <Card head="Fried Rice" para="you have consumed 90 cals today."/>
                <Card head="Lassania" para="you have consumed 200 cals today."/>
            </div>
        </>
    )
}
