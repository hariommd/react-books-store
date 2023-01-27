import React from 'react';
import BookItem from '../Books/BookItem';

const Cart = ({ show, data, handleShowCart, handler }) => {
  console.log('CartData ===>', data);
  const totalPrice = data.reduce((total, curr) => {
    return (total += curr.volumeInfo.pageCount * curr.quantity);
  }, 0);

  const totalQuantity = data.reduce((total, curr) => {
    return (total += curr.quantity);
  }, 0);

  totalQuantity == 0 && handleShowCart(false);

  return (
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
            return <BookItem key={book.id} book={book} handler={handler} />;
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
  );
};

export default Cart;
