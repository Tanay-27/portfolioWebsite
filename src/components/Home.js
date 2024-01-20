import React from 'react'
import './Home.scss'
import { useTypingEffect } from '../hooks/typing-effect'
import self from '../images/homePageSelf.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'

function Home() {
    const text = useTypingEffect("I'm a Full Stack Developer passionate about ReactJS, Angular, NodeJS, and Python. Crafting clean, efficient software is my expertise. I thrive on exploring new and challenging terrains—both in code and the real world.");
  return (
    <div className="homepage">
      <div className="photo">
      <div class="rounding-sec">
                <div class="big-circle">
                    <div class="icon-block">
                    <a href="https://github.com/Tanay-27" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    </div>
                    <div class="icon-block">
                    <a href="https://www.linkedin.com/in/tanayshah27" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    </div>
                    <div class="icon-block">
                    <a href="https://www.instagram.com/tanay.27" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    </div>
                    
                </div>
                <div class="centerImage">
                    <img src={self} alt="" class="img-w" />
                </div>
            </div>
      </div>
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