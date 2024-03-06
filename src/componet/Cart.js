import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { remove, decrement, increment } from '../cart/Cartslice';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Cart() {
  const allcart = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const decrementitem = (item) =>{
    dispatch(decrement(item.id))
  }
  const incrementitem = (item) =>{
    dispatch(increment(item.id))
  }
  return (
    <>
      <div className="cart main">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="cartitem mb-2 bg-white my-2">
                <h5 className='d-inline-block'>
                  Shopping cart({allcart.quantity})
                </h5>
              </div>
              <div className="cart-delivery d-flex justify-content-between mb-2 bg-white  align-items-center">
                <p className='mb-0'>Form save Address</p>
                <button>Enter Delivery Pincode</button>
              </div>
              <div className="cart_list bg-white">
                {
                  allcart.cart.map((item) => {
                    return (
                      <div className="cart-item">
                        <div className="row">
                          <div className="col-3">
                            <div className="cartimage">
                              <img src={item.thumbnail} alt="" />
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="item">
                              <div className="item_name">
                                <h5>{item.title}</h5>
                              </div>
                              <div className="item_detaile">
                                <p>{item.description}</p>
                              </div>
                              <div className="item_price">
                                <div className="pro_price d-flex ">
                                  <h5><MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>{item.price}</h5>
                                  <strike className="ms-2"><MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>{Math.floor(item.price * item.discountPercentage / 100 + item.price)}</strike><span className='ms-2'>{Math.floor(item.discountPercentage)}%off</span>
                                </div>
                              </div>
                              <div className="item_quantity d-flex align-items-center mt-2">
                                <button onClick={()=>{decrementitem(item)}}>+</button>
                                <span>{allcart.quantity}</span>
                                <button onClick={()=>{incrementitem(item)}} className='me-5'>-</button>
                                <div className="item_remove">
                                  <p className='ps-5 ms-5 mb-0' onClick={() => { dispatch(remove(item)) }}><Link>REMOVE</Link></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="item_delivery py-3">
                              <p>Delivery by Mon Dec 30<strike>|<MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>40</strike><span className=' text-success'>Free</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="cart_buy bg-white p-3 d-flex justify-content-end">
                  <Button className='btn1'>PLACE ORDER</Button>
              </div>
            </div>
            <div className="col-4">
              <div className="cart-detaile p-3 my-2 bg-white">
                <h6 className=' text-black-50 border-bottom pb-2 '>PRICE DETAILES</h6>
                <div className='d-flex justify-content-between'>
                  <p>Price({allcart.quantity}items)</p>
                  <p><MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>{allcart.price}</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p>Discount</p>
                  <p className=' text-success'>-<MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>{allcart.discount}</p>
                </div>
                <div className='d-flex justify-content-between border-bottom'>
                  <p>Delivery Charges</p>
                  <p><strike><MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>40</strike><span className=' text-success'>Free</span></p>
                </div>
                <div className='d-flex justify-content-between'>
                  <h6 className='p-2' style={{ fontSize: '18px' }}>Total Amount</h6>
                  <h6 className='p-2'>{allcart.total}</h6>
                </div>
              </div>
              <div className="div position-relative">
                <div className='position-absolute px-3 py-1'><img src={'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg'} alt="" /></div>
                <p className='text-black-50 ms-3 px-4 text-center'>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart