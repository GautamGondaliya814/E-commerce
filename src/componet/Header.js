import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className='header'>
      <header>
        <div className="top_header">
          <Navbar data-bs-theme="light">
            <Navbar.Brand href="#home">
            <Link to={'/'}>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
              </Link>
            </Navbar.Brand>
            <div className='search_bar'>
              <input type="text" placeholder='Search for products,Brands and More' width="400px" />
              <div className='search_icon'><IoIosSearch></IoIosSearch></div>
            </div>
            <Nav className="">
              <Nav.Link href="#home" className='user'>
                <span className='icon'><FaRegCircleUser></FaRegCircleUser></span>
                Login
              </Nav.Link>
              <Link to={'cart'} className='nav-link'><span className='icon'><IoCartOutline></IoCartOutline></span>
                Cart</Link>
              <Nav.Link href="#pricing"><span className='icon'><AiOutlineShop></AiOutlineShop></span>
                Login</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </header>
    </div>
  )
}
