import React from 'react'

export default function Wish({wish, toggleWish}) {
function click() {
    toggleWish(wish.id)
}

    return (
        <div>
            <label>
                <input type = "checkbox" checked = {wish.complete} onChange = {click}/>
                {wish.name}
            </label>
        </div>
    )
}
