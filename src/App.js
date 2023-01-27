import React from 'react';
import './style.css';
import Books from './components/Books/Books.jsx';
import { BOOKS_DATA } from './BooksData.js';

export default function App() {
  return (
    <div>
      <h1 className="text-center py-4">React Books Store</h1>
      <main>
        <Books data={BOOKS_DATA} />
      </main>
    </div>
  );
}
