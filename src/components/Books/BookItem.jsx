import React, { useEffect } from 'react';

const BookItem = ({ book, handler, cart }) => {
  const { id, name, lang, dop, price } = book;
  const currentCartItemQuantity =
    cart.filter((cartItem) => {
      return cartItem.id === id;
    })[0]?.quantity ?? 0;
  return (
    <li className="book-list__item">
      <div className="info">
        <h4>{name}</h4>
        <p className="lang"> {lang}</p>
        <p className="dop">{dop}</p>
        <p className="price">Rs.{price}</p>
      </div>
      <div className="action">
        <button className="btn btn-primary" onClick={() => handler(1, book)}>
          Add To Cart
        </button>
        {currentCartItemQuantity !== 0 && (
          <p className="m-0">{currentCartItemQuantity}</p>
        )}
        {currentCartItemQuantity !== 0 && (
          <button className="btn btn-danger" onClick={() => handler(-1, book)}>
            Remove From Cart
          </button>
        )}
      </div>
    </li>
  );
};

export default BookItem;
