import { useState } from 'react'
import kfc from './../../assets/kfc-4.svg'
import Auth from './../Auth/Auth'
import './Header.css'
function Header() {
    const [showAuth, setShowAuth] = useState(false);
  return (
    <>
    <header>
        <div className="name">
            <img src={kfc} alt="" />
            <h1>Pizza Gut</h1>
        </div>
        <input type="text" placeholder='find pizza by name' />
        <button onClick={() => {setShowAuth(true); alert("Disclaimer: if you dont have acc neither we will register you anyway")}}>Log</button>
    </header>
    {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  )
}

export default Header
