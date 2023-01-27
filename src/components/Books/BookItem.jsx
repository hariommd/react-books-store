import React from 'react';

const BookItem = ({ book, handler, cart }) => {
  const { id } = book;
  const { title, language, publishedDate, pageCount, imageLinks } =
    book.volumeInfo;

  const currentCartItemQuantity =
    cart?.filter((cartItem) => {
      console.log('Filter', cartItem.id, id);
      return cartItem.id === id;
    })[0]?.quantity || 0;

  return (
    <li className="book-list__item">
      <div className="info">
        <img
          src={`${imageLinks.thumbnail}`}
          alt="book-img"
          className="img-fluid"
        />
        <h4>{title}</h4>
        <p className="lang"> {language}</p>
        <p className="dop">{publishedDate}</p>
        <p className="price">Rs. {pageCount}</p>
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
