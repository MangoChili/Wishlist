import React from 'react'
import Wish from "./Wish";

export default function WishList({wishes, toggleWish}) {
    return (
        wishes.map(wish => {
            return <Wish key = {wish} toggleWish = {toggleWish} wish = {wish} />
        })
    )
}
