import React, { useEffect, useState } from 'react';
import './style.css';
import Books from './components/Books/Books.jsx';

export default function App() {
  const [booksData, setBooksData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchDetails = async () => {
      const resources = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=react?maxResults=40'
      ).then((res) => res.json());
      setIsLoading(false);
      setBooksData(resources.items);
    };
    fetchDetails();
  }, []);
  return (
    <div className="main-layout">
      <h1 className="text-center py-4 fw-bold">HD's Books Store - React</h1>
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
