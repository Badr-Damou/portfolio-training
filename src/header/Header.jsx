import React, {useState} from "react";
import "./header.css";

function Header() {
  const [showModal, setShowModal] = useState(false);

  function handleModalShow(){
    setShowModal(!showModal);
  }
  return (
    <header className="flex">
      <button className="menu" onClick={handleModalShow}>show modal</button>
      <div />
      <nav>
        <ul className="flex">
          <li><a href="#About">About</a></li>
          <li><a href="#Articles">Articles</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Speaking">Speaking</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
      <button>light</button>

      {showModal && (
        <div className="fixed ">
          <ul className="modal">
            <li><button onClick={handleModalShow}>x</button></li>
            <li><a href="">About</a></li>
            <li><a href="">Article</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          
        </div>
      )}
    </header>
  );
}
export default Header;