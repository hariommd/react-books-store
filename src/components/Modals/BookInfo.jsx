import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BookInfo({ book, show, handleClose }) {
  const { id } = book;
  const { title, publishedDate, pageCount, imageLinks, description } =
    book.volumeInfo;
  console.log('BookInfo Called');
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={imageLinks?.thumbnail}
          alt="book-img"
          className="d-block mx-auto img-fluid"
        />
        <p className="my-3">Date of Publish : {publishedDate}</p>
        <h6>{description}</h6>
      </Modal.Body>
    </Modal>
  );
}

export default BookInfo;
