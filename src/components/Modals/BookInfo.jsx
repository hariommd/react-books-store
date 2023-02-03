import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BookInfo({ book, show, handleClose }) {
  const { id } = book;
  const { title, publishedDate, pageCount, imageLinks } = book.volumeInfo;
  console.log('BookInfo Called');
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </Modal>
  );
}

export default BookInfo;
