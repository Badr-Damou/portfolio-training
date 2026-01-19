import React from 'react'
import MyPic from '../assets/images/mypic.jpg'
import './hero.css'

export default function Hero() {
  return (
    <section className="flex hero ">
      <div className="content border">
        <div className="content-imgs flex">
          <img className="profile-img" src={MyPic} alt="" />
          <span className="icon-verified" />
        </div>
        <h1>Software designer founder, and amateur astronaut.</h1>
        <p>
          i'm Ali Hassan, a software engineer and etrepreneur based in New York.
          i'm the fouder and CEO of Planetaria, where we develop technologies
          that empower regular people to explore space on their own items.
        </p>
        <ul className='flex'>
          <li>
            <a className="icon-x" href=""></a>
          </li>
          <li>
            <a className="icon-github" href=""></a>
          </li>
          <li>
            <a className="icon-linkedin-square" href=""></a>
          </li>
          <li>
            <a className="icon-instagram" href=""></a>
          </li>
        </ul>
      </div>
      <div className="animation border">animation</div>
    </section>
  );
}
