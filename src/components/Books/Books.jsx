import React, { useState, useEffect } from 'react';
import BookItem from '../Books/BookItem';
import Cart from '../Books/Cart';

const Books = ({ data, handleBookInfo }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartData, setCartData] = useState([]);

  const cartFilteredData = () => {
    return cartData?.filter((cartItem) => {
      return cartItem.quantity !== 0;
    });
  };

  const handleBookCart = (action, book) => {
    if (cartData?.length > 0) {
      const alreadyPresent = cartData.some((cart) => {
        return cart.id === book.id;
      });
      if (!alreadyPresent) {
        book['quantity'] = 1;
        setCartData((prev) => {
          return [...prev, book];
        });
      } else {
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
      setCartData([...cartData, { ...book, quantity: 1 }]);
    }
  };

  const handleCheckout = ({ quantity, amount }) => {
    alert(`Thank you for purchase of ${quantity} items for Rs.${amount} !`);
    setCartData([]);
  };

  useEffect(() => {}, [cartData]);

  return (
    <>
      {/* BookList  */}
      <ul className={`list-unstyled book-list ${showCart && 'cart-active'}`}>
        {data?.map((book) => {
          return (
            <BookItem
              key={book.id}
              cart={cartFilteredData()}
              book={book}
              handler={handleBookCart}
              handleBookInfo={handleBookInfo}
            />
          );
        })}
      </ul>

      {/* BookCart */}
      <Cart
        show={showCart}
        data={cartFilteredData()}
        handler={handleBookCart}
        handleShowCart={setShowCart}
        handleCheckout={handleCheckout}
      />
    </>
  );
};

export default Books;
