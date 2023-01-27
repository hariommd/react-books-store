import React from 'react';

const Cart = ({ show, data, handleShowCart, handler }) => {
  const totalPrice = data.reduce((total, curr) => {
    return (total += curr.price * curr.quantity);
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
            const { id, name, price, quantity } = book;
            return (
              <li className="cart-list__item" key={`cart-item-${index}`}>
                <div className="info">
                  <h4>{name}</h4>
                  <p className="price">Rs.{price}</p>
                  <p className="quantity">{quantity}</p>
                </div>
                <div className="action d-flex p-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => handler(1, book)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handler(-1, book)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
              </li>
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
  );
};

export default Cart;
