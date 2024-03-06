import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { IoCartSharp } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import { TbReplace } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addcart } from '../cart/Cartslice';


export default function Singleproduct() {
     const [single, setsingle] = useState([]);
     const [img, setimg] = useState([]);
     const [num, setnum] = useState('');
     const params = useParams();
     useEffect(() => {
          axios.get(`https://dummyjson.com/products/${params.id}`)
               .then(res => {
                    setsingle(res.data);
                    setimg(res.data.images)
                    setnum(res.data.thumbnail)
               })
               .catch(error => {
                    console.log(error);
               })
     }, [params.id])
     const click = (images) => {
          setnum(images)
     }
     const dispatch = useDispatch()
     return (
          <div>
               <div className="single">
                    <div className="container">
                         <div className="row">
                              <div className="col-5">
                                   <div className="single_item">
                                        <div className="slider_img">
                                             {
                                                  img.map((item, index) => {
                                                       return (
                                                            <img src={item} alt="" key={index} srcset="" onClick={() => click(item)} />
                                                       )
                                                  })
                                             }
                                        </div>
                                        <div className="single_img my-auto">
                                             <img src={num} alt="" />
                                        </div>
                                   </div>
                                   <div className="single-buy">
                                        <Link to={'/cart'}><Button className='me-2'onClick={()=>{dispatch(addcart(single))}}><IoCartSharp></IoCartSharp>ADD TO CART</Button></Link>
                                        <Button className='btn1'><ImPower></ImPower>BUY NOW</Button>
                                   </div>
                              </div>
                              <div className="col-7">
                                   <div className="single-title">
                                        <p><Link to='/'>Home</Link><span><FaChevronRight></FaChevronRight></span>{single.category}<span><FaChevronRight></FaChevronRight></span>{single.brand}<span><FaChevronRight></FaChevronRight></span>{single.title}</p>
                                        <h2>{single.title}</h2>
                                   </div>
                                   <div className="single-price">
                                        <div className="pro_rating">
                                             <p>{single.rating}<span><FaStar></FaStar></span></p>
                                        </div>
                                        <div className="pro_price d-flex align-items-center">
                                             <h1><MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>{single.price}</h1>
                                             <strike className="ms-2">{single.price + 50}</strike><span className='ms-2'>{single.discountPercentage}%off</span>
                                        </div>
                                   </div>
                                   <div className="single-charge">
                                        <p>+ ₹59 Secured Packaging Fee</p>
                                   </div>
                                   <div className="single-offers">
                                        <h5>Available offers</h5>
                                        <p><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /><b>Bank Offer</b>10% off on HDFC Bank Credit Card EMI Transactions, up to ₹750 on orders of ₹7,500 and above</p>
                                        <p><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /><b>Bank Offer</b>10% Instant Discount on PNB Credit Cards, up to ₹1000, on orders of ₹5,000 and above</p>
                                        <p><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /><b>Bank Offer</b>10% off on Bank of Baroda Credit Card Txns, up to ₹1,000 on orders of ₹5,000 and above</p>
                                        <p><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /><b>Special Price</b>Get extra ₹8500 off (price inclusive of cashback/coupon)</p>
                                        <p><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />Buy this product and Get Extra ₹75 Off on Select Room Heaters</p>
                                        <p><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /><b>Bank Offer</b>10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹5,000 and above</p>
                                        <p><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /><b>Bank Offer</b>Extra ₹500 off on PNB Credit Cards on a Net Cart Value of ₹24,990 and above</p>
                                        <p><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /><b>Bank Offer</b>5% Cashback on Flipkart Axis Bank Card</p>
                                        <p><img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /><b>Freebie</b>Spotify Premium - 12M at ₹699</p>
                                   </div>
                                   <div className="single-polisi d-flex">
                                             <div className='icon text-center m-2'><TbReplace></TbReplace><p>7Days Replacement</p></div>
                                             <div className='icon text-center m-2'><CiDeliveryTruck></CiDeliveryTruck><p>Free Delivery</p></div>
                                             <div className='icon text-center m-2'><CiBookmarkCheck></CiBookmarkCheck><p>1 Year Warranty</p></div>
                                             <div className='icon text-center m-2'><TbReplace></TbReplace><p>7Days Replacement</p></div>
                                             <div className='icon text-center m-2'><TbReplace></TbReplace><p>7Days Replacement</p></div>
                                   </div>
                                   <div className="single-dis ">
                                        <p className='mt-4'><b>Description:</b>{single.description}</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}