import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from 'react-bootstrap/Nav';
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addcart } from '../cart/Cartslice';
import { IoIosSearch } from "react-icons/io";


export default function Home() {
  const [search, setsearch] = useState('');
  const [pro, setpro] = useState([]);
  const [list, setlist] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(res => {
        setlist(res.data)
      })
      .catch(error => {
        setlist('error', error)
      }, [])
  },[])
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setpro(res.data.products);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  const itemchange = (item) => {
    axios.get(`https://dummyjson.com/products/category/${item}`)
      .then(res => {
        setpro(res.data.products)
      })
  }
  const all = () =>{
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setpro(res.data.products);
      })
  }
  return (
    <div className='main1'>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className='main '>
              <div className='slider'>
                <div className="offer">
                  <a href="#home"><img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/l/e/e/v15-g4-thin-and-light-laptop-lenovo-original-imagq57gqharggna.jpeg?q=70" alt="" /></a>
                  <div className="offer_text">
                    <h5>Top elling External Leptop</h5>
                    <p>Grob now upto 50% off</p>
                  </div>
                </div>
                <div className='fliter'>
                  <h5>
                    Fliter
                  </h5>
                  <h6>CATEGORIES</h6>
                  <Nav.Link className='ps-3' onClick={()=> all()}>All Categories</Nav.Link>
                  {
                    list.map((item) => {
                      return (
                        <Nav defaultActiveKey="/home" className="flex-column list" key={item}>
                          <Nav.Link onClick={() => itemchange(item)}>{item}</Nav.Link>
                        </Nav>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className='search_bar search_bar1'>
              <input type="text" placeholder='Search for products,Brands and More' width="400px" onChange={(e) => setsearch(e.target.value)} />
              <div className='search_icon'><IoIosSearch></IoIosSearch></div>
            </div>
            <div className='pro_item'>
              {
                pro.filter((item) => {
                  return search.toLocaleLowerCase() === '' ? item : item.title.toLocaleLowerCase().includes(search);
                }).map((item) => {
                  return (
                    <>
                      <div className="product" key={item}>
                        <div className="pro_img">
                          <Link to={`singleproduct/${item.id}`} className=''><img src={item.thumbnail} alt="" /></Link>
                        </div>
                        <div className="pro_like">
                          <span><FaHeart></FaHeart></span>
                        </div>
                        <div className="pro_info">
                          <div className="pro_name">
                            <p>{item.title}</p>
                          </div>
                          <div className="pro_brand">
                            <h6 style={{ marginBottom: 0 }}>Brand:<span>{item.brand}</span></h6>
                          </div>
                          <div className="pro_rating">
                            <p>{item.rating}<span><FaStar></FaStar></span></p>
                          </div>
                          <div className="pro_price d-flex ">
                            <h5><MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>{item.price}</h5>
                            <strike className="ms-2"><MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>{Math.floor(item.price * item.discountPercentage / 100 + item.price)}</strike><span className='ms-2'>{Math.floor(item.discountPercentage)}%off</span>
                          </div>
                        </div>
                        <div className="add_pro" key={item}>
                          <Button className='m-2' onClick={() => dispatch(addcart(item))}>ADD TO CART</Button>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
