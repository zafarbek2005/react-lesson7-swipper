import { SlBasket } from "react-icons/sl"; 
import { AiTwotoneHeart } from "react-icons/ai"; 
import { IoMdPerson } from "react-icons/io"; 
import { useState } from 'react';
import { FiPhoneCall } from "react-icons/fi"; 
import { BiMoon } from "react-icons/bi"; 
import React from 'react';
import './Navbar.scss';
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import Logo from '../Header/Img/Logo.svg'

const Navbar = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <>
    <header>

    <div className={`Navbar Container ${isNightMode ? 'night-mode' : ''}`}>
        <div className="night-mode-toggle" onClick={toggleNightMode}>
          <button id="moon"><BiMoon /></button>
        </div>

        <div className="items">
          <a href="#">Home</a>
          <a href="#">
            <select name="l" id="l">
              <option value="l">Category</option>
              <option value="l">Category</option>
            </select>
          </a>
          <a href="#">
            <select name="l" id="l">
              <option value="l">Products</option>
              <option value="l">Products</option>
            </select>
          </a>
          <a href="#">
            <select name="l" id="l">
              <option value="l">Pages</option>
              <option value="l">Pages</option>
            </select>
          </a>
          <a href="#">
            <select name="l" id="l">
              <option value="l">Blog</option>
              <option value="l">Blog</option>
            </select>
          </a>
          <a href="#">
            <select name="l" id="l">
              <option value="l">Elements</option>
              <option value="l">Elements</option>
              <option value="l">Elements</option>
            </select>
          </a>
        </div>

        <div className="number">
          <span><FiPhoneCall /></span>
          <span>+123 ( 456 ) ( 7890 )</span>
        </div>
      </div>

      <div className="Navbar-bot Container">
        <div className="logo">
            <img src= {Logo} alt="" />
        </div>

        <div className="input">
            <input type="text" placeholder='Search For items...' />
            <span>
                <select name="" id="">
                    <option value="">All Categories</option>
                    <option value="">All Categories</option>
                    <option value="">All Categories</option>
                </select>
                <button><FiSearch /></button>
            </span>
        </div>

        <div className="person">
            <button><IoPersonOutline /></button>
            <span>Account</span>
            <button><AiTwotoneHeart /></button> 
            <span>Wishlist</span>
            <span><SlBasket /></span>
            <span>Cart</span>
        </div>
    

      </div>

      {isNightMode && <div className="overlay" onClick={toggleNightMode}></div>}
    </header>
    </>
  );
};

export default Navbar;
