import React from 'react';
import BookItem from '../Books/BookItem';

const Cart = ({ show, data, handleShowCart, handler }) => {
  const totalPrice = data.reduce((total, curr) => {
    return (total += curr.volumeInfo.pageCount * curr.quantity);
  }, 0);

  const totalQuantity = data.reduce((total, curr) => {
    return (total += curr.quantity);
  }, 0);

  totalQuantity == 0 && handleShowCart(false);

  return (
    <>
      <aside className={`cart p-2 ${show ? 'show' : ''}`}>
        <button
          className="btn d-block ms-auto"
          onClick={() => {
            handleShowCart(false);
          }}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <h2>Cart Items</h2>
        <div className="border-top py-3 border-bottom">
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
          <h5 className="py-2">Total Items: {totalQuantity} </h5>
        )}

        {totalPrice !== 0 && (
          <h5 className="py-2">Total Amount : {totalPrice} </h5>
        )}
      </aside>
      <div className={`cart-button-wrapper ${totalQuantity !== 0 && 'show'} `}>
        <button
          className={`btn btn-primary `}
          onClick={() => {
            handleShowCart(true);
          }}
        >
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
          <span className="count">{totalQuantity}</span>
        </button>
      </div>
    </>
  );
};

export default Cart;
