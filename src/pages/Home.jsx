import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const trendingProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '85vh', backgroundColor: 'var(--color-bg)', backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '600px', backgroundColor: 'rgba(255,255,255,0.7)', padding: '3rem', backdropFilter: 'blur(16px)', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.5)', boxShadow: 'var(--shadow-hover)' }}>
            <h1 style={{ fontSize: '4rem', color: 'var(--color-text)', textShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>Elevate Your Glow.</h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.8)', marginBottom: '2rem', lineHeight: '1.6' }}>Discover the new dimension of luxury beauty. Unveil your true potential with Crystal Cove Beauty's exclusive collection.</p>
            <Link to="/shop" className="btn btn-primary">Shop Collection</Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="categories" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="flex gap-4 justify-between">
            {categories.map((cat, i) => (
              <Link to="/shop" key={i} className="category-card" style={{ flex: 1, position: 'relative', height: '450px', backgroundColor: 'var(--color-section)', cursor: 'pointer', overflow: 'hidden', display: 'block' }}>
                <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="category-img" />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }}>
                  <h3 style={{ color: '#fff', fontSize: '2rem', margin: 0, letterSpacing: '2px' }}>{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-section)' }}>
        <div className="container">
          <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Trending Now</h2>
            <Link to="/shop" style={{ textDecoration: 'underline', color: 'var(--color-text)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: '500' }}>View All Favorites</Link>
          </div>
          <div className="flex gap-4">
            {trendingProducts.map(product => (
              <div key={product.id} style={{ flex: 1 }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">About Crystal Cove Beauty</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.7)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Welcome to Crystal Cove Beauty, your premier destination for luxury cosmetics. We believe that beauty is an expression of individuality, and our curated collection of exceptional makeup, skincare, and fragrances is designed to empower you to unveil your true potential.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.7)', lineHeight: '1.8' }}>
            Our shop offers a seamless and premium shopping experience, bringing the finest beauty products from around the world directly to your doorstep. We are committed to quality, authenticity, and elevating your everyday glow.
          </p>
        </div>
      </section>

      {/* Help & Contact Section */}
      <section id="contact" style={{ padding: '6rem 0', backgroundColor: 'var(--color-section)' }}>
        <div className="container">
          <div className="flex gap-4">
            <div style={{ flex: 1, padding: '3rem', backgroundColor: 'var(--color-bg)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '2px' }}>
              <h2 className="section-title" style={{ marginTop: 0 }}>Need Help?</h2>
              <p style={{ color: 'rgba(0,0,0,0.7)', lineHeight: '1.6', marginBottom: '2rem' }}>
                Our dedicated support team is here to assist you with any questions about our products, your order, or Returns & Exchanges. We aim to provide a stress-free luxurious experience.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(0,0,0,0.8)' }}>
                <li style={{ marginBottom: '1rem' }}><strong>FAQs:</strong> Browse our frequently asked questions.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Shipping:</strong> Learn about our fast & secure delivery.</li>
                <li><strong>Returns:</strong> Hassle-free 30-day return policy.</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '3rem', backgroundColor: 'var(--color-bg)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '2px' }}>
              <h2 className="section-title" style={{ marginTop: 0 }}>Contact Us</h2>
              <p style={{ color: 'rgba(0,0,0,0.7)', lineHeight: '1.6', marginBottom: '2rem' }}>
                Reach out to our beauty consultants and customer care team. We are available Monday through Friday, 9:00 AM to 6:00 PM (EST).
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <strong style={{ minWidth: '80px' }}>Name:</strong>
                  <span>Crystal Cove Beauty India Support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <strong style={{ minWidth: '80px' }}>Email:</strong>
                  <a href="mailto:support@crystalcovebeauty.in" style={{ color: 'var(--color-text)', textDecoration: 'underline' }}>support@crystalcovebeauty.in</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <strong style={{ minWidth: '80px' }}>Phone:</strong>
                  <span>+91 98765 43210</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <strong style={{ minWidth: '80px' }}>Address:</strong>
                  <span>123 Luxury Avenue, Suite 400<br/>New Delhi, DL 110001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
