import React, { useEffect, useState } from 'react';
import './style.css';
import Books from './components/Books/Books.jsx';

export default function App() {
  const [booksData, setBooksData] = useState();
  useEffect(() => {
    const fetchDetails = async () => {
      const resources = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=react?maxResults=40'
      ).then((res) => res.json());
      setBooksData(resources.items);
    };
    fetchDetails();
  }, []);
  return (
    <div className="main-layout">
      <h1 className="text-center py-4 fw-bold">HD's Books Store - React</h1>
      <main>
        <Books data={booksData} />
      </main>
    </div>
  );
}
