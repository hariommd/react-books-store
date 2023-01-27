import React, { useEffect, useState } from 'react';
import './style.css';
import Books from './components/Books/Books.jsx';
import axios from 'axios';

export default function App() {
  const [booksData, setBooksData] = useState();
  console.log(booksData);
  useEffect(() => {
    const fetchDetails = async () => {
      console.log('Called');
      const resources = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=react?maxResults=40'
      ).then((res) => res.json());
      setBooksData(resources.items);
    };
    fetchDetails();
  }, []);
  return (
    <div>
      <h1 className="text-center py-4">React Books Store</h1>
      <main>
        <Books data={booksData} />
      </main>
    </div>
  );
}
