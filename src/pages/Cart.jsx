import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, handleIncrement, handleDecrement, handleRemove, subtotal } = useCart();

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem', maxWidth: '800px' }}>
      <h1 className="section-title">Your Bag</h1>
      
      <div style={{ marginBottom: '3rem' }}>
        {cartItems.map((item, idx) => (
          <div key={idx} className="flex gap-4 items-center" style={{ padding: '2rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <div style={{ width: '120px', height: '150px', backgroundColor: 'var(--color-bg)', overflow: 'hidden' }}>
              <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{item.product.name}</h3>
              <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>{item.product.category}</p>
              
              {item.shade && <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: '0.9rem', marginBottom: '1rem' }}>Shade: {item.shade}</p>}
              
              <div className="flex items-center gap-3">
                <button onClick={() => handleDecrement(idx)} style={{ border: '1px solid rgba(0,0,0,0.2)', background: 'transparent', width: '30px', height: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
                <span style={{ fontWeight: '500' }}>{item.quantity}</span>
                <button onClick={() => handleIncrement(idx)} style={{ border: '1px solid rgba(0,0,0,0.2)', background: 'transparent', width: '30px', height: '30px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)' }}>₹{(item.product.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleRemove(idx)} style={{ background: 'none', border: 'none', color: 'rgba(0,0,0,0.4)', textDecoration: 'underline', marginTop: '1rem', cursor: 'pointer', fontSize: '0.9rem' }}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: 'var(--color-bg)', padding: '2.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="flex justify-between" style={{ marginBottom: '1rem' }}>
          <span style={{ color: 'rgba(0,0,0,0.7)' }}>Subtotal</span>
          <span style={{ fontWeight: '500' }}>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between" style={{ marginBottom: '1rem' }}>
          <span style={{ color: 'rgba(0,0,0,0.7)' }}>Shipping</span>
          <span style={{ color: 'var(--color-accent)' }}>Complimentary</span>
        </div>
        <div className="flex justify-between" style={{ padding: '1.5rem 0 1rem 0', borderTop: '1px solid rgba(0,0,0,0.1)', fontWeight: '600', fontSize: '1.3rem' }}>
          <span>Estimated Total</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem', fontSize: '1rem' }}>Proceed to Checkout</button>
      </div>
    </div>
  );
}
