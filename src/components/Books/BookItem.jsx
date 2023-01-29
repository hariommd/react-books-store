import React from 'react';

const BookItem = ({ book, handler, cart }) => {
  const { id } = book;
  const { title, publishedDate, pageCount, imageLinks } = book.volumeInfo;

  const currentCartItemQuantity =
    cart?.filter((cartItem) => {
      return cartItem.id === id;
    })[0]?.quantity || 0;

  return (
    <li className="book-list__item">
      <div className="book-img-wrapper">
        <img
          src={`${imageLinks.thumbnail}`}
          alt="book-img"
          className="img-fluid"
        />
        <p className="dop">{new Date(publishedDate).getFullYear()}</p>
      </div>
      <div className="info">
        <h4>{title}</h4>
        <p className="price">
          Rs. {pageCount}{' '}
          {currentCartItemQuantity !== 0 && (
            <>
              <span>*</span>
              <span> {currentCartItemQuantity} </span>
              <span> = Rs.{pageCount * currentCartItemQuantity}</span>
            </>
          )}{' '}
        </p>
      </div>
      <div className="action">
        <div className="btn-group" role="group">
          {currentCartItemQuantity !== 0 && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handler(-1, book)}
            >
              -
            </button>
          )}
          {currentCartItemQuantity !== 0 && (
            <button type="button" className="btn btn-warning">
              {currentCartItemQuantity}
            </button>
          )}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handler(1, book)}
          >
            {currentCartItemQuantity === 0 && <span>ADD</span>}
            {currentCartItemQuantity > 0 && <span>+</span>}
          </button>
        </div>
      </div>
    </li>
  );
};

export default BookItem;
