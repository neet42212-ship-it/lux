import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)', padding: '4rem 0 2rem' }}>
      <div className="container flex justify-between" style={{ paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '300px' }}>
          <h3 style={{ color: 'var(--color-bg)', letterSpacing: '2px', fontSize: '1.2rem' }}>CRYSTAL COVE BEAUTY</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Elevate Your Glow with our luxurious collection of premium cosmetics.</p>
        </div>
        <div className="flex gap-4">
          <div>
            <h4 style={{ color: 'var(--color-accent)' }}>Shop</h4>
            <ul className="flex flex-col gap-1">
              <li><a href="/shop" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Makeup</a></li>
              <li><a href="/shop" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Skincare</a></li>
              <li><a href="/shop" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Fragrance</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-accent)' }}>Support</h4>
            <ul className="flex flex-col gap-1">
              <li><a href="/#contact" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Contact Us</a></li>
              <li><a href="/#contact" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>FAQs</a></li>
              <li><a href="/#contact" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Shipping & Returns</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
        &copy; {new Date().getFullYear()} Crystal Cove Beauty. All rights reserved.
      </div>
    </footer>
  );
}
