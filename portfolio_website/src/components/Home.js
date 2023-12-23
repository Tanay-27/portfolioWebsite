import React from 'react'
import './Home.scss'
import { useTypingEffect } from '../hooks/typing-effect'

function Home() {
    const text = useTypingEffect("I'm a Full Stack Developer passionate about ReactJS, Angular, NodeJS, and Python. Crafting clean, efficient software is my expertise. I thrive on exploring new and challenging terrains—both in code and the real world.");
  return (
    <div className="homepage">
        <div className="content">
            <div className="name">Hi! I am <span>Tanay Shah</span></div>
            <div className="line blinking-cursor">
                {text}
            </div>
        </div>
    </div>
  )
}


export default Home