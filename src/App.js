import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import Books from './components/Books/Books.jsx';

export default function App() {
  const [bookQuery, setBookQuery] = useState('');
  const [booksData, setBooksData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const searchInputRef = useRef();
  const handleSearch = () => {
    console.log('Searched For ===>');
    const query = searchInputRef.current.value;
    console.log('Searched For ===>', query);
    setBookQuery(query);
  };
  const clearSearch = () => {
    setBookQuery('');
    searchInputRef.current.value = '';
  };
  useEffect(() => {
    setIsLoading(true);
    const fetchDetails = async () => {
      const resources = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookQuery}?maxResults=40`
      ).then((res) => res.json());
      setIsLoading(false);
      setBooksData(resources.items);
    };
    fetchDetails();
  }, [bookQuery]);
  return (
    <div className="main-layout">
      <h1 className="text-center py-4 fw-bold">HD's Books Store - React</h1>
      <div className="mb-3 d-flex flex-column flex-md-row align-items-center w-75 mx-auto gap-2">
        <div className="position-relative w-100">
          <input
            type="text"
            name=""
            id=""
            className="form-control pe-4"
            placeHolder="Search Book...."
            ref={searchInputRef}
          />
          {bookQuery != '' && (
            <button
              className="btn btn-danger btn-sm position-absolute top-50 end-0 translate-middle-y me-1"
              onClick={clearSearch}
            >
              X
            </button>
          )}
        </div>

        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      {isLoading && (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <span></span>
        </div>
      )}
      <main>
        <Books data={booksData} />
      </main>
    </div>
  );
}
