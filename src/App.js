import React, {useState, useRef, useEffect} from 'react';
import WishList from './WishList'

const LOCAL_STORAGE_KEY = 'wishlistApp.wishes'

function App() {
  const [wishes, setWishes] = useState([{id: 1, name: 'Cyberpunk 2077', complete: true},
                                        {id: 2, name: 'Half-Life: Alyx', complte: false},
                                        {id: 3, name: 'Borderlands 3', complte: false}])
  const wishNameRef = useRef()
  
  useEffect(() => {
    const storedWishes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedWishes) setWishes(storedWishes)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishes))  
  }, [wishes])

  function toggleWish(id) {
    const newWishes = [...wishes]
    const wish = newWishes.find(wish => wish.id === id)
    wish.complete = !wish.complete
    setWishes(newWishes)
  }

  function addList(e) {
    const name = wishNameRef.current.value
    if(name === '') return
    setWishes(prevWishes => {
      return [...prevWishes, {id: wishes.length+1, name: name, complete: false}]
    })
    wishNameRef.current.value = null
  }

  function clearComplete() {
    const newWishes = wishes.filter(wish => !wish.complete)
    setWishes(newWishes)
  }

  function reset() {
    localStorage.clear()
  }

  return (
    <>
      <WishList wishes = {wishes} toggleWish = {toggleWish}/>
      <input ref = {wishNameRef} type = "text" />
      <button onClick = {addList}>add wish</button>
      <button onClick = {clearComplete}>clear complete list</button>
      <div>{wishes.filter(wish => !wish.complete).length} wishes left!</div>
      
      <button onClick = {reset}>RESET</button>
    </>
  )
}

export default App;
