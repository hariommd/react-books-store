import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import Books from './components/Books/Books.jsx';

export default function App() {
  const [bookQuery, setBookQuery] = useState('react');
  const [booksData, setBooksData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const searchInputRef = useRef();
  const handleSearch = () => {
    console.log('Searched For ===>');
    const query = searchInputRef.current.value;
    console.log('Searched For ===>', query);
    setBookQuery(query);
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
        <input
          type="search"
          name=""
          id=""
          className="form-control"
          ref={searchInputRef}
        />
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
