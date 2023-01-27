import React, { useState, useEffect } from 'react';
import BookItem from '../Books/BookItem';
import Cart from '../Books/Cart';

const Books = ({ data }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartData, setCartData] = useState([]);

  const handleBookCart = (action, book) => {
    setShowCart(true);
    if (cartData?.length > 0) {
      const alreadyPresent = cartData.some((cart) => {
        return cart.id === book.id;
      });
      if (!alreadyPresent) {
        console.log('New Book');
        book['quantity'] = 1;
        setCartData((prev) => {
          return [...prev, book];
        });
      } else {
        console.log('Old Book');
        setCartData((prev) => {
          const newCartData = prev.map((each) => {
            const newCart = Object.assign({}, each);
            if (each.id === book.id) {
              action === 1 ? newCart.quantity++ : newCart.quantity--;
            }
            return newCart;
          });
          return [...newCartData];
        });
      }
    } else {
      console.log('no length initial');
      setCartData([...cartData, { ...book, quantity: 1 }]);
    }
  };

  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  return (
    <>
      {/* BookList  */}
      <ul className="list-unstyled book-list">
        {data?.map((book) => {
          return (
            <BookItem
              key={book.id}
              cart={cartData}
              book={book}
              handler={handleBookCart}
            />
          );
        })}
      </ul>

      {/* BookCart */}
      <Cart
        show={showCart}
        data={cartData}
        handler={handleBookCart}
        handleShowCart={setShowCart}
      />
    </>
  );
};

export default Books;
