import React, { useState } from 'react';
import BookItem from '../Books/BookItem';

const Cart = ({ show, data, handleShowCart, handler, handleCheckout }) => {
  const [discount, setDiscount] = useState(0);

  const discountCodes = [10, 20, 30];

  const totalPrice = data.reduce((total, curr) => {
    return (total += curr.volumeInfo.pageCount * curr.quantity);
  }, 0);

  const totalQuantity = data.reduce((total, curr) => {
    return (total += curr.quantity);
  }, 0);

  const discountAmount = Math.floor((discount / 100) * totalPrice);
  const discountedPrice =
    totalPrice - Math.floor((discount / 100) * totalPrice);

  totalQuantity == 0 && handleShowCart(false) && setDiscount(0);

  const handleDiscount = (discountPercent) => {
    if (discountPercent === 0) return;
    setDiscount(discountPercent);
  };
  return (
    <>
      <aside className={`cart ${show ? 'show' : ''}`}>
        <button
          className="btn d-block ms-auto cart-close-button"
          onClick={() => {
            handleShowCart(false);
          }}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <h2>Cart Items</h2>
        <div className="border-top py-2 border-bottom">
          <ul className="list-unstyled cart-list">
            {data?.map((book, index) => {
              return (
                <BookItem
                  cart={data}
                  key={book.id}
                  book={book}
                  handler={handler}
                />
              );
            })}
          </ul>
        </div>
        {totalQuantity !== 0 && (
          <div className="cart__action">
            <p>Apply Below Code Get Upto 30% off on Total Value</p>
            <div className="d-flex gap-3">
              {discountCodes.map((each) => {
                return (
                  <button
                    key={`discount-code-${each}`}
                    className={`btn ${
                      discount === each ? 'btn-info' : 'btn-outline-info'
                    }`}
                    disabled={discount && true}
                    onClick={() => handleDiscount(each)}
                  >
                    GET{`${each}`}
                  </button>
                );
              })}
            </div>
            <h5 className="pt-2 mt-2">Total Items: {totalQuantity} </h5>
            <h5>Total Amount : Rs{totalPrice}</h5>
            {discount !== 0 && (
              <>
                <div class="d-flex justify-content-between flex-wrap">
                  <h5>Discount Applied : Rs{discountAmount}</h5>
                  <button
                    className="btn text-danger py-0"
                    onClick={() => {
                      setDiscount(0);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
            <button
              className="btn btn-primary pay-button"
              onClick={() => {
                handleCheckout({
                  quantity: totalQuantity,
                  amount: discountedPrice,
                });
              }}
            >
              Pay : Rs.{discountedPrice}
            </button>
          </div>
        )}
      </aside>
      <div className={`cart-button-wrapper ${totalQuantity !== 0 && 'show'} `}>
        <button
          className={`btn btn-primary `}
          onClick={() => {
            handleShowCart(true);
          }}
        >
          <span className="count">{totalQuantity}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            style={{ height: '25px' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Cart;
