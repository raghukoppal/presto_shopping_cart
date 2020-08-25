import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './style.css';
import { ProgressIndicator } from './ProgressIndicator';
import { ProductsCarousel } from './ProductsCarousel';

export const Checkout = ({ items, total, currency }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return items.length > 0 ? (
    <>
      <button className='btn btn-primary' onClick={handleShow}>
        Checkout
      </button>
      <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        keyboard={false}
        animation={false}
      >
        <div className='checkout-modal'>
          <ProgressIndicator />
          <ProductsCarousel products={items} />
        </div>
      </Modal>
    </>
  ) : null;
};

Checkout.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
};
