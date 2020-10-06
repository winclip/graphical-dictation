import React from 'react';
import { Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './style.css';

function VariantItem({ chooseVariant, variantItem }) {
  const { level } = useParams();
  return (
    <Col lg={6} xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Link to={`/game/${level}/${variantItem.id}`} onClick={chooseVariant} style={{ width: '80%', height: '90%' }}>
        <img
          className='variant-item'
          src={variantItem.imgSrc}
          alt={variantItem.title}
        />
      </Link>
    </Col>
  );
}

export default VariantItem;
