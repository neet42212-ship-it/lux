import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card" style={{ display: 'block' }}>
      <div className="product-card-img-wrapper" style={{ height: '350px', backgroundColor: 'var(--color-bg)', marginBottom: '1rem', position: 'relative' }}>
        <img src={product.image} alt={product.name} className="product-card-img" />
        {product.isNew && (
          <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#fff', padding: '0.4rem 0.8rem', fontSize: '0.7rem', letterSpacing: '1px', fontWeight: 'bold' }}>
            NEW
          </div>
        )}
      </div>
      <div style={{ textAlign: 'center', padding: '0.5rem' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{product.category}</p>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', fontWeight: '500' }}>{product.name}</h4>
        <p style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '1.1rem' }}>₹{product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
